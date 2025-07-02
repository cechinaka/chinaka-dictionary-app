import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
        return (
            <div className="Meanings">
                <h3>{props.meaning.partOfSpeech}</h3>
                <p>
                    <div className="definitions">
                        {props.meaning.definition}
                    </div>
                    <Examples example={props.meaning.example} />
                    <Synonyms synonyms={props.meaning.synonyms} />

                </p>
            </div>
        );
}