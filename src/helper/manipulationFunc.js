/**
 * 
 * @param {string} image 
 * @param {string} resolution 
 * @returns It returns the high Resolution Image url
 */
export const generateHighResolutionImage=(image,resolution)=>{
    return image.replace("SX300",`SX${resolution}`)
}

/**
 * @package{string} imageurl
 * @returns {boolean} Itr returns true if image exist otherwise false
 */
export const checkIsImageExist=(imageurl)=>{
    return imageurl !== "N/A"
}