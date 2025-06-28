import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
    console.log(props.meaning);
        return (
            <div className="Meanings">
                <h3>{props.meaning.partOfSpeech}</h3>  
                <p>
                    <strong>Definition: </strong>{props.meaning.definition}
                    <Examples example={props.meaning.example} />
                    <Synonyms synonyms={props.meaning.synonyms} />

                </p>
            </div>
        );
}