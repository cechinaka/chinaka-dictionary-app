import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary(props) {
    let [searchWord, setSearchWord] = useState(props.defaultSearchWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search() {
        let word = `${searchWord}`;
        const apiKey = `b8bt1eedc53a49e91cf7bb6aob435022`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    
    function handleSearchWordChange(event) {
        setSearchWord(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleSearchWordChange} />
                    </form>
                    <div className="suggestions">
                        Suggested words: sunset, pool, airplane...
                    </div>
                </section>
                <Results results={results} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}