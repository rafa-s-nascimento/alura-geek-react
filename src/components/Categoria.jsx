import Produto from "./Produto";
import TituloCategoria from "./TituloCategoria";

const Categoria = ({ categoria, produtos }) => {
    return (
        <>
            <TituloCategoria categoria={categoria}></TituloCategoria>

            <div className="container-item">
                {produtos.map(({ id, img, nome, preco }) => (
                    <Produto
                        key={id}
                        nome={nome}
                        preco={preco}
                        img={img}
                    ></Produto>
                ))}
            </div>
        </>
    );
};
export default Categoria;
