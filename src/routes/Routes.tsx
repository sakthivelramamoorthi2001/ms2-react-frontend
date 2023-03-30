import React, { Children } from "react"
import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/login/Login"
import HomeLayout from '../pages/layout/HomeLayout.js'
import SignUp from "../pages/login/SignUp"
import ChooseTemplate from "../pages/FlowToSelectResume/ChooseTemplate"
import CreateLayoutHome from '../pages/layout/SelectResumeTemplateLayout/CreateLayoutHome'
import ErrorPage from "../pages/ErrorPage"
import Files from '../pages/ResumeFiles/Files'
import TempleteView from '../pages/FlowToSelectResume/TempleteView';
import TemplateCreate from '../pages/FlowToCreateTemplate/Home'
import VipCreate from "../pages/login/VipCreate"
const Routes = () => {
    const route = [{
        path: "/",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: '/ms2',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'create',
                element: <ChooseTemplate />,
            },
            {
                path:'design/:id',
                element:<CreateLayoutHome />,
                children: [{
                    index: true,
                    element: <TempleteView />
                },
        ]
            },
            {
                path: 'templatecreate',
                element: <TemplateCreate />
            },
            {
                path: 'files',
                element: < Files />
            },
            {
                path:"vip-plans",
                element:<VipCreate />
            }
        ]
    },

    {
        path: 'ms2',
        children: [
            {
                index: true,
                element: <Login />,

            }]
    },
    {
        path: "*",
        element: <ErrorPage />

    }

    ];
    return useRoutes(route)
}

export default Routes;
