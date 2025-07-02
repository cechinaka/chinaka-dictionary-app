import React from "react";
import "./Examples.css";

export default function Examples(props) {
    if (props.example) {
        return (
            <div className="Examples">
                {props.example}
            </div>
        )
    } else {
        return null;
    }
}