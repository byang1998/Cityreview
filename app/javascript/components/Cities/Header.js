import styled from 'styled-components'
import React, { useState } from "react";
 import SearchBar from './Searchbar';
 import Addcity from './Addcity';


const Wrapper = styled.div`
  padding:80px 100px 10px 100px;
  
  h1 {
    font-size:42px;
  }
  button {
    color: #fff;
  background-color: black;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  // width:100%;
  // font-size:16px;
   cursor: pointer;
  // transition: ease-in-out 0.2s;
  // &:hover {
  //   background: #71b406;
  //   border-color: #71b406;
  // }
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Header = ({searchTerm, updateSearchTerm, addNewCityToState}) => {
 
  const [isvisible, setisvisible] = useState(false)

  function click(e){
   setisvisible(isvisible => !isvisible)
}

  return(
    <Wrapper>
      
     
    <h1>RateMyCity</h1>
    <Subheader>Honest, unbiased City reviews. Share your experience.</Subheader>
    <SearchBar updateSearchTerm={updateSearchTerm} searchTerm={searchTerm}/> 
  
    <button onClick={click}> {isvisible ? "Hide Form" : "Add New City"} </button>

    {isvisible ?  <Addcity addNewCityToState={addNewCityToState} />: null}
    
    
    </Wrapper>
  )
}

export default Header