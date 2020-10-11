import React, {useContext} from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import SidebarContext from "../../../context/SidebarContext";
import UserContext from "../../../context/UserContext";

import './Header.scss';

function Header({toggleUserProfileMenu}) {

    const {menu, setMenu} = useContext(SidebarContext);

    const {user} = useContext(UserContext);

    function setMenuState() {
        setMenu(!menu);
    }

    /*useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setBackgroundColor("#0F1626");
            } else {
                setBackgroundColor("transparent");
            }
        });

    }, []);*/

    return (
        <>
            <header className="header">
                <a href='/'>
                    <div className="header__logo-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Capa_1"
                            enableBackground="new 0 0 58 50"
                            height="27"
                            viewBox="0 0 58 50"
                            width="27"
                            fill="white"
                            className="header__logo-icon"
                        >
                            <g>
                                <g>
                                    <path
                                        d="m54 48c0-1.105-.895-2-2-2h-46c-1.105 0-2 .895-2 2s.895 2 2 2h46c1.105 0 2-.895 2-2z"/>
                                </g>
                                <g>
                                    <path
                                        d="m52 33h-46c-1.105 0-2 .895-2 2s.895 2 2 2h46c1.105 0 2-.895 2-2s-.895-2-2-2z"/>
                                </g>
                                <g>
                                    <path
                                        d="m17.32 19.01c3.47-.36 5.83-1.97 7.02-4.79-5.84.54-10.81 2.08-13.91 4.19 1.501.502 3.077.745 4.66.72.745-.002 1.489-.042 2.23-.12z"/>
                                </g>
                                <g>
                                    <path
                                        d="m40.68 19.01c.741.078 1.485.118 2.23.12 1.583.025 3.159-.218 4.66-.72-3.1-2.11-8.08-3.66-13.92-4.19 1.19 2.82 3.56 4.43 7.03 4.79z"/>
                                </g>
                                <g>
                                    <path
                                        d="m56.73 6c-2.87 1-3.83 5-3.83 5s-3.82 1-3.82 3 3.82 3 3.82 3c-.892 1.275-2.131 2.268-3.57 2.86-2.794 1.183-5.858 1.577-8.86 1.14-1.848-.148-3.63-.749-5.19-1.75-1.827-1.245-3.174-3.076-3.82-5.19-.326-.989-.512-2.019-.55-3.06 0 0 4.78-1 4.78-3s-3.82-3-3.82-3 0-4-2.87-5c-2.87 1-2.87 5-2.87 5s-3.82 1-3.82 3 4.78 3 4.78 3c-.038 1.041-.224 2.071-.55 3.06-.88 2.71-3.15 6.33-9.01 6.94-3.002.437-6.066.043-8.86-1.14-1.439-.592-2.678-1.585-3.57-2.86 0 0 3.82-1 3.82-3s-3.82-3-3.82-3-.96-4-3.83-5c-.98-.34-1.24.59-1.26 1.37.03 2.268.312 4.525.84 6.73.65 3.38 1.437 6.733 2.36 10.06.625 2.349 1.403 4.654 2.33 6.9.15-.04.305-.06.46-.06h46c.155 0 .31.02.46.06.927-2.246 1.705-4.551 2.33-6.9.93-3.32 1.717-6.673 2.36-10.06.528-2.205.81-4.462.84-6.73-.02-.78-.28-1.71-1.26-1.37z"/>
                                </g>
                                <path
                                    d="m6 39v5h46v-5zm7 3.5c-.276 0-.5-.225-.5-.5 0-.276.224-.501.5-.501s.5.225.5.501c0 .275-.224.5-.5.5zm8 0c-.276 0-.5-.225-.5-.5 0-.276.224-.501.5-.501s.5.225.5.501c0 .275-.224.5-.5.5zm8 0c-.276 0-.5-.225-.5-.5 0-.276.225-.501.5-.501s.5.225.5.501c0 .275-.224.5-.5.5zm8 0c-.275 0-.5-.225-.5-.5 0-.276.225-.501.5-.501.276 0 .501.225.501.501 0 .275-.225.5-.501.5zm8 0c-.275 0-.5-.225-.5-.5 0-.276.225-.501.5-.501s.5.225.5.501c0 .275-.225.5-.5.5z"/>
                            </g>
                        </svg>
                        <span className="header__logo">Wilkinson</span>
                    </div>
                </a>
                <div className="header__buttons-container">
                    <span className="header__products">Products</span>
                    <span className="header__about">About</span>
                    <span className="header__contact">Contact</span>
                    {user.email ?
                        <div
                            className="header__user-wrapper"
                            onClick={() => {
                                toggleUserProfileMenu();
                                document
                                    .getElementsByClassName('header__arrow-down')[0]
                                    .classList
                                    .toggle('active');
                            }}
                        >
                            <Avatar
                                alt={user.firstName + " " + user.lastName}
                                className="header__user"
                            >
                                {user.firstName.charAt(0)}
                            </Avatar>
                            <i className="header__arrow-down"></i>
                        </div>
                        :
                        <>
                            <a
                                href="/login"
                                className="header__btn header__signin-btn"
                            >
                                Sign In
                            </a>
                            <a
                                href="/registration"
                                className="header__btn header__signout-btn"
                            >
                                Sign Up
                            </a>
                        </>
                    }
                    <MenuIcon
                        className="header__menu-icon"
                        onClick={setMenuState}
                    />
                </div>
            </header>
        </>
    );
}

export default Header;
