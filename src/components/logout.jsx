import React from 'react';
import { useAuth } from './useAuth'; // Ajuste o caminho conforme necessário

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <button onClick={logout} type="button" class="btn btn-outline-dark">
            Logout
        </button>
    );
};

export default LogoutButton;