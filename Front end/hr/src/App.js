import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AddEmployee from './Pages/AddEmployees';
import CheckEmail from './Pages/Auth_pages/CheckEmail';
import FireEmployee from './Pages/FireEmployee';
import HomePage from './Pages/HomePage';
import Layout from './Layout';
import Login from './Pages/Auth_pages/Login';
import ResetPassword from './Pages/Auth_pages/ResetPassword';
import ResetPasswordConfirm from './Pages/Auth_pages/ResetPasswordConfirm';
import Signup from './Pages/Auth_pages/Signup';
import ViewEmployees from './Pages/ViewEmployee';
import activateAcount from './Pages/Auth_pages/activate';
import ListEmployees from './Pages/ListEmployees';
import EmployeeDetail from './Pages/EmployeeDetail';
import AddRole from './Pages/AddRole';
function App() {
  const location = useLocation();
  const isResetPasswordConfirmPage = location.pathname.startsWith('/password/reset/confirm/');
  return (
    <Provider store={store}>
      <div>
        {location.pathname === '/' || location.pathname === '/ResetPassword' || isResetPasswordConfirmPage ? (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
              <Route
                path="/password/reset/confirm/:uid/:token"
                element={<ResetPasswordConfirm />}
                
              />
          </Routes>
        ) : (
          <Layout>
            <Routes>
              <Route path="/signUp" element={<Signup />} />
              
              <Route path="/activate/:uid/:token" element={<activateAcount />} />
              <Route path="/ViewEmployees" element={<ViewEmployees />} />
              <Route path="/CheckEmail" element={<CheckEmail />} />
              <Route path="/Fire/:id" element={<FireEmployee />} />
              <Route path="/AddEmployee" element={<AddEmployee/>} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/ListEmployees" element={<ListEmployees />} />
              <Route path="/EmployeeDetail" element={<EmployeeDetail />} />
              <Route path="/AddRole" element={<AddRole />} />
              
            </Routes>
          </Layout>
        )}
      </div>
    </Provider>
  );
}

export default App;