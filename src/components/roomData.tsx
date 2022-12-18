import Room from "../data/Room";
import RoomStatus from "./roomStatus";
import Users from "./users";
import React from "react";

function RoomData(prop: { room: Room }) {
    const room = prop.room;
    return <div className={'roomInfo'} key={room.id}>
        <div>{room.id}</div>
        <RoomStatus id={room.id} status={room.isActive}/>
        <div>{room.users?.length}</div>
        <Users roomId={room.id}/>
    </div>
}

export default RoomData;
