import { useState } from "react";
import './App.css'

export default function App (){

    const [numero, setNumero] = useState(0)


    function aumentar(){
       setNumero(numero + 1)
    }

    function diminuir(){
        setNumero(numero - 1)
    }

    function reset(){
      setNumero(0)
    }

    return <section>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button id="button-subtrai" className="button" onClick={diminuir}>Menos</button>
        <button id="button-reset" className="button" onClick={reset}>Reset</button>
        <button id="button-soma" className="button" onClick={aumentar}>Mais</button>
    </section>
};