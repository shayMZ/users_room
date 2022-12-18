import React, {useEffect, useState} from 'react';
import './App.css';
import Rooms from "./components/rooms";
import User from "./data/User";
import AppData from "./data/AppData";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch('https://61f992ba69307000176f7330.mockapi.io/users')
            .then(res => res.json()).then(users_response => {
            AppData.users_list = users_response;
            setIsLoaded(true);
        }, (error) => {
            setError(error);
            setIsLoaded(true);
        })
    }, [])
    if (error) {
        return <div>Error: {error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Assignment</h1>
                    <Rooms/>
                </header>
            </div>
        );
    }
}

export default App;
