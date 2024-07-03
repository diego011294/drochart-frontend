import { Icon } from "@iconify/react/dist/iconify.js"
import { BannerVideo } from "./BannerVideo"

export const QueEs = () => {
    return (
        <div>
            <div className="flex flex-col justify-center md:flex-row flex-wrap pb-20">
                <div className="pt-5 pl-3">
                    <div className="absolute">
                        <h1 className="hidden text-4xl font-black font-robotoFlex italic opacity-40 md:text-5xl md:block"
                            style={{
                                color: 'transparent',
                                WebkitTextStrokeWidth: '0.5px',
                                WebkitTextStrokeColor: '#FFFFFF',
                            }}
                        >¿QUE ES DROCH.ART?</h1>
                    </div>
                    <div className="flex gap-2 items-center pt-[20px] pl-2">
                        <Icon className="text-[#f05858] text-2xl z-10" icon="hugeicons:brush" />
                        <h3 className="text-xl font-black font-robotoFlex text-[#F05858] z-10">
                            ¿QUE ES DROCH.ART?
                        </h3>
                    </div>
                    <div className="flex flex-col items-center lg:items-baseline">
                        <p className="text-white font-robotoFlex p-3 md:w-[650px]">
                            Somos un espacio donde el <span className="text-[#F05858] font-semibold">arte y la buena vibra </span>son los protagonistas.
                            Nuestro proyecto tiene como objetivo que puedas compartir tus diseños y que los usuarios puedan interactuar con ellos.
                            ¿A qué esperas? <span className="text-[#F05858] font-semibold">Regístrate </span>ahora mismo para comenzar a compartir tu arte y permitir que el mundo conozca tu talento.
                        </p>
                        <div className="lg:absolute z-10 transform lg:translate-x-[430px]">
                            <img className="w-[300px] md:w-[400px]" src="/public/img/casete.png" alt="cassete" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <img className="absolute z-20 transform translate-y-[-69px]" src="/public/img/Detalle1.svg" alt="detalle down" />
                <BannerVideo />
            </div>
        </div>
    )
}

