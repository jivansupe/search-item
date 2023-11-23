import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
const DrugInputSuggestions = () => {
    const searchInputRef = useRef(null);
    const navigate = useNavigate(null);
    const [searchResults, setSearchResults] = useState([]);

    const handleOnChange = () => {
        if(searchInputRef?.current && searchInputRef?.current?.value?.length > 0){
            fetch(`https://rxnav.nlm.nih.gov/REST/spellingsuggestions.json?name=${searchInputRef?.current?.value}`).then((response) =>{
                return response.json();
            }).then((data) => {
                if(data?.suggestionGroup?.suggestionList?.suggestion){
                    setSearchResults(data.suggestionGroup.suggestionList.suggestion);
                }else{
                    setSearchResults([]);
                }
                console.log("Data: ",data);
            })
        }else{
            setSearchResults([]);
        }
    }

    const suggestionList = useMemo(() => {
        if(searchResults && searchResults.length) {
            return (
                <ul>
                    {searchResults.map((item) => {
                        return (
                            <li onClick={() => {
                                navigate(`/drugs/${item}`);
                            }}>{item}</li>
                        )
                    })}
                </ul>
            )
        } 
        else{
            return <></>;
        }
        
    },[searchResults])
    return (
        <div className='searchContainer'>
                <input type="text" ref={searchInputRef} onChange={handleOnChange}></input>
                <div>{suggestionList}</div>
            </div>
    )
}
export default DrugInputSuggestions;