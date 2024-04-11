import {Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Components 
import NavigationWrapper from './components/Navigation/NavigationWrapper';
import MovieDetailsPage from 'src/pages/MovieDetailsPage';
import CineSearchPage from 'src/pages/CineSearchPage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import WatchlistPage from "./pages/WatchlistPage";
import ProtectRoute from "./components/common/Wrapper/ProtectRoute";

function App() {
  return (
    <main className='min-h-[100vh]'>
      {/* Adding Toast Container */}
      <ToastContainer />
      <NavigationWrapper>
        <Routes>
          <Route
            path='/*'
            element={<CineSearchPage />}
          />
          <Route
            path='/:id'
            element={<MovieDetailsPage />}
          />
          <Route
            path='/login'
            element={<LoginPage />}
          />
          <Route
            path='/sign-up'
            element={<SignUpPage />}
          />
          <Route
            path='/my-watch-list'
            element={
              <ProtectRoute>
                <WatchlistPage />
              </ProtectRoute>
            }
          />
        </Routes>
      </NavigationWrapper>
    </main>
  );
}

export default App
