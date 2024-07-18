import React, { useState } from "react";

const EventHandling = () => {
    const [name, setName] = useState('');
    const [alamat, setAlamat] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [gender, setGender] = useState('');
    const [chkAkademik, setChkAkademik] = useState(false);
    const [chkNonAkademik, setChkNonAkademik] = useState(false);
    const [masukan, setMasukan] = useState('')

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAlamatChange(event) {
        setAlamat(event.target.value);
    }

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
    }

    function handleGenderChange(event) {
        setGender(event.target.value);
    }

    function handleMasukanChange(event) {
        setMasukan(event.target.value);
    }

    return (
        <div className="container mt-4 ml-4">
            <h1 className="text-700 font-semibold">Form Pendaftaran</h1>

            <div className="mt-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Nama:
                </label>
                <input 
                    type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan nama anda"
                    value={name}
                    onChange={handleNameChange} 
                />
                <p className="text-gray-600 text-xs italic mt-2">Nama Anda : {name}</p>
            </div>

            <div className="mt-4">
                <label htmlFor="alamat" className="block text-gray-700 font-bold mb-2">
                    Alamat :
                </label>
                <input 
                    type="text" id="alamat" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Masukkan nama anda"
                    value={alamat}
                    onChange={handleAlamatChange} 
                />
                <p className="text-gray-600 text-xs italic mt-2">Alamat Anda : {alamat}</p>
            </div>

            <div className="mt-8">
                <span className="block text-gray-700 font-bold mb-2">Gender:</span>
                <div className="flex flex-row items-center">
                    <label className="inline-flex items-center mr-6">
                        <input 
                            type="radio"
                            className="form-radio text-indigo-600" 
                            name="gender"
                            value="Wanita"
                            checked={gender === 'Wanita'}
                            onChange={handleGenderChange}
                        />
                        <span className="ml-2">Wanita</span>
                    </label>
                    <label className="inline-flex items-center mr-6">
                        <input 
                            type="radio"
                            className="form-radio text-indigo-600" 
                            name="gender"
                            value="Pria"
                            checked={gender === 'Pria'}
                            onChange={handleGenderChange}
                        />
                        <span className="ml-2">Pria</span>
                    </label>
                </div>
                <p className="text-gray-600 text-xs italic mt-2">Gender : {gender}</p>
            </div>

            <div className="mt-8">
                <label htmlFor="program-studi" className="block text-gray-700 font-bold mb-2">
                    Program Studi:
                </label>
                <select 
                    id="program-studi"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                    <option value="S1 Sistem Informasi">S1 Sistem Infromasi</option>
                    <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
                </select>
                <p className="text-gray-600 text-xs italic mt-2">Prodi: {selectedOption}</p>
            </div>

            <div className="container mx-8 mt-4">
                <div className="w-full md:w-5/12">
                    <hr className="my-2"/>
                    <div className="mb-4">
                        <label htmlFor="" className="block text-sm font-medium">Prestasi</label><br />
                        <div className="flex items-center">
                            <input type="checkbox" name="chkAkademik" id="chkAkademik"
                                className="form-checkbox"
                                checked={chkAkademik}
                                onChange={(e) => setChkAkademik(e.target.checked)} />
                            <label htmlFor="chkAkademik" className="ml-2">Prestasi Akademik</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="chkNonAkademik" id="chkNonAkademik"
                                className="form-checkbox"
                                checked={chkNonAkademik}
                                onChange={(e) => setChkNonAkademik(e.target.checked)} />
                            <label htmlFor="chkNonAkademik" className="ml-2">Prestasi Non Akademik</label>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="masukan" className="block text-gray-700 font-bold mb-2">
                        Masukan :
                    </label>
                    <input 
                        type="text" id="masukan" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Masukkan masukan anda"
                        value={masukan}
                        onChange={handleMasukanChange} 
                    />
                    <p className="text-gray-600 text-xs italic mt-2">Masukan : {masukan}</p>
                </div> 

                <div className="w-full md:w-7/12 mt-6 md:mt-0">
                    <h3 className="text-2x1 font-semibold">Resume</h3>
                    <hr className="my-2"/>
                    <h5 className="mb-2">Nama : {name}</h5>
                    <hr />
                    <h5 className="mb-2">Alamat : {alamat}</h5>
                    <hr />
                    <h5 className="mb-2">Gender : {gender}</h5>
                    <hr />
                    <h5 className="mb-2">Program Studi : {selectedOption}</h5>
                    <hr />
                    <h5 className="mb-2">Prestasi Akademik : {chkAkademik ? " Ada" : " -"}</h5>
                    <h5 className="mb-2">Prestasi Non Akademik : {chkNonAkademik ? " Ada" : " -"}</h5>
                    <hr />
                    <h5 className="mb-2">Masukan : {masukan}</h5>
                </div>
            </div>
        </div>
    )
}
export default EventHandling;