import TodoPage from "../pages/TodoPage.jsx";
import {createBrowerRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";

export const router = createBrowerRouter ([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <TodoPage />
            }
        ]
    }
])