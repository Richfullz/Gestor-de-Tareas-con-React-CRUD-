import React, { useState } from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Task = ({ task, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.text);
    const [day, setDay] = useState(task.day);

    const handleSave = () => {
        onEdit(task.id, text, day);
        setIsEditing(false);
    };

    return (
        <div className="task">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <input
                        type="text"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={() => setIsEditing(false)}>Cancelar</button>
                </div>
            ) : (
                <div>
                    <p><strong>Tarea:</strong> {task.text}</p>
                    <p><strong>Fecha:</strong> {task.day}</p>
                </div>
            )}

            <div>
                <FaPencilAlt
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                    onClick={() => setIsEditing(true)}
                />
                <FaTimes
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={() => onDelete(task.id)}
                />
            </div>
        </div>
    );
};

export default Task;