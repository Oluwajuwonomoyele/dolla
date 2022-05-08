import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signin" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
