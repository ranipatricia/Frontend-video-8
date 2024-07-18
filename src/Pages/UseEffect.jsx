import { useEffect } from "react";
import { useState } from "react";
import Animasi from "./animasi";
import FetchApi from "./fetch";


function UseEffect() {
    const [harga, setHarga] = useState(10000)
    const [qty, setQty] = useState(2)
    const [ subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        setSubTotal(harga * qty) //rerending effect
    }, []);

    return ( 
        <>
            <div className="font-bold font-medium text-xl">
                {subTotal}
            </div>
            <hr />
            <Animasi />
            <FetchApi />
             
            
        </>
    );
}

export default UseEffect;