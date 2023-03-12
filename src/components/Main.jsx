import Categoria from "./Categoria";
import { categorias, filtrarPorCategoria } from "../assets/data";

function Main() {
    return (
        <>
            <main>
                <div className="container container-section-items">
                    {categorias.map((categoria, index) => (
                        <Categoria
                            key={index}
                            categoria={categoria}
                            produtos={filtrarPorCategoria(categoria)}
                        ></Categoria>
                    ))}
                </div>
            </main>
        </>
    );
}
export default Main;
