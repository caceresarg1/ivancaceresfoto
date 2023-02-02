import React from 'react'
const PresupuestoProfesional = () => {
    return (
        <div className="presupuesto-tarjeta">
            <div className="presupuesto-titulo-contendor">
                <span className="presupuesto-titulo">PRESUPUESTO PROFESIONAL</span><br/>
            </div>
            <div className="presupuesto-contenedor">
                <div className="presupuesto-numero justify-content-center">
                    <div className="row">
                        <div className="col text-center p-1">
                            $900<span className="presupuesto-numero-chico">P/foto</span><br/>
                            <span className="presupuesto-resumen">(Un m&iacute;nimo de 10 fotos por sesi&oacute;n)</span>
                        </div>
                        <div className="col text-center p-1">
                            5%<span className="presupuesto-numero-chico">Dto.</span><br/>
                            <span className="presupuesto-resumen">(A partir de las 20 fotos)</span>
                        </div>
                        <div className="col text-center p-1">
                            15%<span className="presupuesto-numero-chico">Dto.</span><br/>
                            <span className="presupuesto-resumen">(A partir de las 40 fotos)</span>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="presupuesto-maquillaje">
                    Maquillaje Profesional para producciones fotogr&aacute;ficas
                </div>
                <span className="presupuesto-detalles fw-lighter">Solicite presupuesto por el servicio, detallando el tipo y la cantidad de personas</span><br/>
            </div>
        </div>
    )
}

export default PresupuestoProfesional