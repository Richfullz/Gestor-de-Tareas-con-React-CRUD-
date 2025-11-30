# 📋 Gestor de Tareas con React (CRUD)

Una aplicación web minimalista y funcional para gestionar tareas diarias. Desarrollada con **React**, **localStorage** y **Clean Code**, esta app permite **crear, editar, eliminar y persistir tareas** en el navegador.

---

## 🎯 Objetivo del Proyecto

Este proyecto fue creado como parte de mi portafolio personal para **demostrar mis habilidades en React**, manejo de estado, componentes reutilizables y buenas prácticas de desarrollo frontend.

---

## 📸 Capturas de pantalla

<p align="center">
  <img width="700" alt="Captura 1" src="https://github.com/user-attachments/assets/834cc4d6-6687-48e6-a714-c464ddf2062c" />
  <br>
  <em>En esta captura muestro una tarea ya creada; ahora voy a eliminarla.</em>
  <br><br>

  <img width="700" alt="Captura 2" src="https://github.com/user-attachments/assets/74fae952-7437-412f-8497-4e695af127da" />
  <br>
  <em>Si le damos al lapicero podemos editar la tarea como deseemos.</em>
  <br><br>

  <img width="692" height="456" alt="Captura de pantalla 2025-11-30 133259" src="https://github.com/user-attachments/assets/06978285-f0b1-479d-a46b-0009956c9035" />
  <br>
  <em>Al pulsar la “x” nos salta una alerta creada con SweetAlert2.</em>
  <br><br>

  <img width="700" alt="Captura 4" src="https://github.com/user-attachments/assets/38cb4e94-3739-44b9-86d3-f2219a7553df" />
  <br>
  <em>Si aceptamos, otro mensaje confirma que la tarea fue eliminada.</em>
  <br><br>

  <img width="700" alt="Captura 5" src="https://github.com/user-attachments/assets/612a0836-f0e9-4403-838b-1a5acddd5aa8" />
  <br>
  <em>La tarea desaparece; ahora crearé una nueva y la editaré.</em>
  <br><br>

  <img width="700" alt="Captura 6" src="https://github.com/user-attachments/assets/964e888b-9840-4f01-a699-6c7a89cc14dc" />
  <br>
  <em>Agregamos la nueva tarea.</em>
  <br><br>

  <img width="700" alt="Captura 7" src="https://github.com/user-attachments/assets/d51d96e7-cffa-4a52-af05-66e2315965f7" />
  <br>
  <em>La edito y pulso “Guardar”.</em>
  <br><br>

  <img width="700" alt="Captura 8" src="https://github.com/user-attachments/assets/d5fc8793-969e-46b5-91f7-0ac8a8005816" />
  <br>
  <em>Mensaje de éxito: tarea actualizada.</em>
  <br><br>

  <img width="700" alt="Captura 9" src="https://github.com/user-attachments/assets/6d9f7b81-37cf-43bd-9bf7-beb9478f3849" />
  <br>
  <em>Cierro el formulario y se ve el listado final con el boton de cerrar.</em>
</p>

---

## ⚙️ Funcionalidades

| Función                        | Estado |
|-------------------------------|--------|
| ✅ Agregar tarea               | ✔️     |
| ✏️ Editar tarea                | ✔️     |
| 🗑️ Eliminar tarea              | ✔️     |
| 💾 Persistencia en localStorage | ✔️     |
| 🔔 Notificaciones con SweetAlert2 | ✔️  |
| 📱 Diseño responsive básico    | ✔️     |

---

## 🧱 Tecnologías usadas

- **React** (Hooks: useState, useEffect)
- **JavaScript ES6+**
- **localStorage** (persistencia de datos)
- **SweetAlert2** (UX mejorada)
- **React Icons** (iconografía)
- **CSS puro** (sin frameworks)

---

## 🧪 Cómo ejecutar el proyecto

# Clonar el repositorio
git clone https://github.com/richfullzz/gestor-tareas-react.git

# Entrar al directorio
cd gestor-tareas-react

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start

## 📁 Estructura del proyecto
Copy
src/
├── components/
│   ├── AddTask.js
│   ├── Button.js
│   ├── Header.js
│   ├── Task.js
│   └── Tasks.js
├── App.js
├── App.css
└── index.js

## 💡 Decisiones de desarrollo
Componentes reutilizables: Button, Task, etc.
Estado centralizado en App.js
Validaciones con SweetAlert2 para mejor UX
IDs únicos con uuid
Sin dependencias pesadas: solo lo necesario

---
## 🧪 Cómo lo fui creando paso a paso

### 1. Planificación y estructura
- Dibujé un **wireframe de bolsillo** (papel y boli) con:
- Header con botón “Agregar”
- Formulario colapsable
- Lista de tareas con iconos de editar/eliminar
- Decidí **no usar librerías de UI** para mostrar CSS puro.

### 2. Creación del proyecto
- npx create-react-app task-manager-app
- cd task-manager-app
- npm install uuid sweetalert2 react-icons

### 3. Componentes 
- Button.js → botón reutilizable con color y texto por props.
- Header.js → título + botón que alterna formulario.
- AddTask.js → formulario con dos inputs y validación básica.
- Task.js → muestra texto, fecha y acciones (editar/eliminar).
- Tasks.js → map de tareas.

### 4. Estado central en App.js
- tasks → array de objetos { id, text, day }
- showAddTask → boolean para mostrar/ocultar formulario
- useEffect → carga y guarda en localStorage automáticamente.

### 5. CRUD completo
- Create → addTask() con uuid y SweetAlert de éxito.
- Read → lista dinámica con map.
- Update → doble click o icono lápiz; edición in-line.
- Delete → confirmación SweetAlert + filtrado por id.

### 6. UX detalles
- Placeholder con ejemplo de fecha legible (30 nov 2025 10:00 AM).
- Botón “Agregar” cambia a “Cerrar” y color verde → rojo.
- Mensajes de éxito/error sin alert() nativo.

### 7. Limpieza y refactor
- Eliminé comentarios y console.log.
- Props desestructuradas: { text, day } en vez de props.text.
- Nombres de componentes en PascalCase y archivos igual.

---

## 🧑‍💻 Autor
Richfullzz – Frontend Developer Jr.
📬 Contacto: alejandropascualsanchez@gmail.com
🌐 LinkedIn: linkedin.com/in/alejandrop-38a413368
