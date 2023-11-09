import React from "react";


export default function StatisticLine (props) {
    
    return (
    <>
        
            <tr>
                <td>{props.title}:</td> 
                <td>{props.value}</td> 
            </tr>


        
    
    </>
    )
}