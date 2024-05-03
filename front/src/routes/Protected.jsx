/* eslint-disable react/prop-types */
import {useContext} from 'react';
import { authContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Protected = ({children, allowed}) => {
    const {token ,role} = useContext(authContext);
    const isAllowed = allowed.includes(role);
    const accessibleRoute = 
    token && isAllowed ? children : <Navigate to='/login' replace={true}/>;

  return accessibleRoute;
};

export default Protected;