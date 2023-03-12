const Rodape = () => {
    return (
        <>
            <div className="rodape">
                <p>
                    Desenvolvido por Rafael Nascimento
                    <span id="data"> {new Date().getFullYear()}</span>
                </p>
                <div>
                    <a
                        href="https://github.com/Rafa-S-Nascimento"
                        target="_blank"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rafael-s-nascimento/"
                        target="_blank"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </>
    );
};
export default Rodape;
