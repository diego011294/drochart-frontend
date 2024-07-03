import { BannerVideo } from "../components/BannerVideo"
import { GalleryHome } from "../components/GalleryHome"
import { Header } from "../components/Header"
import { QueEs } from "../components/QueEs"
import { SliderHome } from "../components/SliderHome"
import { UserStats } from "../components/UserStats"


export const HomePage = () => {
    return (
        <div>
            <Header/>
            <QueEs/>
            <SliderHome/>
            <GalleryHome/>
            <UserStats/>
        </div>
    )
}


