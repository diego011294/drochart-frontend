import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const ImageUploadForm = ({ isEditing }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(""); // Nueva variable de estado para la URL de la imagen
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            setError('Token no encontrado, por favor inicie sesión.');
            return;
        }

        if (isEditing) {
            fetchImageDetails(id, token); // Pasar el token como argumento a fetchImageDetails
        }
    }, [isEditing, id]);

    const fetchImageDetails = async (id, token) => {
        try {
            const response = await axios.get(`http://roundhouse.proxy.rlwy.net:47292/api/images/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            console.log("Response data:", response.data); // Añadido para depuración

            // Ajuste temporal para evitar errores de destructuración
            const { title, description, userId, imageUrl } = response.data.image || {};
            setTitle(title || "");
            setDescription(description || "");
            setImageUrl(imageUrl || ""); // Establecer la URL de la imagen obtenida del backend
        } catch (error) {
            console.error("Error fetching image details:", error);
            setError("Error fetching image details. Please try again.");
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        // Generar una URL temporal para la vista previa de la imagen
        if (file) {
            setImageUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const token = sessionStorage.getItem('token');
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            if (image) {
                formData.append("image", image);
            }

            const url = isEditing ? `http://roundhouse.proxy.rlwy.net:47292/api/images/${id}` : 'http://roundhouse.proxy.rlwy.net:47292/api/images/upload';
            const method = isEditing ? 'put' : 'post';

            const response = await axios({
                method,
                url,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                },
            });

            console.log("Imagen subida correctamente:", response.data);

            setTitle("");
            setDescription("");
            setImage(null);
            setImageUrl("");
            navigate("/gallery");
        } catch (error) {
            console.error("Error al subir la imagen:", error);
            setError("Error al subir la imagen. Por favor, intenta de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/public/img/image.png')" }}>

            <div className="md:w-[500px] mx-auto pt-10">
                <div className="p-4">
                    <div className="p-4 bg-custom-gradient border-t-4 border-[#F05858] flex flex-col">
                        <div>
                            <div className="absolute">
                                <h1 className="text-5xl font-black font-robotoFlex italic opacity-40"
                                    style={{
                                        color: 'transparent',
                                        WebkitTextStrokeWidth: '0.5px',
                                        WebkitTextStrokeColor: '#FFFFFF',
                                    }}
                                >UPLOAD</h1>
                            </div>
                            <div className="flex gap-2 items-center pt-[20px] pl-2">
                                <Icon className="text-[#F05858] text-2xl z-10" icon="material-symbols:upload" />
                                <h3 className="text-xl font-black font-robotoFlex text-[#F05858] z-10">
                                    {isEditing ? "EDITAR IMAGEN" : "SUBE TU ARTE"}
                                </h3>
                            </div>
                        </div>
                        <form className="pt-4 text-white" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-white">Título</label>
                                <input
                                    type="text"
                                    id="title"
                                    placeholder="Ingrese el título de la imagen"
                                    className="mt-1 p-2 block w-full bg-[#595458] border border-opacity-25 border-white"
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-white">Descripción</label>
                                <textarea
                                    id="description"
                                    placeholder="Ingrese la descripción de la imagen"
                                    className="mt-1 p-2 block w-full bg-[#595458] border border-opacity-25 border-white"
                                    rows="4"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="image" className="block text-sm font-medium text-white">Imagen</label>
                                <input
                                    type="file"
                                    id="image"
                                    className="mt-1 p-2 block w-full "
                                    onChange={handleImageChange}
                                />
                                {imageUrl && (
                                    <div className="mt-2">
                                        <p>Imagen actual:</p>
                                        <img src={imageUrl} alt="Imagen actual" className="max-w-full h-auto" />
                                    </div>
                                )}
                            </div>
                            <button type="submit" className="bg-[#f05858a4] text-white py-2 px-4 rounded transition-all duration-700 hover:bg-[#F05858]" disabled={loading}>
                                {loading ? (isEditing ? "Actualizando..." : "Subiendo...") : (isEditing ? "Actualizar imagen" : "Subir imagen")}
                            </button>
                            {error && <div className="text-red-500 mt-2">{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageUploadForm;
