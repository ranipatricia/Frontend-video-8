import { useContext } from "react";
import {MyContext} from './ReactContext';

const ContextComp1 = () => {
    const [data, setData] = useContext(MyContext)
    const harga = 5000
    return (
        <div>
            <div>
                {harga} x 5
                <p>
                    <button
                        className="bg-blue-700 hovrt:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg text-3xl"
                        onClick={() => setData(data + (harga * 5))}
                        >
                            +
                    </button>
                </p>
            </div>
        </div>
    );
};

export default ContextComp1;