import PropTypes from 'prop-types';
import { useState } from 'react';
import {motion} from 'framer-motion';

import FormWrapper from 'src/components/common/Wrapper/FormWrapper';
import { FormInput } from 'src/components/ui';
import PrimaryButton from 'src/components/ui/Button/PrimaryButton';
import { useActions } from 'src/hooks/useActions';
import { btnLabels, labels } from 'src/lang';
import { cineFadeIn } from 'src/utils/motion';

const LoginPage = () => {
  const { loginAction, logoutAction } = useActions();
  const [formData, setFormData] = useState({
    email: '',
  });

  // handler functions
  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginAction(formData?.email);
  };

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <FormWrapper
        label={btnLabels?.login}
        infoLabel={labels?.loginInfoLabel}>
        <form
          className='flex flex-col gap-2 w-full'
          onSubmit={onSubmitHandler}>
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
              variants={cineFadeIn('up', 'spring', 1.3, 0.5)}
              initial='hidden'
              animate='show'
              whileHover={{ scale: 1.1 }}
              className='mt-5 rounded-full bg-[#E86A92] px-12 py-4 text-xl font-bold text-white '
              type='submit'>
              {btnLabels?.login}
            </motion.button>
          </div>
        </form>
      </FormWrapper>
    </div>
  );
};
LoginPage.protoTypes = {};
export default LoginPage;
