
import HomeLayout from "@/pages/home-layout";
import Contact from "@/pages/home-layout/contact";
import Farm from "@/pages/home-layout/farm";
import Home from "@/pages/home-layout/home";
import Tech from "@/pages/home-layout/tech";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'farm',
                element: <Farm/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'tech',
                element: <Tech/>
            }
        ]
    }
])