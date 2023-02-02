
export const ImgLogos = require.context('../assets/img/logos');

const Mantenimiento = () => {
  return (
        <div>
            <div className="logo logoMantenimiento card-img-overlay">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        <img src={ ImgLogos(`./logo-ivan-blanco.png`)} alt='Logo Ivan Caceres en blanco' className='img-fluid' width='850'/>
                    </div>

                    <div className="row text-center pt-5">
                        <h1>SITIO WEB EN DESARROLLO</h1>
                    </div>
                    <div className="row text-center pt-3">
                        <div id="iconosRedesMantenimiento">
                            <a href="https://www.facebook.com/ivancaceres.foto" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/ivancaceres.foto" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                            <a href="https://www.behance.net/ivancaceresfoto" target="_blank" rel="noreferrer"><i className="bi bi-behance"></i></a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mantenimiento
