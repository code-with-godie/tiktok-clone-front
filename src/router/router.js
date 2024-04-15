import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Protected from './layout/Protected';
import Upload from '../pages/upload/Upload';
import Messeger from '../pages/messeger/Messeger';
import Profile from '../pages/profile/Profile';
import Following from '../pages/following/Following';
import Explore from '../pages/explore/Explore';
import SinglePost from '../components/single/SinglePost';
import MyPosts from '../pages/mypost/Mypost';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/profile/:username',
        element: <Profile />,
    },
    {
        path: '/:username/video/:id',
        element: <SinglePost />,
    },
    {
        path: '/explore',
        element: <Explore />,
    },
    {
        path: '/',
        element: <Protected />,
        children: [
            {
                path: '/upload',
                element: <Upload />,
            },
            {
                path: '/inbox',
                element: <Messeger />,
            },
            {
                path: '/following',
                element: <Following />,
            },
            {
                path: '/posts',
                element: <MyPosts />,
            },
        ],
    },
]);
