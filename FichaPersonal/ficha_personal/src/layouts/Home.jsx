import { useNavigate } from "react-router-dom";
import BotonFormulario from "../components/BotonFormulario"


const Home = () =>{
    const navigate = useNavigate()

    return(
        <BotonFormulario onClick={()=> navigate('/tarjeta')}/>
    )
}

export default Home