import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ImageCard } from "../util/ImageCard";
import { GaleriaBtn } from "../util/GaleriaBtn";
import { Link } from "react-router-dom";

export const GalleryHome = () => {
    const [latestImages, setLatestImages] = useState([]);

    useEffect(() => {
        const fetchLatestImages = async () => {
            try {
                const response = await axios.get("https://fearless-playfulness-production.up.railway.app/api/images/latest");
                setLatestImages(response.data);
            } catch (error) {
                console.error('Error fetching latest images:', error);
            }
        };

        fetchLatestImages();
    }, []);

    return (
        <div className="bg-no-repeat bg-cover p-4 flex flex-col items-center"
            style={{ backgroundImage: "url('/img/FondoGaleria.png')" }}>
            <div className="p-2 flex justify-center">
                <div className="absolute">
                    <h1 className="hidden text-5xl font-black font-robotoFlex italic opacity-40 md:block"
                        style={{
                            color: 'transparent',
                            WebkitTextStrokeWidth: '0.5px',
                            WebkitTextStrokeColor: '#FFFFFF',
                        }}
                    >GALERÍA</h1>
                </div>
                <div className="flex gap-2 items-center pt-[20px] pl-2">
                    <Icon className="text-[#F05858] text-2xl z-10" icon="hugeicons:brush" />
                    <h3 className="text-xl font-black font-robotoFlex text-[#F05858] z-10">
                        GALERÍA
                    </h3>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row justify-center">
                {latestImages.map(image => (
                    <Link key={image.id} to={`/gallery/details/${image.id}`}>
                        <ImageCard imageId={image.id} />
                    </Link>
                ))}
            </div>
            <div className="w-full pb-4 md:w-[650px] flex flex-col items-center">
                <p className="text-white text-center pt-3 pb-5">
                    Te invitamos a explorar nuestra amplia galería,
                    donde encontrarás una colección excepcional de diseños y obras de destacados artistas.
                    ¡Sumérgete en un universo de creatividad y excelencia!
                </p>
                <Link to="/gallery">
                    <GaleriaBtn />
                </Link>
                
            </div>
        </div>
    );
};

export default GalleryHome;




