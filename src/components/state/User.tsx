import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

const User = () => {
    const [user, setUser] = useState<null | AuthUser>(null)
    const handleLogin = () => {
        setUser({
            name: 'David',
            email: 'david@example.com'
        })
    }
    const handleLogout = () => {
        setUser(null);
    }
    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >Logout</button>
            <div>Username: {user?.name}</div>
            <div>email: {user?.email}</div>
        </div>
    );
}

export default User;