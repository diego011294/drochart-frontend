import { Navigate, Route, Routes } from "react-router-dom"
import { UserProvider } from "../context/UserProvider"
import { RegisterPage } from "../pages/RegisterPage"
import { UsersPage } from "../pages/UsersPage"
import { AuthContext } from "../auth/context/AuthContext"
import { useContext } from "react"
import { GalleryPage } from "../pages/GalleryPage"
import ImageUploadForm from "../components/ImageUploadForm"
import { ImageDetailPage } from "../pages/ImageDetailPage"
import { UserImagesPanel } from "../pages/UserImagesPanel"

export const UserRoutes = () => {
    const { login } = useContext(AuthContext);
    return (
        <>
            <UserProvider>
                <Routes>
                    <Route path="show" element={<UserImagesPanel />} />
                    <Route path="users" element={<UsersPage />} />
                    <Route path="users/register" element={<RegisterPage />} />
                    <Route path="gallery">
                        <Route index element={<GalleryPage />} />
                        <Route path="details/:id" element={<ImageDetailPage />} />
                    </Route>
                    <Route path="nueva" element={<ImageUploadForm/>}/>                                        
                    {!login.isAdmin || <>
                    <Route path="/edit-image/:id" element={<ImageUploadForm isEditing={true} />} />
                    <Route path="users/edit/:id" element={<RegisterPage />} />
                    </>}
                    <Route path="/" element={<Navigate to="/home" />} />
                </Routes>
            </UserProvider>
        </>
    )
}