import { setResult, setLoading } from '../../slices/disease'
import { apiConnector } from '../apiConnector'
import { endpoints } from '../api'
import { toast } from 'react-hot-toast'

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
        console.log(data)
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", DIABETES_API, {
                data,
            })

            console.log("DIABETES API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }


            dispatch(setResult())

            navigate("/dashboard/diabetes")
        } catch (error) {
            console.log("LOGIN API ERROR............", error)
            toast.error(error.response.data.message)
        }
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