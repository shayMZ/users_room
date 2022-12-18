class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    roomId: number;
    isAdmin: boolean;

    constructor(id: number, firstName: string, lastName: string, email: string, roomId: number, isAdmin: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAdmin = isAdmin;
        this.id = id;
        this.roomId = roomId;
    }
}

export default User;
