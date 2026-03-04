import DiseaseCard from "./DiseaseCard";

export default function SearchResults({ results }) {
    if (!results || results.length === 0) {
        return (
        <div className="text-center py-10 text-slate-500">
            No results found.
        </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        {results.map((disease) => (
            <DiseaseCard key={disease.id} disease={disease} />
        ))}
        </div>
    );
}