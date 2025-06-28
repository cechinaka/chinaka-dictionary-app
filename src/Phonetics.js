import React from "react";

export default function Phonetics(props) {
    console.log(props.phonetic);
    if (props.phonetic) {
        return (
            <div>
                <h5>Phonetics: {props.phonetic}</h5>
                <br />
            </div>
        );
    } else {
        return null
    }
        
    
}