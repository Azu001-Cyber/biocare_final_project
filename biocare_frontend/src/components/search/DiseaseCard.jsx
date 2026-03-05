import { useNavigate } from "react-router-dom";

export default function DiseaseCard({ disease }) {
    const navigate = useNavigate();

    return (
        <div
        onClick={() => navigate(`/disease/${disease.id}`)}
        className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-teal-500 transition cursor-pointer"
        >
        {/* <div className="flex justify-between items-start mb-2"> */}
            <h3 className="text-lg font-semibold text-slate-800">
            {disease.name}
            </h3>
            <span className="text-xs text-slate-500 mb-1">
                Symptoms
            </span>
            <p className="text-slate-600 text-sm line-clamp-2">
            {disease.symptoms}
            </p>
        </div>
        // </div>
    );
}