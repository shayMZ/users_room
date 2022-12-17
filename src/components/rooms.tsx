import React, {useEffect, useState} from "react";
import Room from "../data/Room";
import RoomStatus from "./roomStatus";
import Users from "./users";

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
                return <div className={'roomInfo'} key={room.id}>
                    <div>{room.id}</div>
                    <RoomStatus id={room.id} status={room.isActive}/>
                    <div>{room.users?.length}</div>
                    <Users roomId={room.id} />
                </div>
            })}
        </div>
    }
}

export default Rooms;
