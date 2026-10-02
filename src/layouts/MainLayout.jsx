import { Outlet } from "react-router-dom";
import '../App.css'
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";

function MainLayout() {
    return (
        <div className="app-layout">

            <Navbar />

            <main className="app-content">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}

export default MainLayout;