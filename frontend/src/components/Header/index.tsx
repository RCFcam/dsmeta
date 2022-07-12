import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.linkedin.com/in/rodrigo-feijo-ab1ab633/overlay/contact-info/">@roderic.cf_DevSuperior </a>
                </p>
            </div>
        </header>
    )
}

export default Header;