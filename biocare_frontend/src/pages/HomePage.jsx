
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import SearchSection from "../components/search/SearchSection";
import SearchResults from "../components/search/SearchResult";

import { useState } from "react";

// const URL = 'http://127.0.0.1:8000'
function Home() {
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        
        const res = await fetch(`http://127.0.0.1:8000/api/diseases/search/?q=${query}`
        );

        const data = await res.json();
        
        setResults(data);
    };

    return (
        <>
        <Header/>
        <SearchSection onSearch={handleSearch} />
        <SearchResults results={results} />
        <Footer/>
        </>
    );
}
export default Home;