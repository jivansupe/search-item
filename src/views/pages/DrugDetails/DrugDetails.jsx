import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import DrugInputSuggestions from '../../../components/DrugInputSuggestions/DrugInputSuggestions';
import { useParams } from 'react-router-dom';

const DrugDetails = () => {
    const params = useParams();
    useEffect(() => {
        if(params.drugName){
            fetch(`https://rxnav.nlm.nih.gov/REST/Prescribe/rxcui/${params.drugName}/ndcs.json`).then((response) =>{
                return response.json();
            }).then((data) => {
                /* if(data?.suggestionGroup?.suggestionList?.suggestion){
                    setSearchResults(data.suggestionGroup.suggestionList.suggestion);
                } */
                console.log("Data: ",data);
            })
        }
    }, [params.drugName])
    return (
        <>
            <h1>{params.drugName}</h1>        
        </>
    );
}

export default DrugDetails;