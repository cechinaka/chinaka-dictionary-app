import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
        return (
            <div className="Results">
                <h2>{props.results.word}</h2>
                <Phonetics phonetic={props.results.phonetic} />

                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meanings meaning={meaning} />
                        </div>
                    );
                })}
            </div>
            );
        } else {
            return null;
        }
}