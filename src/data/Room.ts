import User from "./User";

class Room {
    id: number;
    isActive: boolean;
    users: Array<User>;

    constructor(roomId: number) {
        this.id = roomId;
        this.isActive = false;
        this.users = new Array<User>();
    }

}

export default Room;
