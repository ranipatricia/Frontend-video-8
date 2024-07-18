import {children} from "react";
function LandingPage({children}) {
    return ( 
        <>np
            <header className="Header fixed top-0 left-0 right-0 bg-blue-400 text-3x1">
                Header
            </header>
            <main className="mx-24 my-12">
                {children}
            </main>
            <footer className="fixed bottom-0 left-0 right bg-slate-300 text-x1">
                Footer
            </footer>
        </>
     );
}

export default LandingPage;