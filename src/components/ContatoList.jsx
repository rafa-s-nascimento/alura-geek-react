import Logo from "../assets/img/Logo.png";

const ContatoList = () => {
    return (
        <>
            <div className="container-info-list">
                <img src={Logo} alt="" />
                <ul>
                    <li>
                        <a href="#">Quem somos nós</a>
                    </li>
                    <li>
                        <a href="#">Politica de privacidade</a>
                    </li>
                    <li>
                        <a href="#">Programa de fidelidade</a>
                    </li>
                    <li>
                        <a href="#">Nossas lojas</a>
                    </li>
                    <li>
                        <a href="#">Quero ser franqueado</a>
                    </li>
                    <li>
                        <a href="#">Anuncie aqui</a>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default ContatoList;
