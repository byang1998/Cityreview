import {useState} from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from "axios";


const Addcity = (props) => {
  
    const [name, setName] = useState("")
    const [image_url, setImage_url] = useState("")
   

    const handleSubmit = (e) =>{
      e.preventDefault()
    const city = { name: name, image_url: image_url}

    fetch('/api/v1/cities/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(city)
    })
    .then(res => res.json())
    .then(createdCity => {
      setName("")
      setImage_url("")
      props.addNewCityToState(createdCity)
    })
  }

    
   
return(
    <Card> 
    <form  onSubmit={handleSubmit} >
   
                <Wrapper>
                <Field>
                    <input type="text" value={name} name="City" onChange={(e) => setName(e.target.value)} placeholder="City name" autocomplete="off"/>
                </Field>
                <Field>
                    <input   type="text" value={image_url} name="AddImage" onChange={(e) => setImage_url(e.target.value)}placeholder="City Logo"/>
                </Field>
                <SubmitBtn type="submit" >Add City</SubmitBtn>
               
                </Wrapper>
                
    </form>
    
    </Card>
)


}

export default Addcity

const Card = styled.div`
   
    background: #fff;
   
    align-items: center;
`
const Wrapper = styled.div`
   
    background: #fff;
   width: 80%;
   //display:flex;
   //flex-direction:row;
   //justify-content: space-evenly;
   align-items: center;
   
`


const SubmitBtn = styled.button`
  color: #fff;
  background-color: black;
  border-radius: 4px;   
  padding:5px 5px;  
  border: 1px solid #71b406;
  width:20%;
  font-size:12px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`
const Field = styled.div`
  border-radius: 4px;
  input {
    width: 70%;
    min-height:15px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
    font-size: 15px;
  }
  
  textarea {
    width: 70%;
    min-height:15px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`