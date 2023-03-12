const TituloCategoria = ({ categoria }) => {
    return (
        <>
            <div className="titulo-section-items">
                <h3 className="titulo" id={categoria}>
                    {categoria}
                </h3>
                <a href="produtos.html">
                    Ver tudo<i className="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>
        </>
    );
};
export default TituloCategoria;
