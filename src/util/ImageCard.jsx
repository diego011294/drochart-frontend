import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react/dist/iconify.js';

export const ImageCard = ({ imageId }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                
                const response = await axios.get(`http://roundhouse.proxy.rlwy.net:47292/api/images/${imageId}`,{
                });
                console.log("Image response:", response.data);
                setImage(response.data);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [imageId]);

    return (
        <div>
            {image ? (
                <div className='p-3'>
                        <div className='absolute mx-3 z-10'>
                            <Icon className='text-7xl text-[#F05858]' icon="clarity:new-solid" />
                        </div>
                        <div className='w-[250px] h-[250px] overflow-hidden rounded-lg'>
                            <img className='w-full h-full object-cover opacity-70 transition-opacity duration-500 hover:opacity-100' src={image.url} alt={image.title}
                                style={{ boxShadow: '0px 4px 30px rgba(240, 88, 88, 0.8)' }}
                            />
                        </div>
                </div>
            ) : (
                <p>Imagen no encontrada</p>
            )}
        </div>
    );
};
