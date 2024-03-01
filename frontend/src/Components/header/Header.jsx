import MainMenu from "./MainMenu";
import Logo from "./Logo";
import "../../../src/styles.css";

function Header() {
    return (
        <header className="main-header">
            <div className="content-wrapper">

                <Logo />
                <MainMenu />

            </div>
        </header>
    )
}


export default Header;
