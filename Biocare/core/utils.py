def symptom_checker(user_input):
    from .models import Disease

    user_symptoms = [s.strip().lower() for s in user_input.split(",")]
    results = []

    for disease in Disease.objects.all():
        disease_symptoms = [
            s.strip().lower() for s in disease.symptoms.split(",")
        ]

        match_count = len(set(user_symptoms) & set(disease_symptoms))
        score = match_count / len(disease_symptoms)

        if match_count > 0:
            results.append({
                "disease": disease.name,
                "score": round(score, 2)
            })

    results.sort(key=lambda x: x["score"], reverse=True)
    return results