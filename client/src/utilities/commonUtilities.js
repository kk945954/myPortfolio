import Home from '../components/Home';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "About",
        component: About,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    {
        screen_name: "Contact",
        component: Contact,
    },
]

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) {
        return -1;
    }

    for (let i in TOTAL_SCREENS) {
        if (TOTAL_SCREENS[i].screen_name === screen_name) {
            return i;
        }
    }

    return -1;
}