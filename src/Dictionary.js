import React, {useState} from "react";

export default function Dictionary() {
    let [searchWord, setSearchWord] = useState("");
    
    function search (event) {
        event.preventDefault();
        alert(`Searching for ${searchWord} definition`);
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