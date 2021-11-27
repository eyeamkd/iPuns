import {LoaderFunction, useLoaderData} from "remix"; 
import React from 'react'; 

export const loader: LoaderFunction = async ({params}) => {
    console.log("Params are ", params);  
    return params;
}

function IndividualPun() { 
    let {punid} = useLoaderData() 
    console.log("Loader Data is", punid);
    return (
        <div> 
            {punid} <br/>
            This is what a new pun should look like
        </div>
    )
}

export default IndividualPun
