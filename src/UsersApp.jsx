import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './auth/context/AuthContext';
import { LoginPage } from './auth/pages/LoginPage';
import { UserRoutes } from './routes/UserRoutes';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './auth/pages/RegisterPage';


export const UsersApp = () => {

    const { login } = useContext(AuthContext);
    return (
        <>
            <Navbar />
            
                <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />

                    {login.isAuth
                        ? (
                            <Route path='/*' element={<UserRoutes />} />
                        )
                        : <>
                            <Route path='/login' element={<LoginPage />} />
                            <Route path='/*' element={<Navigate to="/login" />} />
                        </>}
                </Routes>
            <Footer />
        </>
    );
}