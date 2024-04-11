import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

/**This is the component to wrapp the route to the authentication guard component */
const ProtectRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.authentication);

  if(!isLoggedIn) return <Navigate to="/login" />;

  return children;
};

export default ProtectRoute;
