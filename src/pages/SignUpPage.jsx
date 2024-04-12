import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import FormWrapper from 'src/components/common/Wrapper/FormWrapper';
import { useActions } from 'src/hooks/useActions';
import { FormInput } from 'src/components/ui';
import { btnLabels, errorMessages, labels } from 'src/lang';
import { cineFadeIn } from 'src/utils/motion';
import { getToastErrorMessage } from 'src/helper/toastFunctions';


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    userFirstName:'',
  });
  const { addNewUserAction,loginAction } = useActions();
  const {watchListDb}=useSelector(state=>state.watchList)
  const navigate=useNavigate();
  
  // handler functions
  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(watchListDb.hasOwnProperty(formData?.email)){
      getToastErrorMessage(errorMessages?.userAlreadyExist)
      return;
    }
    else {
      addNewUserAction(formData?.email);
      loginAction(formData?.email);
      navigate("/")

    }
  };
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <FormWrapper
        label={btnLabels?.signUp}
        infoLabel={labels?.signUpInfoLabel}>
        <form
          className='flex flex-col gap-2 w-full'
          onSubmit={onSubmitHandler}>
          <FormInput
            label={'FirstName'}
            placeholder='Enter You FirstName...'
            required
            name='userFirstName'
            value={formData?.userFirstName}
            onChange={onChangeHandler}
            type='text'
          />
          <FormInput
            label={'Email Id'}
            placeholder='Enter Your Email...'
            required
            name='email'
            value={formData?.email}
            onChange={onChangeHandler}
            type='email'
          />
          <div className='w-full flex items-center justify-center'>
            <motion.button
              variants={cineFadeIn('up', 'tween', 1.3, 0.5)}
              initial='hidden'
              animate='show'
              whileHover={{ scale: 1.1 }}
              className='mt-5 rounded-full bg-[#E86A92] px-12 py-4 text-xl font-bold text-white '
              type='submit'>
              {btnLabels?.signUp}
            </motion.button>
          </div>
        </form>
          {/* Transition to Login Page */}
          <motion.p className='text-md lg:text-lg text-bg_primary mt-6 text-center' initial="hidden" animate="show" variants={cineFadeIn("up","tween",1.3,0.5)}>
            {labels?.alreadyHaveAccount}
            <Link className='text-btn_primary ml-2' to={"/login"}>
              {btnLabels?.login}
            </Link> 
        </motion.p>
      </FormWrapper>
    </div>
  );
};

export default SignUpPage;
