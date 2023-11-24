import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { diabetesData } from '../data/diabetesData';
import { useForm } from 'react-hook-form';
import {diabetes} from '../services/operations/backencall'
import { useNavigate } from 'react-router-dom';
const Diabetes = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: {  isSubmitSuccessful },
  } = useForm();

  const { result } = useSelector((state) => state.disease);

  const submitForm = async (data) => {
    try {

      const formattedData = {
        Pregnancies: parseInt(data.Pregnancies),
        Glucose: parseInt(data.Glucose),
        BloodPressure: parseInt(data.BloodPressure),
        SkinThickness: parseInt(data.SkinThickness) ,
        Insulin: parseInt(data.Insulin),
        BMI: parseFloat(data.BMI),
        Age: parseInt(data.Age),
        DiabetesPedigreeFunction: parseFloat(data.DiabetesPedigreeFunction),
      };

      console.log(formattedData);
      dispatch(diabetes(formattedData, navigate))

    } catch (error) {
      console.log('SUBMITFORM ERROR...', error.message);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        BMI: "",
        Age: "",
        BloodPressure: "",
        DiabetesPedigreeFunction: "",
        Glucose: "",
        Insulin: "",
        Pregnancies: "",
        SkinThickness: ""
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
      {result ? (
        <div>
          {/* Your result content */}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(submitForm)}
          className='flex flex-col ml-36  rounded-md mt-28 w-9/12 gap-2 p-2 bg-richblack-800'
        >
          <div className='flex w-full  p-2 gap-[20px] bg-richblack-800  flex-wrap'>
            {diabetesData.map((data, index) => (
              <div key={data.id} className='flex w-[210px]  justify-center flex-col gap-2 '>
                <label
                  className='text-richblack-5  text-[14px] leading-[22px] font-medium'
                  htmlFor={`${data.name}`}
                >
                  {data.label}
                </label>
                <input
                  type='number'
                  step = 'any'
                  className='bg-richblack-700 text-[16px] text-richblack-5 font-medium  h-[38px] rounded-md p-[12px] shadow-sm shadow-richblack-400'
                  name={`${data.name}`}
                  id={`${data.name}`}
                  {...register(`${data.name}`, { required: true })}
                />
              </div>
            ))}
          </div>
          <button
            type='submit'
            className='p-[12px] ml-2 text-center leading-[24px] h-[48px] w-[150px] rounded-md bg-yellow-50 text-[16px] font-bold text-black '
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Diabetes;
