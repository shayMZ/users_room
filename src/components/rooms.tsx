import React, {useEffect, useState} from "react";
import Room from "../data/Room";
import RoomData from "./roomData";

function Rooms() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://61f992ba69307000176f7330.mockapi.io/rooms')
            .then(res => res.json()).then(rooms_response => {
            setItems(rooms_response);
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
        return <div>
            {items.map((room: Room) => {
                return <RoomData key={room.id} room={room}/>
            })}
        </div>
    }
}

export default Rooms;
