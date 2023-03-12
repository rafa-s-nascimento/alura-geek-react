import ContatoList from "./ContatoList";
import Form from "./Form";
import Rodape from "./Rodape";

function Footer() {
    return (
        <>
            <footer>
                <div className="info-contato">
                    <div className="container">
                        <ContatoList></ContatoList>
                        <Form></Form>
                    </div>
                </div>
                <Rodape></Rodape>
            </footer>
        </>
    );
}

export default Footer;
