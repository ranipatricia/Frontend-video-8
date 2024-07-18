import viteLogo from '/vite.svg'

const Utama = () => {
    return ( 
        <>
            <h2>Belajar React</h2>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
            <p>contoh kecil</p>
            <div>
                <h1 style={{color: 'blue'}}>A Blue Heading</h1>
                <p style={{color: 'red'}}>A red paragraph.</p>
            </div>

        </>
     );
}
 
export default Utama;