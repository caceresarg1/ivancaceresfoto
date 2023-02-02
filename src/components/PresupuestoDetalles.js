import React from 'react'

const PresupuestoDetalles = () => {
    return (
        <div className="presupuesto-tarjeta mt-2">
            <div className="presupuesto-contenedor">
                <span className="presupuesto-maquillaje">El servicio incluye</span>
                <div className="presupuesto-detalles p-1">
                    <div className="presupuesto-detalles-items">
                        <i className="bi bi-check2-circle presupuesto-detalles-icono"></i>Servicio fotogr&aacute;fico<br/>
                    </div>
                    <div className="presupuesto-detalles-items">
                        <i className="bi bi-check2-circle presupuesto-detalles-icono"></i>Estudio de fotograf&iacute;a<br/>
                    </div>
                    <div className="presupuesto-detalles-items">
                        <i className="bi bi-check2-circle presupuesto-detalles-icono"></i>Equipo de c&aacute;mara e iluminaci&oacute;n<br/>
                    </div>
                    <div className="presupuesto-detalles-items">
                        <i className="bi bi-check2-circle presupuesto-detalles-icono"></i>Revelado y retoque de las fotograf&iacute;as<br/>
                    </div>
                    <div className="presupuesto-detalles-items">
                        <i className="bi bi-check2-circle presupuesto-detalles-icono"></i>Espacio en Google Drive para visualizar, descargar y alojar sus fotos<br/>
                    </div>
                    <div className="presupuesto-detalles-items">
                        <i className="bi bi-info-circle presupuesto-detalles-icono"></i>En caso de que la sesi&oacute;n sea fuera del estudio, solicitar presupuesto del vi&aacute;tico<br/>
                    </div>
                </div>
                
                <hr/>
                <span className="presupuesto-maquillaje">Detalles a tener en cuenta</span>
                <div className="presupuesto-detalles p-1">
                    <div className="presupuesto-detalles-items">
                        <i className="bi bi-x-circle presupuesto-detalles-icono"></i>El estudio <strong>NO</strong> admite el trabajo con otros profesionales del maquillaje por contar con dicho servicio.
                    </div>
                    <div className="presupuesto-detalles-items">
                        <i className="bi bi-x-circle presupuesto-detalles-icono"></i>El estudio <strong>NO</strong> realiza canjes, promociones o intercambios con marcas, comercios o servicios sin antes haber realizado una propuesta formal.
                    </div>
                    <div className="presupuesto-detalles-items">
                        <i className="bi bi-x-circle presupuesto-detalles-icono"></i>El estudio <strong>NO</strong> provee vestuario o accesorios en las producciones.
                    </div><br/>
                    <div className="presupuesto-detalles-items">
                        Avisar con anticipaci&oacute;n la cantidad de personas que asistir&aacute;n al estudio.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresupuestoDetalles
