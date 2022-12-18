import Room from "../data/Room";
import RoomStatus from "./roomStatus";
import Users from "./users";
import React, {useEffect, useState} from "react";

function RoomData(prop: { room: Room }) {
    const room = prop.room;
    const [active, setStatus] = useState(false);
    useEffect(() => {
        setStatus(room.isActive);
    }, [])

    function onChangeRoomStatus(status: boolean) {
        if (active) {
            console.log('setStatus', status);
            setStatus(status);
        }
    }

    return <div className={'roomInfo'} key={room.id}>
        <div>{room.id}</div>
        <RoomStatus id={room.id} status={active}/>
        <div>{room.users?.length}</div>
        <Users onChangeRoomStatus={onChangeRoomStatus} roomId={room.id}/>
    </div>
}

export default RoomData;
