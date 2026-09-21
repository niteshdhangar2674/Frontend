import { UseAuth } from "../AuthContext/AuthContext";
import { useContext } from "react";
// import { AuthContext } from "../AuthContext/AuthContext";

function UserProfile() {
    const { user, login, logout } = UseAuth();

    if (!user) {
        return (
            <div>
                <p>you are outout!</p>
                <button onClick={login}>login</button>
            </div>
        )
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.role}</h1>

            <button onClick={logout}>logout</button>
        </div>
    )
}
export default UserProfile;