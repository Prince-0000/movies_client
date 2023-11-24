import { setResult, setLoading } from '../../slices/disease'
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
        try {
            const response = await apiConnector("POST", HEART_API, {
                data,
            })

            console.log("HEART API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }


            dispatch(setResult())

            navigate("/dashboard/heart")
        } catch (error) {
            console.log("LOGIN API ERROR............", error)
            toast.error(error.response.data.message)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}



// call for diabetes checkup
export function diabetes(data, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log('backen-call',data)
        console.log(DIABETES_API);

        dispatch(setLoading(true))
        

        const apiUrl = 'http://127.0.0.1:8000/predict/diabetes';

        const requestData = {
          "Pregnancies": parseInt(data.Pregnancies),
          "Glucose": parseInt(data.Glucose),
          "BloodPressure": parseInt(data.BloodPressure),
          "SkinThickness":parseInt(data.SkinThickness),
          "Insulin":parseInt(data.Insulin),
          "BMI":parseFloat(data.BMI),
          "DiabetesPedigreeFunction":parseFloat(data.DiabetesPedigreeFunction),
          "Age": parseInt(data.Age)
        };
        
        console.log('req data',requestData);
        axios.post(apiUrl, requestData)
          .then(response => {
            console.log('Response:', response);
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
        try {
            const response = await apiConnector("POST", LIVER_API, {
                data,
            })

            console.log("LIVER API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }


            dispatch(setResult())

            navigate("/dashboard/liver")
        } catch (error) {
            console.log("LIVER API ERROR............", error)
            toast.error(error.response.data.message)
        }
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
        try {
            const response = await apiConnector("POST", PARKINSON_API, {
                data,
            })

            console.log("KIDENY API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            dispatch(setResult())
            navigate("/dashboard/parkinson")
        } catch (error) {
            console.log("KIDENY API ERROR............", error)
            toast.error(error.response.data.message)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}