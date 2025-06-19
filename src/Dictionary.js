import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let [searchWord, setSearchWord] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data.meanings[0].definition);
    }
    
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${searchWord} definition`);

        let word = `${searchWord}`;
        const apiKey = `b8bt1eedc53a49e91cf7bb6aob435022`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSearchWordChange(event) {
        setSearchWord(event.target.value);
    }

    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleSearchWordChange} />
        </form>
        
        <Results results={results} />
    </div>;
}