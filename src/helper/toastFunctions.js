import{toast} from 'react-toastify';

/**
 * @param {string} errorMessage 
 * @return It returns the error Message in the toast
 */
export const getToastErrorMessage=(errorMessage)=>{
    toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
}

/**
 * 
 * @param {string} successMessage 
 * @returns It returns the success message in the toast
 */
export const getToastSuccessMessage=(successMessage)=>{
    toast.success(successMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
}