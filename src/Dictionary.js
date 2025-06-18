import React, {useState} from "react";
import axios from "axios";

export default function Dictionary() {
    let [searchWord, setSearchWord] = useState("");

    function handleResponse(response) {
        console.log(response);
    }
    
    function search (event) {
        event.preventDefault();
        alert(`Searching for ${searchWord} definition`);

        let word = `${searchWord}`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=b8bt1eedc53a49e91cf7bb6aob435022`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSearchWordChange(event) {
        setSearchWord(event.target.value);
    }

    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleSearchWordChange} />
        </form>
    </div>;
}