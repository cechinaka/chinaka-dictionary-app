import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';
import Photos from "./Photos";

export default function Dictionary(props) {
    let [searchWord, setSearchWord] = useState(props.defaultSearchWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handleImageResponse(response) {
        console.log(response.data.photos);
        setPhotos(response.data.photos);
    }

    function search() {
        let word = `${searchWord}`;
        const apiKey = `b8bt1eedc53a49e91cf7bb6aob435022`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let query = `${searchWord}`;
        const imageApiKey = `b8bt1eedc53a49e91cf7bb6aob435022`;
        let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${query}&key=${imageApiKey}`;
        axios.get(imageApiUrl).then(handleImageResponse);
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
                        <h1>What word do you want to look up?</h1>
                        <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleSearchWordChange} defaultValue={props.defaultSearchWord} />
                    </form>
                    <div className="suggestions">
                        Suggested words: sunset, pool, airplane...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}