import { lazy} from 'react'
import {Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Components 
import NavigationWrapper from './components/Navigation/NavigationWrapper';
const CineSearchPage = lazy(()=>import("src/pages/CineSearchPage"))

function App() {
  return (
    <main>
      {/* Adding Toast Container */}
      <ToastContainer/>
      <NavigationWrapper>
      <Routes>
        <Route path='/*' element={<CineSearchPage/>}/>
      </Routes>
      </NavigationWrapper>
    </main>
  )
}

export default App
