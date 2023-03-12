const Produto = ({ id, img, nome, preco }) => {
    return (
        <>
            <div className="item" data-id={id}>
                <div className="container-img">
                    <img src={img} alt={nome} />
                </div>
                <p className="nome-produto">{nome}</p>
                <p className="preco-produto">{preco}</p>
                <a href="produto.html" className="link-produto">
                    Ver produto
                </a>
            </div>
        </>
    );
};
export default Produto;
