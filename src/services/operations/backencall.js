import { setResult, setLoading ,setParams} from '../../slices/disease'
import { apiConnector } from '../apiConnector'
import { endpoints } from '../api'
import { toast } from 'react-hot-toast'
import axios from 'axios'
const {
    DIABETES_API,
    HEART_API,
    LIVER_API,
    CANCER_API,
    KIDNEY_API,
    PARKINSON_API
} = endpoints





// call for heart checkup
export function heart(data, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log(data)

        dispatch(setLoading(true))

        const formattedData = {
            "age": parseInt(data.age),
            "sex": parseInt(data.sex),
            "cp": parseInt(data.cp),
            "trestbps": parseInt(data.trestbps),
            "chol": parseInt(data.chol),
            "fbs": parseInt(data.fbs),
            "restecg": parseInt(data.restecg),
            "thalach": parseInt(data.thalach),
            "exang": parseInt(data.exang),
            "oldpeak": parseFloat(data.oldpeak),
            "slope": parseInt(data.slope),
            "ca": parseInt(data.ca),
            "thal": parseInt(data.thal)
        };

        const apiUrl = 'http://127.0.0.1:8000/predict/heartattack';
        console.log("heart form data", formattedData);
        axios.post(apiUrl, formattedData)
            .then(response => {
                console.log('Response:', response);
                dispatch(setResult(response.data))
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
        // try {
        //     const response = await apiConnector("POST", HEART_API, {
        //         formattedData,
        //     })

        //     console.log("HEART API RESPONSE............", response)

        //     if (!response.data.success) {
        //         throw new Error(response.data.message)
        //     }


        //     dispatch(setResult())

        //     navigate("/dashboard/heart")
        // } catch (error) {
        //     console.log("heart API ERROR............", error)
        //     toast.error(error.response.data.message)
        // }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}



// call for diabetes checkup
export function diabetes(data, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log('backen-call', data)
        console.log(DIABETES_API);

        dispatch(setLoading(true))


        const apiUrl = 'http://127.0.0.1:8000/predict/diabetes';

        const requestData = {
            "Pregnancies": parseInt(data.Pregnancies),
            "Glucose": parseInt(data.Glucose),
            "BloodPressure": parseInt(data.BloodPressure),
            "SkinThickness": parseInt(data.SkinThickness),
            "Insulin": parseInt(data.Insulin),
            "BMI": parseFloat(data.BMI),
            "DiabetesPedigreeFunction": parseFloat(data.DiabetesPedigreeFunction),
            "Age": parseInt(data.Age)
        };

        console.log('req data', requestData);
        axios.post(apiUrl, requestData)
            .then(response => {
                console.log('Response:', response);
                dispatch(setResult(response.data))
            })
            .catch(error => {
                console.error('Error:', error.message);

            });
        // try {
        //     const response = await apiConnector("POST", DIABETES_API, {
        //         temp,
        //     })

        //     console.log("DIABETES API RESPONSE............", response)

        //     if (!response.data.success) {
        //         throw new Error(response.data.message)
        //     }


        //     dispatch(setResult())

        //     navigate("/dashboard/diabetes")
        // } catch (error) {
        //     console.log("LOGIN API ERROR............", error)
        //     toast.error(error.response.data.message)
        // }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}



// call for cancer checkup
export function cancer(data, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log(data)
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", CANCER_API, {
                data,
            })

            console.log("CANCER API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }


            dispatch(setResult())

            navigate("/dashboard/cancer")
        } catch (error) {
            console.log("CANCER API ERROR............", error)
            toast.error(error.response.data.message)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

// call for liver checkup
export function liver(data, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log(data)
        dispatch(setLoading(true))
        const formattedData = {
            age: parseInt(data.age),
            gender: parseInt(data.gender),
            Total_bilirubin: parseInt(data.Total_bilirubin),
            conjucate_bilirubin: parseFloat(data.conjucate_bilirubin),
            Alkaline_phosphate: parseInt(data.Alkaline_phosphate),
            Alamin_Aminotransferase: parseInt(data.Alamin_Aminotransferase),
            Asparated_Aminotransferase: parseInt(data.Asparated_Aminotransferase),
            Total_Protiens: parseInt(data.Total_Protiens),
            Albumin: parseInt(data.Albumin),
            Alubumin_Globulin_ratio: parseFloat(data.Alubumin_Globulin_ratio),
        };



        const apiUrl = 'http://127.0.0.1:8000/predict/liver';
        console.log("heart form data", formattedData);
        axios.post(apiUrl, formattedData)
            .then(response => {
                console.log('Response:', response);
                dispatch(setResult(response.data))
                dispatch(setParams(formattedData))
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
        // try {
        //     const response = await apiConnector("POST", LIVER_API, {
        //         data,
        //     })

        //     console.log("LIVER API RESPONSE............", response)

        //     if (!response.data.success) {
        //         throw new Error(response.data.message)
        //     }


        //     dispatch(setResult())

        //     navigate("/dashboard/liver")
        // } catch (error) {
        //     console.log("LIVER API ERROR............", error)
        //     toast.error(error.response.data.message)
        // }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

// call for kideny checkup
export function kideny(data, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log(data)
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", KIDNEY_API, {
                data,
            })

            console.log("KIDENY API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            dispatch(setResult())
            navigate("/dashboard/kideny")
        } catch (error) {
            console.log("KIDENY API ERROR............", error)
            toast.error(error.response.data.message)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

// call for parkinson checkup
export function parkinson(data, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log(data)
        dispatch(setLoading(true))

        const formattedData = {
            "MDVP_fo": 150.5,
            "MDVP_fi": 160.2,
            "MDVP_Flo": 120.3,
            "MDVP_Jitter": 0.005,
            "MDVP_Jitter_abs": 0.002,
            "MDVP_RAP": 0.003,
            "MDVP_PPQ": 0.004,
            "Jitter_DDP": 0.009,
            "MDVP_Shimmer": 0.015,
            "MDVP_Shimmer_dB": 0.8,
            "Shimmer_APQ3": 0.007,
            "ShimmerAPQ5": 0.01,
            "MDVP_APQ": 0.012,
            "Shimmer_DDA": 0.021,
            "NHR": 0.006,
            "HNR": 21.5,
            "RPDE": 0.45,
            "DFA": 0.65,
            "spread1": 5.0,
            "spread2": 0.15,
            "D2": 2.0,
            "PPE": 0.22
        }
        const apiUrl = 'http://127.0.0.1:8000/predict/parkinson';
        console.log("parkinson form data", formattedData);
        axios.post(apiUrl, formattedData)
            .then(response => {
                console.log('Response:', response);
                dispatch(setResult(response.data))
                dispatch(setParams(formattedData))
                
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
        // try {
        //     const response = await apiConnector("POST", PARKINSON_API, {
        //         data,
        //     })

        //     console.log("KIDENY API RESPONSE............", response)

        //     if (!response.data.success) {
        //         throw new Error(response.data.message)
        //     }

        //     dispatch(setResult())
        //     navigate("/dashboard/parkinson")
        // } catch (error) {
        //     console.log("KIDENY API ERROR............", error)
        //     toast.error(error.response.data.message)
        // }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}