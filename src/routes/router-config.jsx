// 라우터 설정
import {creatBrowserRouter} from 'react-router-dom';
import RootLayout from "../layouts/RootLayout.jsx";


export const router = creatBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
    }
])