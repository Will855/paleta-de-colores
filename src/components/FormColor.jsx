import { useState } from "react";
import Values from "values.js";

/*
FormColor es un componente que recibe una propiedad llamada setList, que se espera que sea una función para actualizar una lista de colores.
*/
const FormColor = ({ setList }) => {
    /*
    Se declara una variable de estado, que inicialmente se establece en "blue". Esta variable almacenará el color ingresado por el usuario.

    También se declara una variable de estado error, que inicialmente es false. Esta variable se utiliza para manejar errores en la generación de colores.
    */
    const [color, setColor] = useState("blue");
    const [error, setError] = useState(false);

    const handleGenerator = e => {
        /*
        handleGenerator es una función que se ejecuta cuando se envía el formulario. Se utiliza e.preventDefault() para evitar que la página se recargue al enviar el formulario.
        */
        e.preventDefault();
        //console.log(e);

        /*
        Dentro de un bloque try, se intenta crear una nueva instancia de Values (presumiblemente de una biblioteca de manejo de colores) con el color ingresado. Luego, se llama al método all(10) para generar una lista de 10 colores derivados del color base.

        Si la generación es exitosa, se actualiza la lista de colores llamando a setList(colors) y se establece error en false.
        
        Si ocurre un error (por ejemplo, si el color ingresado no es válido), se captura el error, se imprime en la consola y se establece error en true.
        */
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        } catch (error) {
            console.log(error)
            setError(true);
        }
        //console.log(color);
    }

    return(
        <div className="form-color">
        <h1 style={{ color: color }}>Color Palete Generator</h1>
        <form onSubmit={handleGenerator}>
            <input 
                type="text" 
                placeholder="#000" 
                onChange={e => setColor(e.target.value)} 
                style={{ borderColor: color }} // Cambia el borde del input al color ingresado
            />
            <input 
                type="submit" 
                value="Generar" 
                style={{ backgroundColor: color, color: '#fff' }} // Cambia el fondo del botón al color ingresado
            />
        </form>
        {error ? <p className="error">No existe</p> : null}
    </div>
    )
}

export default FormColor;