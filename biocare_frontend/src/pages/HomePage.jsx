
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import SearchSection from "../components/search/SearchSection";
import SearchResults from "../components/search/SearchResult";

import { useState } from "react";
function Home() {
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        const res = await fetch(`/api/diseases/?search=${query}`);
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