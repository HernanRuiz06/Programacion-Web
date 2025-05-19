document.addEventListener('DOMContentLoaded', function() {
    const inputNuevaTarea = document.getElementById('nuevaTarea');
    const botonAgregarTarea = document.getElementById('agregarTarea');
    const listaDeTareas = document.getElementById('listaDeTareas');

    botonAgregarTarea.addEventListener('click', agregarNuevaTarea);

    function agregarNuevaTarea() {
        const textoTarea = inputNuevaTarea.value.trim();

        if (textoTarea !== "") {
            const nuevaTareaLi = document.createElement('li');
            nuevaTareaLi.innerHTML = `
                <span class="tarea-texto">${textoTarea}</span>
                <button class="eliminar-tarea">Ok</button>
            `;
            listaDeTareas.appendChild(nuevaTareaLi);
            inputNuevaTarea.value = ""; // Limpiar el input

            // Agregar funcionalidad para eliminar la tarea
            const botonEliminar = nuevaTareaLi.querySelector('.eliminar-tarea');
            botonEliminar.addEventListener('click', eliminarTarea);
        }
    }

    function eliminarTarea(event) {
        const tareaAEliminar = event.target.parentNode;
        listaDeTareas.removeChild(tareaAEliminar);
    }
});