const BASE_URL = process.env.REACT_APP_BASE_URL 

console.log(BASE_URL)

export const endpoints = {
    DIABETES_API: BASE_URL + "",
    CANCER_API: BASE_URL + "",
    HEART_API: BASE_URL + "",
    LIVER_API: BASE_URL + "",
    KIDNEY_API: BASE_URL + "",
    PARKINSON_API: BASE_URL + "", 
}
