import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {parkinsonData} from '../data/parkinsonDtats'
import { parkinson } from '../services/operations/backencall';
const Parkinson = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { isSubmitSuccessful },
    } = useForm();
  
    const { result } = useSelector((state) => state.disease);
  
    const submitForm = async (data) => {
      try {


        const formattedData = {
            MDVP_fo: parseFloat(data.MDVP_fo),
            MDVP_fi: parseFloat(data.MDVP_fi),
            MDVP_Flo:parseFloat(data.MDVP_Flo),
            MDVP_Jitter:parseFloat(data.MDVP_Jitter),
            MDVP_Jitter_abs:parseFloat(data.MDVP_Jitter_abs),
            MDVP_RAP:parseFloat(data.MDVP_RAP),
            MDVP_PPQ:parseFloat(data.MDVP_PPQ),
            Jitter_DDP:parseFloat(data.Jitter_DDP),
            MDVP_Shimmer:parseFloat(data.MDVP_Shimmer),
            MDVP_Shimmer_dB:parseFloat(data.MDVP_Shimmer_dB),
            Shimmer_APQ3:parseFloat(data.Shimmer_APQ3),
            ShimmerAPQ5:parseFloat(data.ShimmerAPQ5),
            MDVP_APQ:parseFloat(data.MDVP_APQ),
            Shimmer_DDA:parseFloat(data.Shimmer_DDA),
            NHR:parseFloat(data.NHR),
            HNR:parseFloat(data.HNR),
            status:parseFloat(data.status),
            RPDE:parseFloat(data.RPDE),
            DFA:parseFloat(data.DFA),
            spread1:parseFloat(data.spread1),
            spread2:parseFloat(data.spread2),
            D2:parseFloat(data.D2),
            PPE:parseFloat(data.PPE),
          };

        console.log(formattedData);
        dispatch(parkinson(formattedData, navigate))
      } catch (error) {
        console.log('SUBMITFORM ERROR...', error.message);
      }
    };
  
    useEffect(() => {
      if (isSubmitSuccessful) {
        reset({
            MDVP_fo:"",
            MDVP_fi:"",
            MDVP_Flo:"",
            MDVP_Jitter:"",
            MDVP_Jitter_abs:"",
            MDVP_RAP:"",
            MDVP_PPQ:"",
            Jitter_DDP:"",
            MDVP_Shimmer:"",
            MDVP_Shimmer_dB:"",
            Shimmer_APQ3:"",
            ShimmerAPQ5:"",
            MDVP_APQ:"",
            Shimmer_DDA:"",
            NHR:"",
            HNR:"",
            status:"",
            RPDE:"",
            DFA:"",
            spread1:"",
            spread2:"",
            D2:"",
            PPE:"",
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
              {parkinsonData.map((data, index) => (
                <div key={data.id} className='flex w-[210px]  justify-center flex-col gap-2 '>
                  <label
                    className='text-richblack-5  text-[14px] leading-[22px] font-medium'
                    htmlFor={`${data.name}`}
                  >
                    {data.label}
                  </label>
                  <input
                    type='number'
                    step="any"
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

export default Parkinson
