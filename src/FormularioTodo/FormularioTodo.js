import React from "react";
import './FormularioTodo.css';
import fondo from '../fondo.png';

function FormularioTodo() {
    return (
        <React.Fragment>
            <p className="form-title">Crear nueva tarea</p>
            <label className="form-label">
                Nombre de la tarea
            </label>
            <input type="text" className="form-input" placeholder="Nueva tarea" />
            <button className="form-btn">Crear tarea</button>
            <img className="form-background" src={fondo} alt="Fondo"/>
        </React.Fragment>
    );
}
export {FormularioTodo}