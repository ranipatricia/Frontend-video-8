import Header from "../komponen/Header";
import Layout from "../komponen/Layout";
import Sidebar from "../komponen/Sidebar";
import Utama from "../komponen/Utama";
import Navbar from "../komponen/Navbar";
import React from "react";
import {Link, useNavigate} from "react-router-dom";  

function Home() {
    const navigate = useNavigate;
    return ( 
        <>
            <button onClick={() => navigate("landingpage")}>
                Landing Pages
            </button>
            <Layout>
                <Header/>
                <Link to="/Landingpages" className="mb-8">
                    Landing Pages
                </Link>
                <Utama/>
            </Layout>  
        </>
     );
}

export default Home;

