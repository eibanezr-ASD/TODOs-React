import React from "react";
import './TodoCounter.css'

function TodoCounter({completedTodos, totalTodos}) {
    return (
        <React.Fragment>
            <h2 className="TodoCounter">Lista de tareas</h2>
            <p className="TodoCounter-subtitle">Has completado {completedTodos} de {totalTodos} TODOs</p>
        </React.Fragment>
    );
}

export { TodoCounter };