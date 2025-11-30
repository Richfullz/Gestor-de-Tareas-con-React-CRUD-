import React from 'react';
import Button from './Button';

const Header = ({ showForm, changeTextAndColor }) => {
    return (
        <header className="header">
            <h2>Administrador de Tareas</h2>
            <Button
                color={changeTextAndColor ? 'red' : 'green'}
                text={changeTextAndColor ? 'Cerrar' : 'Agregar'}
                onClick={showForm}
            />
        </header>
    );
};

export default Header;