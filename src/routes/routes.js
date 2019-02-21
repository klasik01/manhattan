import {AccountCircle, ContentPaste, Home, PanToolSharp} from '@material-ui/icons';
import Welcome from "../components/page/Welcome";
import Administration from "../components/administration/Administration";

const Routes = [
    {
        path: '/dashboard/home',
        sidebarName: 'Home',
        navbarName: 'Home',
        icon: Home,
        component: Administration
    },
    {
        path: '/dashboard/profile',
        sidebarName: 'Profile',
        navbarName: 'Profile',
        icon: AccountCircle,
        component: Welcome
    },
    {
        path: '/administration',
        sidebarName: 'Administration',
        navbarName: 'Administration',
        icon: PanToolSharp,
        component: Administration
    }
];

export default Routes;