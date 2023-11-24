const BASE_URL = process.env.REACT_APP_BASE_URL 

console.log(BASE_URL)

export const endpoints = {
    DIABETES_API: BASE_URL + "predict/diabetes",
    CANCER_API: BASE_URL + "",
    HEART_API: BASE_URL + "predict/heartattack",
    LIVER_API: BASE_URL + "predict/liver",
    KIDNEY_API: BASE_URL + "",
    PARKINSON_API: BASE_URL + "predict/parkinson", 
}
