// import React from 'react'

const PrivateRoute = () => {
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute


// import React from 'react';
// import { Navigate, Route } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const isAuth = true;

//   return (
//     <Route
//       render={({ location }) =>
//         isAuth ? (
//           children
//         ) : (
//           <Navigate to="/login" state={{ from: location }} />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
