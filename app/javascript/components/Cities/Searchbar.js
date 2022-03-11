import React from 'react';
import styled from 'styled-components'

function SearchBar({updateSearchTerm, searchTerm}){
    
  
return (
<Searchwrapper>
    <h3></h3>
    <input 
            type="text" 
            placeholder="    Search for your city to get started                                                         🔍" 
            name="search"
            onChange={updateSearchTerm}
            value={searchTerm}
            autocomplete="off"
    />
   
    </Searchwrapper>
    
)
}

export default SearchBar

const Searchwrapper= styled.div`
border-radius: 4px;
  input {
    width: 66%;
    min-height:36px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 10px;
    padding: 12px;
    font-size: 20px;
    
   
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`