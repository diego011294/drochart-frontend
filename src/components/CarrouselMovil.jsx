import { RegisterBtn } from '../util/RegisterBtn';
import { GaleriaBtn } from '../util/GaleriaBtn';
import { Icon } from "@iconify/react";
import { useState } from 'react';

export const CarrouselMovil = () => {

    const [activeSlider, setActiveSlider] = useState(0); // Estado para controlar el slider activo

    const slides = [
        {
            title:(
                <div className='flex items-center gap-4'>
                    <Icon className="text-3xl text-[#F05858]" icon="mdi:user-add-outline" />
                    <h1>REGISTRO</h1>
                </div>
            ),
            content: (
                <>
                    <p className="text-white p-2">
                    ¡Únete a nuestra comunidad de artistas! <span className="text-[#f05858c3] font-semibold">Regístrate </span>para acceder a todas las funciones de nuestra plataforma.
                    Con una cuenta, podrás subir tus propias creaciones y explorar obras de arte de talentos de todo el mundo.
                    Únete hoy y comienza a compartir tu pasión creativa con el mundo.
                    </p>
                    <div className="pt-3">
                        <RegisterBtn />
                    </div>
                </>
            )
        },
        {
            title:(
                <div className='flex items-center gap-4'>
                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:upload" />
                    <h1>UPLOAD</h1>
                </div>
            ),
            content: (
                <p className="text-white p-2">
                    ¡Es tu momento de lucirte! Sube tus diseños y comparte tu creatividad con el mundo. Desde ilustraciones vibrantes hasta impactantes diseños gráficos y sorprendentes obras de diseño web, nuestra plataforma está lista para mostrar tu talento. Simplemente carga tus archivos,
                    añade una descripción para que otros puedan apreciar tu obra y déjala brillar en nuestra galería digital.
                </p>
            )
        },
        {
            title:(
                <div className='flex items-center gap-4'>
                    <Icon className="text-3xl text-[#F05858]" icon="material-symbols:search" />
                    <h1>EXPLORA</h1>
                </div>
            ),
            content: (
                <>
                    <p className="text-white p-2">
                        ¡Encuentra inspiración y oportunidades laborales! Nuestra plataforma no solo es un lugar para admirar arte, sino también un punto de encuentro para talentos creativos en busca de oportunidades laborales. Diseñadores, ilustradores, artistas gráficos y web, ¡todos son bienvenidos a mostrar su portafolio y conectarse con posibles empleadores o clientes!
                        Explora nuestras galerías y descubre no solo obras impresionantes, sino también talentos listos para colaborar en nuevos proyectos.
                        ¿Listo para dar el próximo paso en tu carrera creativa?
                    </p>
                    <div className="pt-3">
                        <GaleriaBtn />
                    </div>
                </>
            )
        },
        {
            title:(
                <div className='flex items-center gap-4'>
                    <Icon className="text-3xl text-[#F05858]" icon="iconamoon:comment" />
                    <h1>COMENTA</h1>
                </div>
            ),
            content: (
                <p className="text-white p-2">
                    ¡Exprésate y opina siempre con respeto! En nuestra plataforma,
                    los coleccionistas y amantes del arte pueden dejar comentarios y dar "me gusta" a sus piezas favoritas. 
                    Si te interesa alguna obra en particular, puedes contactar directamente al artista a través de su email. Sumérgete en la emoción de descubrir y apreciar piezas únicas de arte digital. 
                    ¿Listo para empezar a comentar y conectar con los creadores?
                </p>
            )
        }
    ];

    const handlePrev = () => {
        setActiveSlider((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveSlider((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full overflow-hidden bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/public/img/Fondo slider.png')" }}>
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeSlider * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full flex flex-col items-center justify-center h-[500px] p-2">
                        <h1 className="text-white text-3xl font-bold mb-4">{slide.title}</h1>
                        {slide.content}
                    </div>
                ))}
            </div>
            <button onClick={handlePrev} className="absolute left-4 transform -translate-y-16 bg-white rounded-full p-1">
                <Icon icon="mdi:chevron-left" className="text-3xl text-[#F05858]" />
            </button>
            <button onClick={handleNext} className="absolute right-4 transform -translate-y-16 bg-white rounded-full p-1">
                <Icon icon="mdi:chevron-right" className="text-3xl text-[#F05858]" />
            </button>
        </div>
    );
}


