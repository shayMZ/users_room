import React, {useEffect, useState} from "react";
import UserInfo from "./userInfo";
import User from "../data/User";
import AppData from "../data/AppData";

function Users(props: { roomId: number, onChangeRoomStatus(status: boolean): void }) {
    const [users, setItems] = useState(Array<User>());

    function checkRoomStatus(filtered_users: User[]) {
        if (filtered_users.every(u => u.isAdmin)) {
            props.onChangeRoomStatus(false);
        }
    }

    useEffect(() => {
        const filtered_users = AppData.users_list.filter(user => user.roomId === props.roomId);
        setItems(filtered_users);
        checkRoomStatus(filtered_users);
    }, [])

    function onDataChanged(userId: number) {
        const user = users.find(u => u.id === userId);
        if (validateRemoveMembers(user)) {
            const idx = AppData.users_list.findIndex(c => c.id === userId);
            AppData.users_list.splice(idx, 1);
            const filtered_users = AppData.users_list.filter(user => user.roomId === props.roomId);
            setItems(filtered_users);
            checkRoomStatus(filtered_users);
        } else {
            alert('Must be one admin in a room');
        }
    }

    /*
    Allow deleting user only if there is at least one admin in the room
    or the removed user is not admin
     */
    function validateRemoveMembers(user: User | undefined) {
        if (user != undefined) {
            return users.filter(u => u.isAdmin).length > 1 ||
                !user.isAdmin;
        }
    }

    return <div>
        <b>users in current room</b>
        {users.map((user_item: User, idx) => {
            return <UserInfo onRemoveUser={onDataChanged} key={idx} user={user_item}/>
        })}
    </div>
}

export default Users;
