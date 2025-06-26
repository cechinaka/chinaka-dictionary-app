import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
    console.log(props.meaning);
        return (
            <div className="Meanings">
                <h3>{props.meaning.partOfSpeech}</h3>  
                <p>
                    {props.meaning.definition}
                    <br />
                    <em>{props.meaning.example}</em>
                </p>
                <Synonyms synonyms={props.meaning.synonyms}/>
            </div>
        );
}