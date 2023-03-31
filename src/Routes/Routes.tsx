import { createBrowserRouter } from 'react-router-dom'
import { NavBar } from '../Components/NavBar/NavBar';
import { Home, Profile } from '../Components/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/profile/:id',
                element: <Profile />
            },
        ]
    },
   
]);