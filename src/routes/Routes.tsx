import React, { Children } from "react"
import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/login/Login"
import HomeLayout from '../pages/layout/HomeLayout.js'
import SignUp from "../pages/login/SignUp"
import ChooseTemplate from "../pages/FlowToSelectResume/ChooseTemplate"
import CreateLayoutHome from '../pages/SelectResumeTemplateLayout/CreateLayoutHome'
import Type1Objectiive from "../pages/ObjectiveComponents/Type1Objectiive"
import ErrorPage from "../pages/ErrorPage"
import Resume from '../pages/Resume'
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
                element: <CreateLayoutHome />,
                children: [{
                    index: true,
                    element: <ChooseTemplate />
                },
                {
                    path: 'objective',
                    element: <Type1Objectiive />
                }]
            },
            {
                path: 'templatecreate',
                element: <SignUp />
            },
            {
                path: 'files',
                element: < Resume />
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
