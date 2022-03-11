import React, { useState, useEffect, Fragment } from 'react'
import axios, { Axios } from 'axios'
import {useParams} from 'react-router-dom';
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import styled from 'styled-components'
import AxiosWrapper from '../../utils/Requests/AxiosWrapper'

const Wrapper= styled.div`
margin-left: auto;
margin-right: auto;
`

const Column = styled.div`
background: rgba(240, 226, 233, 0.8); 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: white;
    border-top : 10px solid rgba(240, 226, 233, 0.8);
    
  }
`
const Main = styled.div`
padding-left: 60px;
`


const City = (props) => {
    const [city, setCity] = useState({})
    const [reviews, setReviews] = useState([])
    const [review, setReview]= useState({title: '', description: '', score: 0 })
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState('')
    const { slug } = useParams();

    useEffect(()=> {
        
        
        //const slug = props.match.params.slug
        
        const url = `/api/v1/cities/${slug}`
        AxiosWrapper.get(url)
        .then( resp => {
        setCity(resp.data)
        setReviews(resp.data.included)
        setLoaded(true)
        })
        .catch( resp => console.log(resp) )
    }, []) 

    const handleChange = (e) => {
        e.preventDefault()

        //console.log('name:', e.target.name, 'value:', e.target.value)
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    
    }

    //Create a review 
    const handleSubmit = (e) => {
        e.preventDefault()
        const city_id = parseInt(city.data.id)

        console.log("ID", city_id);
        console.log("REV", review);

        AxiosWrapper.post('/api/v1/reviews', {...review, city_id})
        .then( (resp) => {
            setReviews([...reviews, resp.data.data])
            setReview({title:'', description:'', score: 0})
            setError('')
        })
        .catch(resp => console.log(resp))

    }

    //Delete Review
    const handleDestroy = (id, e) => {
        e.preventDefault()

        AxiosWrapper.delete(`/api/v1/reviews/${id}`)
        .then( (data) => {

            const included = [...reviews]
            console.log(included)
            const index = included.findIndex( (data) => data.id === id )
            included.splice(index, 1)

            setReviews(included)
    })
    .catch( data => console.log('Error', data) )
}

    const setRating = (score, e) => {
        e.preventDefault()

        setReview({...review, score})
    }

    let total, average = 0
    let userReviews
    if (reviews && reviews.length > 0) {
        total = reviews.reduce((total, review) => total + review.attributes.score, 0)
        average = total > 0 ? (parseFloat(total) / parseFloat(reviews.length)) : 0

        userReviews = reviews.map((review, index) => {

        
        return (
            <Review
            key={index}
            id={review.id}
            attributes={review.attributes}
            handleDestroy={handleDestroy}
            />
        )
    })
}
   
    return (
        <Wrapper>
            {
            loaded &&
            <Fragment>
          <Column>
            <Main>
           <Header
            attributes={city.data.attributes} 
            reviews={reviews}
            average={average.toFixed(2)}
           />
          {userReviews}
            </Main>
        </Column>
        <Column>
            <ReviewForm
            name={city.data.attributes.name}
            review={review}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setRating={setRating}
            error={error}
            />
        </Column>
        </Fragment>
            }
        </Wrapper>
    )
}

export default City