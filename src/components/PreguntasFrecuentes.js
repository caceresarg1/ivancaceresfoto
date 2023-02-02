import React from 'react'

const PreguntasFrecuentes = () => {
    return (
        <div className="presupuesto-tarjeta mt-2">
            <div className="presupuesto-contenedor">
                <div class="accordion accordion-flush faq" id="faq-contenedor">
                    <div class="accordion-item faq-item">
                        <h2 class="accordion-header faq-encabezado" id="encabezado-uno">
                        <button class="accordion-button collapsed faq-encabezado-boton" type="button" data-bs-toggle="collapse" data-bs-target="#acordeon-uno" aria-expanded="false" aria-controls="acordeon-uno">
                            ¿ Cu&aacute;nto tiempo antes es necesaria realizar la reservaci&oacute;n de la fecha ?
                        </button>
                        </h2>
                        <div id="acordeon-uno" class="accordion-collapse collapse" aria-labelledby="encabezado-uno" data-bs-parent="#faq-contenedor">
                            <div class="accordion-body faq-body">
                                La fecha de la sesi&oacute;n se solicita con un m&iacute;nimo 48 hs. de anticipaci&oacute;n, dicha fecha se reserva  con el 50% del presupuesto final a modo de seña, el restante se abona al momento de la entrega de las fotos.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item faq-item">
                        <h2 class="accordion-header faq-encabezado" id="encabezado-dos">
                        <button class="accordion-button faq-encabezado-boton collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#acordeon-dos" aria-expanded="false" aria-controls="acordeon-dos">
                            ¿ Cu&aacute;nto tiempo dura la sesi&oacute;n de fotos ?
                        </button>
                        </h2>
                        <div id="acordeon-dos" class="accordion-collapse collapse" aria-labelledby="encabezado-dos" data-bs-parent="#faq-contenedor">
                            <div class="accordion-body faq-body">
                                Las sesiones de fotos no posee l&iacute;mite de tiempo, en caso de no concluir con la sesi&oacute;n se puede realizar en un segundo d&iacute;a.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item faq-item">
                        <h2 class="accordion-header faq-encabezado" id="encabezado-tres">
                        <button class="accordion-button faq-encabezado-boton collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#acordeon-tres" aria-expanded="false" aria-controls="acordeon-tres">
                            Una vez finalizada la sesi&oacute;n, ¿ Cu&aacute;les son los pasos a seguir ?
                        </button>
                        </h2>
                        <div id="acordeon-tres" class="accordion-collapse collapse" aria-labelledby="encabezado-tres" data-bs-parent="#faq-contenedor">
                            <div class="accordion-body faq-body">
                                Una vez finalizada la sesi&oacute;n, en aproximandamente 48 hs. se le enviar&aacute; un link de <strong>Google Drive</strong> con una preselecci&oacute;n de las fotos que se encuentran sin revelar ni retocar, en baja calidad y con marca de agua para que el cliente pueda elegir las fotos que van a ser reveladas y retocadas para su posterior entrega en su m&aacute;xima calidad.
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default PreguntasFrecuentes

