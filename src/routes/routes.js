import Home from '../pages/Home'
import PinBuilder from '../pages/PinBuilder'
import Profile from '../pages/Profile';

const routes = [
    {
        path: '/',
        Component: Home,
        defaultLayout: true
    },
    {
        path: '/pin-builder',
        Component: PinBuilder,
        defaultLayout: true
    },
    {
        path: '/profile',
        Component: Profile,
        defaultLayout: true
    }
]

export default routes;


