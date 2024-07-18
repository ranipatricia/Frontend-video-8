import { useEffect, useState } from "react";

const FetchApi = () => {
    const[data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4 mt-8">
            <h1 className="text-2xl font-bold my-4">Fetch Data</h1>
            <ul className="list-disc pl-4">
                {data.map((item) => (
                    <li key={item.id} className="mt-2">{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FetchApi;