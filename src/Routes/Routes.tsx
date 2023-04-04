import { Outlet, createBrowserRouter } from 'react-router-dom'
import { NavBar } from '../Components/NavBar/NavBar';
import { Profile } from '../Components/Home/Home';
import { VideoCard } from '../Components/VideoCard/VideoCard';

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
                path: '/profile/:id',
                element: <Profile />
            },
        ]
    },

]);