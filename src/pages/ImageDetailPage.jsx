import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/context/AuthContext";

export const ImageDetailPage = () => {
    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const { login } = useContext(AuthContext);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loadingComments, setLoadingComments] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axios.get(`https://fearless-playfulness-production.up.railway.app/api/images/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setImage(response.data);
                setLikes(response.data.likes);
                setHasLiked(response.data.hasLiked);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [id]);

    const fetchComments = async (page = 0) => {
        setLoadingComments(true);
        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.get(`https://fearless-playfulness-production.up.railway.app/api/comments/image/${id}?page=${page}&size=6`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setComments(response.data.content);
            setTotalPages(response.data.totalPages);
            setPage(response.data.number);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
        setLoadingComments(false);
    };

    useEffect(() => {
        fetchComments();
    }, [id]); // Asegúrate de que se actualicen los comentarios cuando cambie el ID

    const handleCommentSubmit = async () => {
        try {
            const token = sessionStorage.getItem('token');
            await axios.post(`https://fearless-playfulness-production.up.railway.app/api/comments/create/${id}`, {
                content: newComment
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setNewComment("");
            fetchComments(page); // Refresca los comentarios para la página actual después de enviar uno nuevo
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            const token = sessionStorage.getItem('token');
            await axios.delete(`https://fearless-playfulness-production.up.railway.app/api/comments/${commentId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchComments(page); // Refresca los comentarios para la página actual después de eliminar uno
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const handleLikeImage = async () => {
        try {
            const token = sessionStorage.getItem('token');
            await axios.put(`https://fearless-playfulness-production.up.railway.app/api/images/${id}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setLikes(likes + 1);
            setHasLiked(true);
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

    const handlePreviousPage = () => {
        if (page > 0) {
            fetchComments(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages - 1) {
            fetchComments(page + 1);
        }
    };

    return (
        <div className="md:p-16">
            {image && (
                <div className="p-4 flex justify-center">
                    <div className="pb-5 bg-custom-gradient border-t-4 border-[#F05858] flex flex-col p-4 lg:flex-row gap-5">
                        <div className="w-full md:h-[700px] lg:h-[700px] overflow-hidden bg-[#686868] p-2 border border-opacity-50 border-white lg:max-w-[650px]">
                            <img className="h-full w-full object-cover" src={image.url} alt={image.title} />
                        </div>
                        <div className="w-full md:w-[480px]">
                            <div className="flex flex-col-reverse justify-between text-white md:flex-col-reverse items-start gap-3">
                                <h2 className="text-2xl font-bold font-robotoFlex">{image.title}</h2>
                                <p className="bg-black p-1 rounded-full text-xs w-[120px] text-center">Ilustración digital</p>
                            </div>
                            <p className="text-white font-light font-robotoFlex pt-2">{image.description}</p>
                            <div className="pt-10 flex gap-2 items-center">
                                <img className="w-[55px]" src="/img/Imagen usuario provi.svg" alt="Img user" />
                                <p className="text-[#BDBCBC]">Autor: <br /> <span className="text-white">{image.user ? image.user.username : 'Unknown User'}</span></p>
                            </div>
                            <div className="text-white bg-[#6868684e] mt-5 p-5 rounded-md border border-white border-opacity-10 shadow-md font-robotoFlex flex flex-col items-center">
                                <h2 className="text-center">Si estás interesado en esta obra puedes escribirle un correo al autor</h2>
                                <div className="mt-3 text-center">
                                    <a href={`mailto:${image.user.email}`} className="text-l md:text-2xl font-rockSalt text-[#F05858] hover:underline">{image.user.email}</a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 mt-3">
                                <p className="text-center font-thin text-[#ffffff92]">O seguir explorando otros diseños</p>
                                <div className="text-white text-center">
                                    <button className="p-2 border-2 border-white transition-colors duration-700 hover:bg-white hover:text-[#DF6969] w-[120px]" onClick={() => navigate('/gallery')}>
                                        VOLVER
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-center lg:justify-start pt-4 lg:flex-col">
                            <div className="bg-[#686868] p-2 rounded-full flex gap-2 border border-opacity-50 border-white shadow-md lg:flex-col">
                                <div className="flex items-center gap-2 lg:flex-col">
                                    <button onClick={handleLikeImage}>
                                        <Icon className={"text-[#ffffffa9] hover:text-[#FFFFFF] transition-all duration-500 p-1 rounded-full shadow-md text-3xl bg-[#F05858]"} icon="bxs:like" />
                                    </button>
                                    <p className="text-white">{likes}</p>
                                </div>

                                <Icon className="p-1 text-3xl text-white bg-black rounded-full shadow-md" icon="material-symbols-light:share-outline" />

                                <Icon className="p-1 text-3xl text-white bg-black rounded-full shadow-md" icon="ep:more" />
                            </div>
                        </div>

                    </div>
                </div>
            )}
            <div className="p-3">
                <div className="pb-5 md:flex justify-center">
                    <div className="absolute">
                        <h1 className="hidden md:block text-5xl font-black font-robotoFlex italic opacity-40"
                            style={{
                                color: 'transparent',
                                WebkitTextStrokeWidth: '0.5px',
                                WebkitTextStrokeColor: '#FFFFFF',
                            }}
                        >COMENTARIOS</h1>
                    </div>
                    <div className="flex gap-2 items-center pt-[20px] pl-2">
                        <Icon className="text-[#F05858] text-2xl z-10" icon="mynaui:chat" />
                        <h3 className="text-xl font-black font-robotoFlex text-[#F05858] z-10">
                            DEJA TU COMENTARIO
                        </h3>
                    </div>
                </div>
                <div className="bg-[#31313147] rounded-lg shadow-md w-full lg:w-[850px] mx-auto">
                    {loadingComments ? (
                        <p className="text-white text-center p-4">Cargando comentarios...</p>
                    ) : (
                        comments.length === 0 ? (
                            <p className="text-gray-500 text-center p-4">No hay comentarios. ¡Sé el primero en comentar!</p>
                        ) : (
                            comments.map((comment) => (
                                <div className="flex items-center justify-between p-2" key={comment.id}>
                                    <div className="flex gap-4 p-3 items-center">
                                        <img className="w-[55px]" src="/img/Favicon.svg" alt="Img user" />
                                        <div className="flex flex-col">
                                            <div className="flex items-center">
                                                <Icon className="text-xl text-[#F05858]" icon="mdi:user"/>
                                                <p className="text-[#ffffff76] text-sm font-robotoFlex p-2">{comment.user ? comment.user.username : 'Unknown User'}</p>
                                            </div>
                                            <div className="bg-[#6868687a] rounded-md">
                                                <p className= "p-2 text-white ">{comment.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {login.isAdmin && (
                                        <button onClick={() => handleDeleteComment(comment.id)}>
                                            <Icon className="text-[#F05858] text-lg" icon="ph:trash" />
                                        </button>
                                    )}
                                </div>
                            ))
                        )
                    )}
                    <hr className="text-[#f05858a4]" />
                    <div className="flex justify-between p-3">
                        <button className="text-white" onClick={handlePreviousPage} disabled={page === 0}>
                            <Icon className="text-2xl" icon="ri:arrow-left-double-fill" />
                        </button>
                        <button className="text-white" onClick={handleNextPage} disabled={page === totalPages - 1}>
                            <Icon className="text-2xl" icon="ri:arrow-right-double-fill" />
                        </button>
                    </div>
                    <div className="flex flex-col p-3">
                        <textarea className="bg-[#68686842] text-white p-2 rounded-md" placeholder="Deja tu comentario..." value={newComment} onChange={e => setNewComment(e.target.value)} />
                        <div className="flex justify-end p-3">
                            <button className="bg-[#f05858a4] text-white p-2 transition-all duration-700 hover:bg-[#F05858] w-[120px] rounded-md" onClick={handleCommentSubmit}>Comentar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};