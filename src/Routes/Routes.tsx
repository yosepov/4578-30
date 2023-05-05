import { Outlet, createBrowserRouter } from 'react-router-dom'
import { NavBar } from '../Components/NavBar/NavBar';
import { VideoCard } from '../Components/VideoCard/VideoCard';
import { SaveNewVideo } from '../Components/Forms/VideoUploadForm/SaveNewVideo';
import { VideoPage } from '../Components/videoPage/VideoPage';
import { Card } from '@mui/material';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <>
            <NavBar />
            <Card>
                <Outlet />
            </Card>
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
            {
                path: '/videoPage/:id',
                element: <>
                    <VideoPage />
                </>,
            },
        ]
    },

]);
