function Props(props) {
    const {pelanggan, meja, makanan, minuman} = props.pesanan;
    return ( 
        <>
            {pelanggan ?
            <div>
                <h3>Pesan dari meja : {meja}</h3>
                <p>Makanan : {makanan}</p>
                <p>Minuman : {minuman}</p>    
            </div>:
            <p>Anda bukan pelanggan</p>
            }
        </>
     );
}

export default Props;