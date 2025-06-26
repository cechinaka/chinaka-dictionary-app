import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
        <div>
            <strong>Synonyms:</strong>
            {props.synonyms.map(function(synonyms, index) {
                return <div key={index}>
                    {synonyms}
                </div>
            })}
        </div>
    )
    } else {
        return null;
    }
}