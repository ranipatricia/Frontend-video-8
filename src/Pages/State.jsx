import { useState } from "react";

function State() {
    const [bilangan1, setBilangan1] = useState(0)
    const [bilangan2, setBilangan2] = useState(0)
    const [hasil, setHasil] = useState(0)

    const penambahan = () => {
        setHasil(bilangan1 + bilangan2);
    }
    const pengurangan = () => {
        setHasil(bilangan1 - bilangan2);
    }
    const perkalian = () => {
        setHasil(bilangan1 * bilangan2);
    }
    return ( 
        <>
            <div>
                <label>Bilangan 1 : </label>
                <input 
                    type="text" 
                    value={bilangan1}
                    onChange={(e) => setBilangan1(Number(e.target.value))}/>
            </div>
            <div>
                <label>Bilangan 2 : </label>
                <input 
                    type="text" 
                    value={bilangan2}
                    onChange={(e) => setBilangan2(Number(e.target.value))}/>
            </div>
            <div>
                <p>Hasil: {hasil}</p>
            </div>

            <button type='button' className='mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' 
                onClick={penambahan}>
                   Tambah
            </button>
            <button type='button' className='mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' 
                onClick={pengurangan}>
                   Kurang
            </button>
            <button type='button' className='mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' 
                onClick={perkalian}>
                   Kali
            </button>
        </>
    );
}

export default State;