import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import City from "./City"
import styled from 'styled-components'
import Header from './Header'

const Cities = () => {
    const [cities, setCities] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    function updateSearchTerm(e) {
        const term = e.target.value
        setSearchTerm(term)
    }

    function addNewCityToState(newCity){
      const newCityList = [...cities, newCity.data]

      setCities(newCityList)
    }
    
        useEffect(() =>{
            axios.get('/api/v1/cities.json')
            .then( resp => {setCities(resp.data.data)})
            .catch( resp => console.log(resp))
        }, [])

        const filteredCities = cities.filter(city => city.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()))
       
        const grid = filteredCities.map( item => {
            return(
            <City 
            key={item.attributes.id}
            attributes = {item.attributes}
            />)
        })
     
       
    return  (
        <Home>
              
                <Header updateSearchTerm={updateSearchTerm} searchTerm={searchTerm} addNewCityToState={addNewCityToState} />
                <Grid>
                {grid}
                </Grid>
    
    </Home>
    )
}

export default Cities


const Home = styled.div`
text-align: center;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
`


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;
width: 100%;
padding: 20px;
`