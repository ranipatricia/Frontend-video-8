import LandingPage from "../komponen/LandingPage";
import Utama from "../komponen/Utama";
import {Link, useNavigate,} from "react-router-dom";

function Landing() {
    const navigate = useNavigate
    return ( 
        <>
            <LandingPage>
                <Utama />
                    <Link to='/'>
                        Go to Home
                    </Link>
                    <button 
                    type="button"
                    onClick={() => navigate('/')} 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Default
                </button>
            </LandingPage>
        </>
     );
}

export default Landing;