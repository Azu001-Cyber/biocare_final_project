import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowBigLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DiseaseDetails() {
    const { id } = useParams();
    const [disease, setDisease] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/diseases/${id}/`)
        .then((res) => res.json())
        .then((data) => setDisease(data));
    }, [id]);

    if (!disease) {
        return <div className="text-center py-20">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
        
        <h1 className="text-3xl font-semibold text-slate-800 mb-6">
            {disease.name}
        </h1>

        <Section title="Symptoms" content={disease.symptoms} />
        <Section title="Causes" content={disease.causes} />
        <Section title="Treatment" content={disease.treatment} />
        <Section title="Prevention" content={disease.prevention} />

        </div>
    );
}

function Section({ title, content }) {
    const navigate = useNavigate();
    return (
        <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
            {title}
        </h2>
        <p className="text-slate-600 leading-7">
            {content}
        </p>
        </div>
        
    );
}