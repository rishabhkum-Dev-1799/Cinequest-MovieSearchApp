/**
 * @returns This function scrolls the window to the top of the page
 */
export const scrollToTop=(domObject)=>{
    domObject.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

/**
 * 
 * @returns This function checks if the window has scrolled more than 1000px
 */
export const shouldShowScrollToTop=(domObject)=>{
    if(domObject.scrollTop>1000) return true;
    return false
}