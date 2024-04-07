import {Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Components 
import NavigationWrapper from './components/Navigation/NavigationWrapper';
import MovieDetailsPage from 'src/pages/MovieDetailsPage';
import CineSearchPage from 'src/pages/CineSearchPage';

function App() {
  return (
    <main className='min-h-[100vh] max-container'>
      {/* Adding Toast Container */}
      <ToastContainer/>
      <NavigationWrapper>
      <Routes>
        <Route path='/*' element={<CineSearchPage/>}/>
        <Route path="/:id" element={<MovieDetailsPage />} />
      </Routes>
      </NavigationWrapper>
    </main>
  )
}

export default App
