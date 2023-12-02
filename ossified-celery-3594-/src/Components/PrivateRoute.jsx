
import { useNavigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  return token ? (
    {children}
  ) : (
    navigate('/login')
  );
};

export default PrivateRouter;
