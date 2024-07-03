import { Icon } from "@iconify/react/dist/iconify.js"


export const Footer = () => {
    return (
        <>
        <div style={{ backgroundImage: "url('/img/Prueba.png')" }} className="bg-cover bg-no-repeat max-w-full items-center bottom-0 left-0 pt-[20px] md:hidden">
            <div className="flex flex-col justify-center items-center text-white text-center p-2 gap-3">
                <h2 className="text-xl font-semibold">DROCH.ART</h2>
                <p className="text-sm font-light">
                                Todos los derechos de propiedad intelectual de las obras de arte de nuestra galería pertenecen a sus respectivos creadores.
                                La plataforma actúa únicamente como intermediario entre usuarios.
                                <br />
                                Para más información puedes consultarnos:
                </p>
                <p className="flex items-center font-semibold gap-4 text-white">
                    <Icon className="text-2xl" icon="material-symbols:mail" style={{ color: '#F05858' }} /> drochart.info@gmail.com
                </p>
                
                <h4 className="font-light pt-4">NAVEGACIÓN</h4>
                <div className="flex flex-wrap gap-8 font-semibold justify-center">
                    <a href="#">Inicio</a>
                    <a href="#">Galería</a>
                    <a href="#">Nueva</a>
                    <a href="#">Usuarios</a>
                </div>

                <h4 className="font-light pt-4">LEGAL</h4>
                    <div className="flex flex-col gap-8 text-white justify-center font-semibold pb-10">
                            <a href="#">Política de privacidad</a>
                            <a href="#">Condiciones de uso</a>
                            <a href="#">Normativas legales</a>
                    </div>

                    <div className="flex justify-center pb-4">
                    <div style={{ borderImage: 'linear-gradient(90deg, rgba(204,65,65,0) 0%, rgba(223,105,105,1) 48%)', borderImageSlice: '1' }} className="flex flex-col gap-4 items-center justify-between border-t-2 pt-5" >
                        <p className="text-xs text-[rgb(230,230,230,0.5)] font-light">2024 © DROCH.ART  -  Diseño web por Diego García Rocha   -   Version 1.0 [BETA]</p>
                        <div className="flex gap-4">
                            <Icon className="text-2xl" icon="mdi:github" style={{ color: '#CC4141' }} />
                            <Icon className="text-2xl" icon="mdi:artstation" style={{ color: '#CC4141' }} />
                            <Icon className="text-2xl" icon="mdi:instagram" style={{ color: '#CC4141' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="hidden md:block bottom-0 left-0 w-full">
            <div style={{ backgroundImage: "url('/img/Prueba.png')" }} className="bg-cover bg-no-repeat max-w-full h-[520px] items-center p-3">
                <div className="flex flex-row justify-center text-white pt-[80px]">
                    <div style={{ borderImage: 'linear-gradient(90deg, rgba(223,105,105,1) 50%, rgba(204,65,65,0) 100%)', borderImageSlice: '1' }} className="border-b-2 flex justify-between items-center w-[900px]">
                        <h2 className="text-xl font-semibold">DROCH.ART</h2>
                        <h4 className="font-light">NAVEGACIÓN</h4>
                        <h4 className="font-light">LEGAL</h4>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex justify-between w-[900px] pb-[60px]">
                        <div className="flex flex-col w-[325px] gap-6 pt-[50px]">
                            <p className="text-white text-sm font-light">
                                Todos los derechos de propiedad intelectual de las obras de arte de nuestra galería pertenecen a sus respectivos creadores.
                                La plataforma actúa únicamente como intermediario entre usuarios.
                                <br />
                                Para más información puedes consultarnos:
                            </p>
                            <p className="flex items-center font-semibold gap-4 text-white">
                                <Icon className="text-2xl" icon="material-symbols:mail" style={{ color: '#F05858' }} /> drochart.info@gmail.com
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 text-white pt-[50px] w-[180px]">
                            <a href="#">Inicio</a>
                            <a href="#">Galería</a>
                            <a href="#">Nueva</a>
                            <a href="#">Usuarios</a>
                        </div>

                        <div className="flex flex-col gap-6 text-white pt-[50px] text-end">
                            <a href="#">Política de privacidad</a>
                            <a href="#">Condiciones de uso</a>
                            <a href="#">Normativas legales</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div style={{ borderImage: 'linear-gradient(90deg, rgba(204,65,65,0) 0%, rgba(223,105,105,1) 48%)', borderImageSlice: '1' }} className="flex w-[900px] items-center justify-between border-t-2 pt-[30px]" >
                        <p className="text-xs text-[rgb(230,230,230,0.5)] font-light">2024 © DROCH.ART  -  Diseño y desarrollo web por Diego García Rocha   -   Version 1.0 [BETA]</p>
                        <div className="flex gap-4">
                            <Icon className="text-xl" icon="mdi:github" style={{ color: '#CC4141' }} />
                            <Icon className="text-xl" icon="mdi:artstation" style={{ color: '#CC4141' }} />
                            <Icon className="text-xl" icon="mdi:instagram" style={{ color: '#CC4141' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}