import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  // Cargar tareas desde localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(saved);
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Agregar tarea
  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    Swal.fire('Guardado', 'Tarea agregada correctamente', 'success');
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks(tasks.filter((task) => task.id !== id));
        Swal.fire('Eliminada', 'Tu tarea ha sido eliminada', 'success');
      }
    });
  };

  // Editar tarea
  const editTask = (id, updatedText, updatedDay) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText, day: updatedDay } : task
      )
    );
    Swal.fire('Actualizada', 'Tarea actualizada correctamente', 'success');
  };

  return (
    <div className="container">
      <Header
        showForm={() => setShowAddTask(!showAddTask)}
        changeTextAndColor={showAddTask}
      />
      {showAddTask && <AddTask onSave={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      ) : (
        <p>No hay tareas aún</p>
      )}
    </div>
  );
}

export default App;