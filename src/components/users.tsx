import React, {useEffect, useState} from "react";
import UserInfo from "./userInfo";
import User from "../data/User";
import AppData from "../data/AppData";

function Users(props: { roomId: number }) {
    const [users, setItems] = useState(Array<User>());
    useEffect(() => {
        setItems(AppData.users_list.filter(user => user.roomId === props.roomId));
    }, [])

    function onDataChanged(userId: number) {
        const user = users.find(u => u.id === userId);
        if (validateRemoveMembers(user)) {
            const idx = AppData.users_list.findIndex(c => c.id === userId);
            AppData.users_list.splice(idx, 1);
            setItems(AppData.users_list.filter(user => user.roomId === props.roomId));
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
