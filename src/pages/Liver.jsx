import React from 'react'
import { liverData } from '../data/liverData'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {liver} from '../services/operations/backencall'

const Liver = () => {
 
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

      
      console.log(data);
      dispatch(liver(data, navigate))

    } catch (error) {
      console.log('SUBMITFORM ERROR...', error.message);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        age: "",
        gender: "", 
        Total_bilirubin: "",
        conjucate_bilirubin: "",
        Alkaline_phosphate: "",
        Alamin_Aminotransferase:"",
        Asparated_Aminotransferase: "",
        Total_Protiens: "",
        Albumin: "",
        Alubumin_Globulin_ratio:""
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
      {result ? (
        <div>
              <h1 className=' text-white  text-xl mt-9'>{result}</h1>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(submitForm)}
          className='flex flex-col ml-36  rounded-md mt-28 w-9/12 gap-2 p-2 bg-richblack-800'
        >
          <div className='flex w-full  p-2 gap-[20px] bg-richblack-800  flex-wrap'>
            {liverData.map((data, index) => (
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
  )
}

export default Liver
