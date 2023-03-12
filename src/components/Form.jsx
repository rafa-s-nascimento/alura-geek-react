const Form = () => {
    return (
        <>
            <div className="container-info-form">
                <p className="bold titulo">fale conosco</p>
                <form action="#">
                    <div className="single-input">
                        <input type="text" id="name" maxLength="50" required />
                        <label for="name">Nome</label>
                    </div>

                    <textarea
                        id="message"
                        placeholder="Escreva sua mensagem"
                        maxLength="200"
                    ></textarea>

                    <button className="btn" type="submit">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </>
    );
};
export default Form;
