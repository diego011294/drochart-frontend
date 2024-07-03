import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const GalleryPage = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [tokenExpired, setTokenExpired] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loadingGallery, setLoadingGallery] = useState(false);

    useEffect(() => {
        fetchImages();
    }, [currentPage, searchTerm]);

    const fetchImages = async () => {
        setLoadingGallery(true);
        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                setError('Token no encontrado, por favor inicie sesión.');
                setLoadingGallery(false);
                return;
            }

            const url = searchTerm
                ? `https://fearless-playfulness-production.up.railway.app/api/images/search?titulo=${encodeURIComponent(searchTerm)}&page=${currentPage}&size=12`
                : `https://fearless-playfulness-production.up.railway.app/api/images/gallery?page=${currentPage}&size=12`;

            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.content && response.data.totalPages) {
                setImages(response.data.content);
                setTotalPages(response.data.totalPages);
            } else {
                setImages([]);
                setTotalPages(0);
            }

            setTokenExpired(false);
        } catch (error) {
            console.error('Error fetching images:', error);
            if (error.response && error.response.status === 403) {
                setTokenExpired(true);
            } else {
                setError('Error al obtener las imágenes.');
            }
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(0);
    };

    const goToImageDetail = (id) => {
        navigate(`details/${id}`);
    };

    const likeImage = async (imageId) => {
        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                setError('Token no encontrado, por favor inicie sesión.');
                return;
            }

            await axios.put(`https://fearless-playfulness-production.up.railway.app/api/images/${imageId}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setImages(images.map(image => {
                if (image.id === imageId) {
                    return { ...image, likes: image.likes + 1 };
                }
                return image;
            }));
        } catch (error) {
            console.error('Error liking image:', error);
            Swal.fire({
                title: 'Advertencia',
                text: "¡Ya le has dado like a este diseño!",
                iconHtml: `<div class="custom-icon-container"><img src="/img/Imagen usuario provi.svg" alt="Img user" /></div>`,
                confirmButtonColor: '#000000',
                confirmButtonText: 'Vale',
                customClass: {
                    popup: 'custom-popup', 
                },
        });
        }
    };

    const deleteImage = async (id) => {
        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                setError('Token no encontrado, por favor inicie sesión.');
                return;
            }

            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: "No podrás revertir esta acción.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminarlo',
                customClass: {
                    popup: 'custom-popup', 
                }
            });

            if (result.isConfirmed) {
                await axios.delete(`https://fearless-playfulness-production.up.railway.app/api/images/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setImages(images.filter(image => image.id !== id));

                Swal.fire(
                    '¡Eliminado!',
                    'La imagen ha sido eliminada.',
                    'success'
                );
            }
        } catch (error) {
            console.error('Error deleting image:', error);
            setError('Error deleting image: ' + (error.response?.data?.message || error.message));
            Swal.fire(
                'Error',
                'Hubo un problema al eliminar la imagen.',
                'error'
            );
        }
    };

    const goToPreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <div className="p-6">
            {tokenExpired && (
                <div className="text-[#FFFFFF] text-2xl p-4 rounded-md text-center">
                    La sesión ha expirado. Por favor, inicia sesión nuevamente.
                </div>
            )}
            <div className="p-4 flex items-center gap-3">
                <input
                    type="text"
                    className="w-full p-2 bg-[#59545853] border border-opacity-25 border-white"
                    placeholder="Si buscas lo acabarás encontrando..."
                    aria-label="button filter gallery"
                    aria-describedby="button-filter"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button>
                    <Icon className="text-2xl text-white" icon="material-symbols:search" />
                </button>
            </div>
            <div className="w-full bg-custom-gradient border-t-4 border-[#F05858] grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {loadingGallery ? (
                        <p className="text-white text-center p-4">Cargando Diseños...</p>
                    ) : (
                images.map(image => (
                    <div key={image.id} className="border border-opacity-25 border-white p-2 bg-[#686868]">
                        <div className="flex flex-col items-center">
                            <div className="flex justify-end">
                                <div className="w-full lg:h-[310px] lg:overflow-hidden">
                                    <button><img src={image.url} alt={image.title} className="w-full h-full object-cover"
                                    onClick={() => goToImageDetail(image.id)} /></button>
                                </div>
                                <div className="absolute flex items-center gap-2 bg-[#F05858] p-2 mt-2 rounded-s-3xl shadow-md">
                                    <button onClick={() => likeImage(image.id)}>
                                        <Icon className="text-[#ffffffa9] hover:text-[#FFFFFF] transition-all duration-500 text-xl" icon="bxs:like" />
                                    </button>
                                    <p className="text-white">{image.likes}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <h2 className="pl-2 pt-2 w-[200px] font-robotoFlex text-white truncate">{image.title}</h2>
                            <p className="bg-black w-[40px] text-center p-1 rounded-full text-[10px] text-white">ILUS</p>
                        </div>
                        <div className="flex items-center justify-between position-">
                            <div className="pt-3 flex gap-2 items-center">
                                <img className="w-[55px]" src="/img/Imagen usuario provi.svg" alt="Img user" />
                                <p className="text-sm text-[#BDBCBC]">Autor: <br /> <span className="text-white">{image.user.username}</span></p>
                            </div>
                            {!login.isAdmin || <>
                                <div className="p-1 bg-[#ffffff48] rounded-2xl flex gap-1">
                                    <button onClick={() => navigate(`/edit-image/${image.id}`)}>
                                        <Icon className="text-[#e2e462] text-lg" icon="ph:pencil" />
                                    </button>
                                    <button onClick={() => deleteImage(image.id)}>
                                        <Icon className="text-[#F05858] text-lg" icon="ph:trash" />
                                    </button>
                                </div>
                            </>}
                        </div>
                    </div>
                )
                ))}
            </div>
            <div className="flex justify-center gap-4 mt-6">
                <button
                    className={`px-4 py-2 bg-[#F05858] text-white rounded-md ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d04848] hover:shadow-lg'}`}
                    onClick={goToPreviousPage}
                    disabled={currentPage === 0}
                >
                    Anterior
                </button>
                <button
                    className={`px-4 py-2 bg-[#F05858] text-white rounded-md ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d04848] hover:shadow-lg'}`}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages - 1}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};
