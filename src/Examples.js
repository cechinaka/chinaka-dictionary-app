import React from "react";

export default function Examples(props) {
    console.log(props.example);
    if (props.example) {
        return (
            <div>
                <em>{props.example}</em>
            </div>
        )
    } else {
        return null;
    }
}