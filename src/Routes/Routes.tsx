import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../Components/Home/Home';
import { Profile } from '../Components/Home/Profile/Profile';
import { NavBar } from '../Components/NavBar/NavBar';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <NavBar />,
            children : [
                {
                    path: '/Home',
                    element: <Home />
                },
                {
                    path: '/Contact',
                    element: <Home />
                },
                {
                    path: '/Profile/:id',
                    element: <Profile />
                },


            ]
        },



    ]
);