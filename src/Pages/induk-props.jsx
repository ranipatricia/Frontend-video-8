/*import Menu from "../componen/Menu";*/
import Props from "../componen/Props";
/*import Navbar from "../componen/Navbar";
import Sidebar from "../componen/Sidebar";
import Layout from "../componen/Layout";*/

const IndukProps = () => {
    const pesanan ={"meja" : 1,
                    "makanan" : "Krauwan",
                    "minuman" : "Es Jeruk",               
                    "pelanggan" : true};
    const pesanan2 ={"meja" : 2,
                    "makanan" : "Krauwan",
                    "minuman" : "Es Jeruk",               
                    "pelanggan" : false};
    const pesanan3 ={"makanan" : "Nasi Kuning",
                    "minuman" : "Es Teh",               
                    "pelanggan" : true}; 
    const menuMakanan = [   "Nasi mawut", 
                            "Krawuan", 
                            "Nasi Campur", 
                            "Nasi Kuning"
                        ];
    const menuMinuman = [   "Teh Panas", 
                            "Es Jeruk", 
                            "Es Campur", 
                            "Es Teh"];
    return ( 
         <>
            {/* <Navbar/>
                <h1 className="text-3xl font-bold underline text-orange-500">Hello world!</h1>
            <div className="mx-8">
            <Daftar DaftarBuku={DaftarBuku} DaftarBuku2={DaftarBuku2}/>
            <p>ini menggunakan children</p> */}
            
            <hr/>
            {/* <Props DaftarSiswa={DaftarSiswa}/>
            <hr/>
            <Props DaftarSiswa={DaftarSiswa2}/>
            <hr/>
            <Props DaftarSiswa={DaftarSiswa3}/>
            <Button onClick={handleClik}/> */}
            <Layout>
                <Navbar/>
                <h1 className="text-3xl font-bold underline text-orange-500">Hello world!</h1>
                <div className="mx-8">
                <Menu menuMakanan={menuMakanan} menuMinuman={menuMinuman} />
                </div>
                <hr />
                <Sidebar />
                <Props pesanan ={pesanan} />
                <hr />
                <Props pesanan ={pesanan2} />
                <hr />
                <Props pesanan ={pesanan3} />
            </Layout>

        </>
     );
}
 
export default IndukProps;