import Link from "../Link";

import Logo from '../../assets/images/logo.png'
import "./styles.css"

function Header(){
    return (
        <header>
            <img className="logo" src={Logo} alt="Logo do dindin" />
            <nav>
                <Link texto="Cursos" redirect="/cursos" />
                <Link texto="Blog" redirect="/blog" />
                <Link texto="Contato" redirect="/contato" />
            </nav>
        </header>
    );
}

export default Header;