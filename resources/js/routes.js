import Colors from "./components/Colors";
import Illustrations from "./components/Illustrations";
import Logo from "./components/Logo";
import LogoSymbol from "./components/LogoSymbol";
import Mascot from "./components/Mascot";
import NotFound from "./components/NotFound";
import SiteStats from "./components/SiteStats";
import Typography from "./components/Typography";
import Wallpapers from "./components/Wallpapers";

let LoadersAndAnimations = () =>
    import(/* webpackChunkName: "loaders" */ "./components/LoadersAndAnimations");

export default {
    mode: 'history',
    linkActiveClass: 'font-bold',

    routes: [
        { path: '*', component: NotFound },
        { path: '/', component: Logo },
        { path: '/colors', component: Colors },
        { path: '/illustrations', component: Illustrations },
        { path: '/loaders-and-animations', component: LoadersAndAnimations },
        { path: '/logo-symbol', component: LogoSymbol },
        { path: '/mascot', component: Mascot },
        { path: '/site-stats', component: SiteStats },
        { path: '/typography', component: Typography },
        { path: '/wallpapers', component: Wallpapers },
    ]
}
