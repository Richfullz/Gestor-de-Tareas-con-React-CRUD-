import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text.trim() || !day.trim()) {
            Swal.fire('Error', 'Por favor completa todos los campos', 'error');
            return;
        }
        onSave({ text, day });
        setText('');
        setDay('');
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Tarea</label>
                <input
                    type="text"
                    placeholder="Agregar tarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Fecha y hora</label>
                <input
                    type="text"
                    placeholder="Ej: 30 nov 2025 10:00 AM"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Guardar Tarea" />
        </form>
    );
};

export default AddTask;