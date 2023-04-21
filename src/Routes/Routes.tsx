import { Outlet, createBrowserRouter } from 'react-router-dom'
import { NavBar } from '../Components/NavBar/NavBar';
import { VideoCard } from '../Components/VideoCard/VideoCard';
import { SaveNewVideo } from '../Components/Forms/VideoUploadForm/SaveNewVideo';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <>
            <NavBar />
            <Outlet />
        </>
        ,
        children: [
            {
                path: '/home',
                element: <>
                    <VideoCard />
                </>,
            },
            {
                path: '/saveNewVideo',
                element: <>
                    <SaveNewVideo />
                </>,
            },
        ]
    },

]);
