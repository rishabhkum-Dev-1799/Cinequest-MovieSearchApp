/**
 * 
 * @param {string} image 
 * @param {string} resolution 
 * @returns It returns the high Resolution Image url
 */
export const generateHighResolutionImage=(image,resolution)=>{
    if(image){
        return image.replace("SX300",`SX${resolution}`)
    }
    return image
}

/**
 * @package{string} imageurl
 * @returns {boolean} Itr returns true if image exist otherwise false
 */
export const checkIsImageExist=(imageurl)=>{
    return imageurl !== "N/A"
}

/**
 * @package{string} string
 * @returns {boolean} Itr returns true if image exist otherwise false
 */
export const isStringApplicable=(string)=>{
    return string !== "N/A"
}

/**
 * 
 * @param {string} baseString 
 * @param {string} subString 
 * @returns {boolean} It returns true if baseString starts with subString otherwise false
 */
export const checkStringStartsWith=(baseString,subString)=>{
    return baseString.startsWith(subString)?true:false
}