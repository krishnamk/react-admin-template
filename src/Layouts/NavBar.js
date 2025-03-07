import {
    AlignLeft,
    BarChart2,
    Book,
    CheckSquare,
    Coffee,
    Grid,
    LogIn, Map,
    Sliders,
    Square,
    User,
    UserPlus
} from "react-feather";


function NavBar(Props){

    return (
        <nav id="sidebar" className={`sidebar ${Props.SideBaropen ? "sidebar js-sidebar" : "sidebar js-sidebar collapsed"}`} >
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="/">
                    <span className="align-middle">AdminKit</span>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Pages
                    </li>

                    <li className="sidebar-item active">
                        <a className="sidebar-link" href="/">
                            <Sliders className="align-middle" /> <span className="align-middle">Dashboard</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-profile.html">
                            <User className="align-middle" /> <span className="align-middle">Profile</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-sign-in.html">
                            <LogIn className="align-middle" /> <span className="align-middle">Sign In</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-sign-up.html">
                            <UserPlus className="align-middle" /> <span className="align-middle">Sign Up</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-blank.html">
                            <Book className="align-middle" /> <span className="align-middle">Blank</span>
                        </a>
                    </li>

                    <li className="sidebar-header">
                        Tools & Components
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-buttons.html">
                            <Square className="align-middle" /> <span className="align-middle">Buttons</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-forms.html">
                            <CheckSquare className="align-middle" data-feather="check-square" /> <span className="align-middle">Forms</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-cards.html">
                            <Grid className="align-middle" /> <span className="align-middle">Cards</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-typography.html">
                            <AlignLeft className="align-middle" /> <span className="align-middle">Typography</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="icons-feather.html">
                            <Coffee className="align-middle" data-feather="coffee" /> <span className="align-middle">Icons</span>
                        </a>
                    </li>

                    <li className="sidebar-header">
                        Plugins & Addons
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="charts-chartjs.html">
                            <BarChart2 className="align-middle" /> <span className="align-middle">Charts</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="maps-google.html">
                            <Map className="align-middle" /> <span className="align-middle">Maps</span>
                        </a>
                    </li>
                </ul>


            </div>
        </nav>
    )
}

export default NavBar;