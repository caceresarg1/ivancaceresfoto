import { HashRouter, Route, Routes } from "react-router-dom";
import Mantenimiento from "../pages/Mantenimiento"
import Presupuestos from "../pages/Presupuestos";
import Contacto from "./Contacto";

const rutas = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element=<Mantenimiento/> />
          <Route exact path="/contacto" element=<Contacto/> />
          <Route exact path="/presupuestos/:tipoPresupuesto" element=<Presupuestos/> />
          
        </Routes>
      </HashRouter>
    </>
  );
}

export default rutas