import { Icon } from "@iconify/react/dist/iconify.js";
import { RegisterBtn } from "../util/RegisterBtn";
import { GaleriaBtn } from "../util/GaleriaBtn";
import { useState } from "react";
import { CarrouselMovil } from "./CarrouselMovil";

export const SliderHome = () => {
    const [activeSlider, setActiveSlider] = useState(1); // Estado para controlar el slider activo

    const handleSliderChange = (sliderNumber) => {
        setActiveSlider(sliderNumber); // Cambiar el estado al número del slider seleccionado
    };

    return (
        <div>
            <div className="hidden lg:block">
                <div
                    className={`slider1 pt-4 bg-no-repeat bg-cover flex items-center justify-between h-[520px] ${activeSlider === 1 ? 'block' : 'hidden'}`}
                    style={{ backgroundImage: "url('/img/Fondo slider.png')" }}>
                    <div className="hidden md:block">
                        <h1 className="text-white transform -rotate-90 scale-x-[1] text-7xl font-bold font-robotoFlex opacity-70 w-[300px]">
                            REGISTRO
                        </h1>
                    </div>
                    <div className="flex flex-col w-full h-auto md:w-[650px]">
                        <div className="flex justify-center gap-4 p-2">
                            <button onClick={() => handleSliderChange(1)}>
                                <div className="flex flex-col gap-1 items-center bg-[#f0585899] border border-white border-opacity-10 rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="mdi:user-add-outline" />
                                    <p className="text-sm text-white font-robotoFlex">REGISTRATE</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(2)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:upload" />
                                    <p className="text-sm text-white font-robotoFlex">UPLOAD</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(3)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:search" />
                                    <p className="text-sm text-white font-robotoFlex">EXPLORA</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(4)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="iconamoon:comment" />
                                    <p className="text-sm text-white font-robotoFlex">COMENTA</p>
                                </div>
                            </button>
                        </div>
                        <div className="h-[350px]">
                            <p className="text-white p-4">
                            ¡Únete a nuestra comunidad de artistas! <span className="text-[#f05858c3] font-semibold">Regístrate </span>para acceder a todas las funciones de nuestra plataforma.
                            Con una cuenta, podrás subir tus propias creaciones y explorar obras de arte de talentos de todo el mundo.
                            Únete hoy y comienza a compartir tu pasión creativa con el mundo.
                            </p>
                            <div className="p-4">
                                <RegisterBtn />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img className="w-[250px]" src="/img/Deco pipas.png" alt="Pipas" />
                    </div>
                </div>
                <div
                    className={`slider2 pt-4 bg-no-repeat bg-cover flex items-center justify-between transition-all duration-500 h-[520px] ${activeSlider === 2 ? 'block' : 'hidden'}`}
                    style={{ backgroundImage: "url('/img/Slider2.png')" }}>
                    <div className="hidden md:block">
                        <h1 className="text-white transform -rotate-90 scale-x-[1] text-7xl font-bold font-robotoFlex opacity-70 w-[300px]">
                            UPLOAD
                        </h1>
                    </div>
                    <div className="flex flex-col w-full h-auto md:w-[650px]">
                        <div className="flex justify-center gap-4 p-2 items-center">
                            <button onClick={() => handleSliderChange(1)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="mdi:user-add-outline" />
                                    <p className="text-sm text-white font-robotoFlex">REGISTRATE</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(2)}>
                                <div className="flex flex-col gap-1 items-center bg-[#f0585899] border border-white border-opacity-10 rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:upload" />
                                    <p className="text-sm text-white font-robotoFlex">UPLOAD</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(3)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:search" />
                                    <p className="text-sm text-white font-robotoFlex">EXPLORA</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(4)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="iconamoon:comment" />
                                    <p className="text-sm text-white font-robotoFlex">COMENTA</p>
                                </div>
                            </button>
                        </div>
                        <div className="h-[350px]">
                            <p className="text-white p-4">
                                ¡Es tu momento de lucirte! Sube tus diseños y comparte tu creatividad con el mundo. Desde ilustraciones vibrantes hasta impactantes diseños gráficos y sorprendentes obras de diseño web, nuestra plataforma está lista para mostrar tu talento. Simplemente carga tus archivos,
                                añade una descripción para que otros puedan apreciar tu obra y déjala brillar en nuestra galería digital.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img className="w-[250px]" src="/img/Deco pipas.png" alt="Pipas" />
                    </div>
                </div>
                <div
                    className={`slider3 pt-4 bg-no-repeat bg-cover flex items-center justify-between transition-all duration-500 h-[520px] ${activeSlider === 3 ? 'block' : 'hidden'}`}
                    style={{ backgroundImage: "url('/img/Slider3.png')" }}>
                    <div className="hidden md:block">
                        <h1 className="text-white transform -rotate-90 scale-x-[1] text-7xl font-bold font-robotoFlex opacity-70 w-[300px]">
                            EXPLORA
                        </h1>
                    </div>
                    <div className="flex flex-col w-full h-auto md:w-[650px]">
                        <div className="flex justify-center gap-4 p-2">
                            <button onClick={() => handleSliderChange(1)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="mdi:user-add-outline" />
                                    <p className="text-sm text-white font-robotoFlex">REGISTRATE</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(2)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:upload" />
                                    <p className="text-sm text-white font-robotoFlex">UPLOAD</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(3)}>
                                <div className="flex flex-col gap-1 items-center bg-[#f0585899] border border-white border-opacity-10 rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:search" />
                                    <p className="text-sm text-white font-robotoFlex">EXPLORA</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(4)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="iconamoon:comment" />
                                    <p className="text-sm text-white font-robotoFlex">COMENTA</p>
                                </div>
                            </button>
                        </div>
                        <div className="h-[350px]">
                            <p className="text-white p-4">
                                ¡Encuentra inspiración y oportunidades laborales! Nuestra plataforma no solo es un lugar para admirar arte, sino también un punto de encuentro para talentos creativos en busca de oportunidades laborales. Diseñadores, ilustradores, artistas gráficos y web, ¡todos son bienvenidos a mostrar su portafolio y conectarse con posibles empleadores o clientes!
                                Explora nuestras galerías y descubre no solo obras impresionantes, sino también talentos listos para colaborar en nuevos proyectos.
                                ¿Listo para dar el próximo paso en tu carrera creativa?

                            </p>
                            <div className="p-4">
                                <GaleriaBtn />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img className="w-[250px]" src="/img/Deco pipas.png" alt="Pipas" />
                    </div>
                </div>
                <div
                    className={`slider4 pt-4 bg-no-repeat bg-cover flex items-center justify-between transition-all duration-500 h-[520px] ${activeSlider === 4 ? 'block' : 'hidden'}`}
                    style={{ backgroundImage: "url('/img/Slider4.png')" }}>
                    <div className="hidden md:block">
                        <h1 className="text-white transform -rotate-90 scale-x-[1] text-7xl font-bold font-robotoFlex opacity-70 w-[300px]">
                            COMENTA
                        </h1>
                    </div>
                    <div className="flex flex-col w-full h-auto md:w-[650px]">
                        <div className="flex justify-center gap-4 p-2">
                            <button onClick={() => handleSliderChange(1)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="mdi:user-add-outline" />
                                    <p className="text-sm text-white font-robotoFlex">REGISTRATE</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(2)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:upload" />
                                    <p className="text-sm text-white font-robotoFlex">UPLOAD</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(3)}>
                                <div className="flex flex-col gap-1 items-center bg-gradient-icons rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:search" />
                                    <p className="text-sm text-white font-robotoFlex">EXPLORA</p>
                                </div>
                            </button>
                            <button onClick={() => handleSliderChange(4)}>
                                <div className="flex flex-col gap-1 items-center bg-[#f0585899] border border-white border-opacity-10 rounded-full h-[100px] w-[100px] p-3">
                                    <Icon className="text-3xl text-[#F05858]" icon="iconamoon:comment" />
                                    <p className="text-sm text-white font-robotoFlex">COMENTA</p>
                                </div>
                            </button>
                        </div>
                        <div className="h-[350px]">
                            <p className="text-white p-4">
                            ¡Exprésate y opina siempre con respeto! En nuestra plataforma,
                            los coleccionistas y amantes del arte pueden dejar comentarios y dar "me gusta" a sus piezas favoritas. 
                            Si te interesa alguna obra en particular, puedes contactar directamente al artista a través de su email. Sumérgete en la emoción de descubrir y apreciar piezas únicas de arte digital. 
                            ¿Listo para empezar a comentar y conectar con los creadores?
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img className="w-[250px]" src="/img/Deco pipas.png" alt="Pipas" />
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
                <CarrouselMovil />
            </div>
        </div>
    );
};


