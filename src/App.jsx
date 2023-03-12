import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    );
}

export default App;
