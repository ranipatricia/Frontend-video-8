const Body = () => {
    return ( 
        <div> Ini ialah Body
            <Button />
            <Button />
        </div>
     );
}

const Button = () => {
    return ( 
        <button style={{
            backgroundColor: 'orange',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '5px',
            margin: '7px'
        }}
        >Klik</button>
     )
}
 
export default Body;