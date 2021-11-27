import  type { LinksFunction } from "remix";
import React from 'react'; 
import {Outlet, Link} from "remix"; 
import stylesUrl from "../../styles/puns.css"; 

export let links: LinksFunction = () => {
    return [ 
        { 
            rel:"stylesheet",
            href:stylesUrl
        }
    ]
}

function PunsIndexRoute() {
    return (
        <div>
            This is where Puns live
        </div>
    )
}

export default PunsIndexRoute
