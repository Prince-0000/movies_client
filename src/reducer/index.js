import { combineReducers } from '@reduxjs/toolkit'
import diseaseReducer from '../slices/disease'

const rootReducer = combineReducers({
    disease: diseaseReducer,
})

export default rootReducer;