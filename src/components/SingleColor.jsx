import { useState } from "react";
import Clip from "/clipTransparent.png";

const SingleColor = ({hexColor}) => {
    /* 
    Se declara una variable de estado copy que inicialmente es false. Esta variable se utiliza para controlar si el color ha sido copiado al portapapeles.
    */
    const [copy, setCopy] = useState(false);
    /*
    handleCopy es una función que toma un color como argumento y devuelve otra función (una función de orden superior). Esta estructura permite que el componente sepa qué color copiar cuando se llama a esta función.
    */
    const handleCopy = (color) => () => {
        /* 
            Se crea una nueva variable colorNew que precede el valor color con un #, formando así un código de color hexadecimal completo.

            Luego, se utiliza la API navigator.clipboard.writeText para copiar colorNew al portapapeles del usuario.
        */
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);

        /*
        Se establece copy en true, indicando que el color ha sido copiado.

        Después de 2 segundos (2000 milisegundos), se restablece copy a false usando setTimeout, lo que permite que la interfaz de usuario pueda reflejar que el color ya no está en el portapapeles.
        */
        setCopy(true);
        setTimeout(()=> {
            setCopy(false);
        }, 2000);
    }

return (
        <div className="single-card" style={{backgroundColor: `#${hexColor}`}}>
            <div className="content">
                <p>#{hexColor}</p>
                <button onClick={handleCopy(hexColor)}>
                    <img src={Clip} alt="copy" />
                </button>
            </div>
            {copy ?  <p className="copy-alert">Copied to clipboard</p> : null }
        </div>
    );
}

export default SingleColor;