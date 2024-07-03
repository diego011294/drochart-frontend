import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react/dist/iconify.js';

export const UserStats = () => {
    const [userWithMostPosts, setUserWithMostPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserWithMostPosts = async () => {
            try {

                const response = await axios.get('http://roundhouse.proxy.rlwy.net:47292/users/most-posts')
                setUserWithMostPosts(response.data);
            } catch (error) {
                console.error('Error fetching user with most posts:', error);
                setError('No se ha podido encontrar el usuario con más diseños');
            } finally {
                setLoading(false);
            }
        };

        fetchUserWithMostPosts();
    }, []);

    return (
        <div className="flex items-center justify-center p-16">
            <div
            style={{ boxShadow: '0px 4px 30px rgba(240, 88, 88, 0.5)' }}
            className='bg-gradient-card p-4 w-[500px] z-10'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[#ffffff6f] font-thin pb-2'>TOP PUBLICACIONES</h2>
                    <Icon className='text-[#ffffff6f] text-3xl pb-2' icon="ph:star-thin"/>
                </div>
                <hr className='text-[#FFFFFF]' />
                {loading ? (
                    <p>Cragando el usuario con más posts...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : userWithMostPosts ? (
                    <div className='text-center p-4 flex flex-col items-center'>
                        <img className='w-[90px]' src="/public/img/Imagen usuario provi.svg" alt="Imagen usuario" />
                        <h1 className='text-white font-rockSalt text-4xl'>{userWithMostPosts.username}</h1>
                        <p className='pt-2 text-[#ffffff66] font-extralight'>{userWithMostPosts.email}</p>
                    </div>
                ) : (
                    <p>No se encontró al usuario.</p>
                )}
            </div>
            <div className='w-[500px] h-[310px] bg-gradient-card absolute transform rotate-6 opacity-20 hidden lg:block'>
            </div>
        </div>
    );
}
