import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
    if (props.phonetic) {
        return (
            <div className="Phonetics">
                <h5>Phonetics: {props.phonetic}</h5>
                <br />
            </div>
        );
    } else {
        return null
    }
        
    
}