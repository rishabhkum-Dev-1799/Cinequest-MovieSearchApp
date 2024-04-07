import PropTypes from 'prop-types'

import SearchErrorImage from "src/assets/Images/search_error.png"

const SearchImageError = ({errorMessage}) => {
  return (
    <div className="w-full p-4 md:w-[50%] lg:w-[60%] flex flex-col gap-2 text-center items-center justify-center">
        <p className='mt-3 h-[50px] w-full text-center text-lg font-bold text-red-900'>{errorMessage||"Something Went Wrong Please Search Again"}</p>
        <div className='w-full overflow-hidden max-w-[400px] min-w-[100px]'>
            <img src={SearchErrorImage} alt="search_error.jpg" className="w-full object-contain"/>
        </div>
    </div>
  )
}

SearchImageError.propTypes={
    errorMessage:PropTypes.string
}
export default SearchImageError