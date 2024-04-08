import { twMerge } from "tailwind-merge"
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
import { cineFadeIn } from "src/utils/motion"

export const FormInput = ({label,className,...props}) => {
  return (
    <motion.div className="flex flex-col gap-1 w-full p-2 bg-transparent" initial="hidden" animate="show" variants={cineFadeIn("up","tween",0.7,0.5)}>
        <label className="text-md lg:text-xl text-white font-bold leading-3">{label}</label>
        <input  className={twMerge(`w-full py-4 placeholder:text-xs text-white font-semibold text-sm md:text-md lg:text-lg border-b-2 border-bg_primary outline-none bg-transparent focus:border-btn_primary`,className)} {...props}/>
    </motion.div>
  )
}
FormInput.propTypes={
    label:PropTypes.string,
    className:PropTypes.string,
    props:PropTypes.object
}
