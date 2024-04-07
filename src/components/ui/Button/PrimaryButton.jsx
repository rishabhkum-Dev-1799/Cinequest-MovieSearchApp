import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { cineFadeIn } from 'src/utils/motion';

const PrimaryButton = ({ label, onClick }) => {
  const onNavigateBack = (event) => {
    event.preventDefault();
    onClick();
  };
  return (
    <motion.button
      variants={cineFadeIn('up', 'spring', 1.3, 0.5)}
      initial='hidden'
      animate='show'
      whileHover={{ scale: 1.1 }}
      className='mt-5 rounded-full bg-[#E86A92] px-12 py-4 text-xl font-bold text-white '
      onClick={onNavigateBack}>
      {label}
    </motion.button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default PrimaryButton;
