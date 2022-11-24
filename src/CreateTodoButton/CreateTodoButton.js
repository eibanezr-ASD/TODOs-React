import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton() {

    const onClickButton = () => {
        alert('Aqui deberia ir el modal');
    };
    
    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };