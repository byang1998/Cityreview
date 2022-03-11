import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`

const CityLogo = styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`

const CityName = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const City = (props) => {
    return (
        <Card>
            <CityLogo>
            <img src={props.attributes.image_url} alt={props.attributes.name}/>
        </CityLogo>
        <CityName>{props.attributes.name}</CityName>
        <Rating score={props.attributes.avg_score}/>

        <LinkWrapper>
            <Link to={`/cities/${props.attributes.slug}`}>View City</Link>    
        </LinkWrapper>        
        </Card>
    )
}

export default City