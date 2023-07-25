import React from 'react';
import api from '../api';
import './Login.css';



export default ({onReceive}) => {
    const handleFacebookLogin = async () => {
        let result = await api.fbPopup();
        if(result) {
            onReceive(result.user);
        } else {
            alert('erro!');
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com facebook</button>
        </div>
    )
}