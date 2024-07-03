import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { AuthContext } from '../auth/context/AuthContext';
import Swal from 'sweetalert2';

export const UserImagesPanel = () => {
    const [images, setImages] = useState([]);
    const { login, handlerLogout } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserImages = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axios.get('http://roundhouse.proxy.rlwy.net:47292/api/images/show', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching user images:', error);
                setError('Sesión expirada, vuelve a iniciar sesión');
            }
        };

        fetchUserImages();
    }, []);

    const handleDeleteImage = async (id) => {
        try {
            const token = sessionStorage.getItem('token');
            
            // Mostrar alerta de confirmación
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: 'No podrás revertir esta acción.',
                iconHtml: `<div class="custom-icon-container"><img src="/img/Imagen usuario provi.svg" alt="Img user" /></div>`,
                showCancelButton: true,
                confirmButtonColor: '#000000',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                customClass: {
                    popup: 'custom-popup' 
                }
            });
    
            if (result.isConfirmed) {
                // Usuario confirmó la eliminación
                await axios.delete(`http://roundhouse.proxy.rlwy.net:47292/api/images/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setImages(images.filter(image => image.id !== id));
    
                // Mostrar mensaje de éxito
                Swal.fire({
                    title: 'Eliminado',
                    text: 'El diseño se ha eliminado correctamente',
                    iconHtml: `<div class="custom-icon-container"><img src="/img/Imagen usuario provi.svg" alt="Img user" /></div>`,
                    confirmButtonColor: '#000000',
                    confirmButtonText: 'Vale',
                    customClass: {
                        popup: 'custom-popup' 
                    }
                });
            }
        } catch (error) {
            console.error('Error deleting image:', error);
            Swal.fire(
                'Error',
                'Hubo un problema al eliminar la imagen.',
                'error'
            );
        }
    };

    const handleDeleteAccount = async () => {
        try {
            const token = sessionStorage.getItem('token');

            // Obtener ID del usuario basado en el username
            const userIdResponse = await axios.get(`http://roundhouse.proxy.rlwy.net:47292/users/username/${login.user.username}/id`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const userId = userIdResponse.data;

            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: 'No podrás revertir esta acción y se eliminarán todas tus imágenes.',
                iconHtml: `<div class="custom-icon-container"><img src="/img/Imagen usuario provi.svg" alt="Img user" /></div>`,
                showCancelButton: true,
                confirmButtonColor: '#000000',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar cuenta',
                customClass: {
                    popup: 'custom-popup' 
                }
            });

            if (result.isConfirmed) {
                await axios.delete(`http://roundhouse.proxy.rlwy.net:47292/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Mostrar mensaje de éxito
                Swal.fire({
                    title: 'Cuenta eliminada',
                    text: 'Tu cuenta ha sido eliminada correctamente.',
                    iconHtml: `<div class="custom-icon-container"><img src="/img/Imagen usuario provi.svg" alt="Img user" /></div>`,
                    confirmButtonColor: '#000000',
                    confirmButtonText: 'Vale',
                    customClass: {
                        popup: 'custom-popup' 
                    }
                }).then(() => {
                    handlerLogout();
                    navigate('/');
                });
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    const goToImageDetail = (id) => {
        navigate(`/gallery/details/${id}`);
    };

    return (
        <div>
            <div className='fixed bottom-4 right-4 shadow-sm'>
                <Link to={"/nueva"}><button className='bg-[#000000] rounded-full p-3'>
                <Icon className="text-[#FFFFFF] text-2xl" icon="ph:plus" />
                </button></Link>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center p-10 lg:p-16'>
                
                <div className='flex flex-col items-center gap-3'>
                    <img className='w-[100px]' src="/img/Imagen usuario provi.svg" alt="Usu provi" />
                    <h1 className='text-white uppercase font-rockSalt text-2xl'>
                        {login.user?.username || 'Usuario no autenticado'}
                    </h1>
                    <button className='bg-red-500 text-white rounded-lg px-4 py-2 mt-4' onClick={handleDeleteAccount}>
                        Eliminar Cuenta
                    </button>             
                </div>
                <div>
                    <div className="absolute">
                        <h1 className="hidden text-4xl font-black font-robotoFlex italic opacity-40 md:text-5xl md:block"
                            style={{
                                color: 'transparent',
                                WebkitTextStrokeWidth: '0.5px',
                                WebkitTextStrokeColor: '#FFFFFF',
                            }}
                        >MIS DISEÑOS</h1>
                    </div>
                    <div className="flex gap-2 items-center pt-[20px] pl-2">
                        <Icon className="text-[#f05858] text-2xl z-10" icon="hugeicons:brush" />
                        <h3 className="text-xl font-black font-robotoFlex text-[#F05858] z-10">
                            GESTIONA TUS DISEÑOS
                        </h3>
                    </div>
                </div>
                <div className='w-full bg-custom-gradient border-t-4 border-[#F05858] p-10 justify-center flex flex-wrap gap-5'>
                    {images.length === 0 ? (
                        <p className="text-white text-center text-xl font-robotoFlex ">No hay diseños subidos aún</p>
                    ) : (
                        images.map(image => (
                            <div className='flex flex-col items-center' key={image.id}>
                                <div className='flex items-start'>
                                    <button className='w-[250px] h-[250px] overflow-hidden' onClick={() => goToImageDetail(image.id)}>
                                        <img className='w-full h-full object-cover rounded-lg' src={image.url} alt={image.title} />
                                    </button>
                                    <div className="flex justify-center items-center w-[50px] h-[50px] absolute ml-2 mt-2">                          
                                        <button className='bg-[#f05858] rounded-full p-3 shadow-md' onClick={() => handleDeleteImage(image.id)}>
                                            <Icon className="text-[#FFFFFF] text-xl" icon="ph:trash" />
                                        </button>
                                    </div>
                                </div>                       
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
