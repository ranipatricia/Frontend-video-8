import { useEffect, useState } from "react";
import apis from "../../api/mahasiswa";

const GetMahasiswa = () => {
    const [mahasiswa, setMahasiswa] = useState([]);
    const [error, setError] = useState(null);
    const [nim, setNim] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await apis.getAllMahasiswa();
                if (nim) {
                    response = await apis.getMahasiswaByNim(nim);
                }

                setMahasiswa(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [nim])

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <>
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold mt-2">Daftar Mahasiswa</h1>
                <div>
                    <label htmlFor="deafult-search" className="mb-2 text-sm font-medium text-gray-900
                                    sr-only dark:text-white"
                    >Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input type="search" value={nim} className="block w-full p-4 pl-10
                                    text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                                    focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Cari Nim" onChange={(e) => { setNim(e.target.value) }}/>
                    </div>
                </div>
            </div>
                <label className="min-w-full divide-gray-200 mt-4">
                    <thead className="bg-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white
                                        upperCase tracking-wider">
                                NIM           
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white
                                        upperCase tracking-wider">
                                NAMA           
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white
                                        upperCase tracking-wider">
                                ANGKATAN          
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white
                                        upperCase tracking-wider">
                                PRODI           
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-gray-200">
                        {mahasiswa.map((mhs) => (
                            <tr key={mhs.nim} className="bg-white dark:bg-gray-600 hover:bg-gray50
                                dark:hover:bg-gray-500 dark:text-white">
                                    <td className="px-6 py-4 font-sm whitespace-nowrap">{mhs.nim}</td>
                                    <td className="px-6 py-4 font-sm whitespace-nowrap">{mhs.nama}</td>
                                    <td className="px-6 py-4 font-sm whitespace-nowrap">{mhs.angkatan}</td>
                                    <td className="px-6 py-4 font-sm whitespace-nowrap">{mhs.prodi}</td>
                                </tr>
                        ))}
                    </tbody>
                </label>
        </>
    );
}

export default GetMahasiswa;