import logo from "../assets/img/Logo.png";

const Topo = () => {
    return (
        <>
            <div className="topo">
                <div className="container">
                    <a href="index.html">
                        <img src={logo} alt="" className="logo" />
                    </a>
                    <div className="container-input">
                        <a href="login.html">
                            <button className="login-btn btn">Login</button>
                        </a>

                        <div>
                            <input
                                type="text"
                                maxLength="35"
                                placeholder="O que deseja encontrar?"
                            />
                            <button>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Topo;
