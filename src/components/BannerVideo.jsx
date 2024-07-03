import { useState } from 'react';

export const BannerVideo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative flex justify-center items-center h-[300px] md:h-[500px] w-full">
            <video className="absolute top-0 left-0 w-full h-full object-cover opacity-50" autoPlay muted loop>
                <source src="/public/img/5621712-hd_1920_1080_24fps.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
            <div className="absolute flex flex-col justify-center items-center z-10">
                <button onClick={handleOpenModal}>
                    <img className="w-[10rem] transition-all duration-500 hover:w-[200px]" src="/public/img/PLay.svg" alt="Play-btn" />
                </button>
                <h1 className="text-center text-2xl font-rockSalt font-bold text-white md:text-3xl">
                    "El arte no tiene limites"
                </h1>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative rounded-lg overflow-hidden shadow-lg w-11/12 md:w-2/3 lg:w-1/2 bg-black">
                        <button 
                            className="absolute top-2 right-2 text-white text-3xl z-50" 
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <div className="aspect-w-16 aspect-h-9 relative">
                            <video className="w-full h-full" autoPlay controls>
                                <source src="/public/img/EL ARTE EMPIEZA AQUI.mp4" type="video/mp4" />
                                Tu navegador no soporta la etiqueta de video.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
