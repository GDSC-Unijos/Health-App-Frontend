import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home(){
    return(
        <main>
            <Navbar />
            <Header />
        </main>
    )
}