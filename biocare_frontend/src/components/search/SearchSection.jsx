import { useState } from "react";

export default function SearchSection({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        onSearch(query);
    };

    return (
        <section className="py-20 bg-slate-100">
        <div className="max-w-3xl mx-auto text-center px-6">
            
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
            Search Trusted Medical Information
            </h1>

            <form onSubmit={handleSubmit} className="relative">
            <input
                type="text"
                placeholder="Search diseases (e.g. Malaria, Diabetes...)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 text-lg"
            />
            </form>

        </div>
        </section>
    );
}