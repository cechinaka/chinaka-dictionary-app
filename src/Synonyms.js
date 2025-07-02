import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
        <div className="Synonyms">
            <strong>Synonyms: </strong>
            <br />
            {props.synonyms.map(function(synonyms, index) {
                return <div className="SynonymWords" key={index}>
                    {synonyms}
                </div>
            })}
        </div>
    )
    } else {
        return null;
    }
}