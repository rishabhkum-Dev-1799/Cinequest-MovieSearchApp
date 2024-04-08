import { twMerge } from "tailwind-merge"
import PropTypes from 'prop-types'

export const FormInput = ({label,className,...props}) => {
  return (
    <div className="flex flex-col gap-1 w-full p-2 bg-transparent">
        <label className="text-md lg:text-xl text-white font-bold leading-3">{label}</label>
        <input  className={twMerge(`w-full py-4 placeholder:text-xs text-white font-semibold text-sm md:text-md lg:text-lg border-b-2 border-bg_primary outline-none bg-transparent focus:border-btn_primary`,className)} {...props}/>
    </div>
  )
}
FormInput.propTypes={
    label:PropTypes.string,
    className:PropTypes.string,
    props:PropTypes.object
}
