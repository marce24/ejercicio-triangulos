import react, {Fragment, useState} from "react";

const Formulario = () => {

    const [sideA,setA] = useState()
    const [sideB,setB] = useState()
    const [sideC,setC] = useState()

    /*const HandleInputChange = (event) => {
        alert(event.target.value)
        setA({
            ...sideA
        })

    }*/

    const enviarDatos = (event) => {
        event.preventDefault();
        if (sideA==sideB==sideC){
            alert("Es un Equilátero");
        
        }else if ((sideA==sideB && sideA!=sideC) | (sideA==sideC && sideA!=sideB) | (sideB==sideC && sideB!=sideA)){
            alert("Es un Isósceles");
        } else{
            alert("Es un Escaleno");
        }

    }

    return ( 
        <Fragment>
            <h1>Triángulos ▲</h1>
            
            <form className="row" onSubmit={enviarDatos}>

                <div className="col-md-3">
                <input
                type="number" 
                className="form-control"
                placeholder="Lado 1"
                name="sideA"
                onChange={(event)=>setA(event.target.value)}
                value={sideA}
                ></input>
                </div>

                <div className="col-md-3">
                <input
                type="number" 
                className="form-control"
                placeholder="Lado 2"
                name="sideB"
                onChange={(event)=>setB(event.target.value)}
                value={sideB}
                ></input>
                </div>

                <div className="col-md-3">
                <input
                type="number" 
                className="form-control"
                placeholder="Lado 3"
                name="sideC"
                onChange={(event)=>setC(event.target.value)}
                value={sideC}
                ></input>
                </div>

                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            
            </form>
        </Fragment>

    );
}

export default Formulario;