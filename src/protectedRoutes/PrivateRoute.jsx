import React from 'react'
import { Outlet } from 'react-router-dom';
import { useCartContext } from '../context/cardContext'
import { Navigate } from 'react-router-dom';
const PrivateRoute = () => {
    const { state } = useCartContext();
    return (
        <div>

            {
                state.isCheckout ? <Outlet /> : <Navigate to={"/"} />
            }

        </div>
    )
}

export default PrivateRoute