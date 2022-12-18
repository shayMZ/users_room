import React from "react";
import User from "../data/User";
import AppData from "../data/AppData";

function UserInfo(prop: { user: User, onRemoveUser(userId: number): void }) {
    const user = prop.user;

    function onRemoveUserClicked() {
        prop.onRemoveUser(user.id);
    }

    return <div className={'user_item'}>
        <div>{user.firstName + ' ' + user.lastName}</div>
        <div>{user.isAdmin ? 'Admin' : 'User'}</div>
        <div>{user.email}</div>
        <button onClick={onRemoveUserClicked}>x</button>
    </div>
}

export default UserInfo;
