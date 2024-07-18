import React, {useContext} from "react";
import { MyContext } from "./ReactContext";

const ContextComp2 = () => {
    const [data, setData] = useContext(MyContext)
    const harga = 10000
    return ( 
        <div>
            <div>
                {harga} x 2
                <p>
                    <button
                        className="bg-blue-700 hover:bg-blue-900 text-white font-bold
                        py-2 px-4 rounded-lg text 3x1"
                        onClick={() => setData(data + (harga * 2))}
                    >
                        +
                    </button>
                </p>
            </div>
        </div>
     );
}

export default ContextComp2;