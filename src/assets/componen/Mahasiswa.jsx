// function Mahasiswa({absen}) {
//     return ( 
//         <div>
//             <h3>Absen gengs</h3>
//             {/* <p>{mahasiswa.absen}</p> */}
//             <p>{absen}</p> 
//         </div>
//      );
// }

// export default Mahasiswa;

// function Mahasiswa({nama, nim, matkul}) {
//     return ( 
//         <div>
//             <h3>Mahasiswa bernama: {nama}</h3>
//             <p>Mahasiswa dengan nim: {nim}</p>
//             <p>Matkul: {matkul}</p>
//         </div>
//      );
// }

// export default Mahasiswa;

// function Mahasiswa(mahasiswa) {
//     const{nama, nim, matkul, absen} = mahasiswa;
//     return ( 
//         <>
//             {absen?
//                 <div>
//                     <h3>Mahasiswa bernama: {nama}</h3>
//                     <p>Mahasiswa dengan nim: {nim}</p>
//                     <p>Matkul: {matkul}</p>
//                 </div>
//                 :
//                 <p>mahasiswa tidak masuk</p>
//             }
//         </>
//      );
// }

// export default Mahasiswa;

// function Mahasiswa(mahasiswa) {
//     const{nama, nim, semester, matkul, absen} = mahasiswa.lulus;
//     return ( 
//         <>
//             {absen?
//                 <div>
//                     <h3>Mahasiswa bernama: {nama}</h3>
//                     <p>Mahasiswa dengan nim: {nim}</p>
//                     <p>Semester: {semester}</p>
//                     <p>Matkul: {matkul}</p>
//                 </div>
//                 :
//                 <p>mahasiswa tidak masuk</p>
//             }
//         </>
//      );
// }

// export default Mahasiswa;

// function Mahasiswa(mahasiswa) {
//     return ( 
//         <div>
//             <p>jurusan: {mahasiswa.data.jurusan}</p>
//             <p>kelas: {mahasiswa.data.kelas}</p>
//         </div>
//      );
// }

// export default Mahasiswa;

// //function button
// function Button(mahasiswa) {
//     return <button onClick={mahasiswa.onClick}>Klik Tautan Ini</button>
// }

// export default Button;

//function edit

// function Mahasiswa(mahasiswa) {
//     return ( 
//         <div>
//             <p>jurusan: {mahasiswa.data.jurusan}</p>
//             <p>kelas: {mahasiswa.data.kelas}</p>
//         </div>
//      );
// }

// function Button(mahasiswa) {
//     function heandleClick() {
//         alert('Tombol diklik');
//     }

//     return(
//         <div>
//             <div>
//                 <p>jurusan: {mahasiswa.data.jurusan}</p>
//                 <p>kelas: {mahasiswa.data.kelas}</p>
//             </div>
//             <button onClick={heandleClick}>Klik Disini</button>
//         </div>
//     );
// }
   
// export { Mahasiswa, Button};