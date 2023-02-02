import { useParams } from "react-router-dom"
import { Buffer } from "buffer";
import PresupuestoPersonal from "./PresupuestoPersonal";
import PresupuestoDetalles from "../components/PresupuestoDetalles";
import PresupuestoProfesional from "./PresupuestoProfesional";
import PresupuestoComercial from "./PresupuestoComercial";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";
export const ImgLogos = require.context('../assets/img/logos');

const Presupuestos = () => {
    let {tipoPresupuesto} = useParams();

    const presupuestosDisponibles = [
        {
            id: Buffer.from("PresupuestoPersonal").toString('base64'),
            componente: <PresupuestoPersonal/>
        },
        {
            id: Buffer.from("PresupuestoProfesional").toString('base64'),
            componente: <PresupuestoProfesional/>
        },
        {
            id: Buffer.from("PresupuestoComercial").toString('base64'),
            componente: <PresupuestoComercial/>
        }
    ]

    const presupuesto = presupuestosDisponibles.find(presupuesto => presupuesto.id === tipoPresupuesto)

    return(
        <div className="container">
            <div className="row imagen justify-content-center pt-4">
                <div className="col-6 d-flex justify-content-center">
                    <img src={ImgLogos(`./logo-ivan-blanco.png`)} alt="Logo Ivan Caceres Fotografia" className="img-fluid" width="650" />
                </div>
            </div>
            <div className="row justify-content-center pt-4">
                <div className="col-md-6 col-md-6">
                    {presupuesto.componente}
                    <PresupuestoDetalles/>
                    <PreguntasFrecuentes/>
                </div>
            </div>
        </div>
    )
}

export default Presupuestos
