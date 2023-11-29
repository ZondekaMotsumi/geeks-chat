import React from "react";
import { Button} from "react-bootstrap";
import {auth} from '../../services/firebase'
import SearchBar from "../SearchBar/SearchBar"
import { useUserAuth } from "../../context/UserAuthContext";

const ProfileView = () => {
    const { logOut } = useUserAuth();

    const avatar = () => {

    }
    const handleLogout = async () => {
        try {
            await logOut();
            console.log("User logged out");
        } catch (error) {
            console.error("Logout error", error);
        }
    };

    return (
        <div className="profile-view">
            <div className="user-avatar">
            <img alt="User Avatar" src={avatar()} />
            </div>
            <SearchBar />
            <Button className="button-logout" onClick={handleLogout} color="inherit">
                Logout
            </Button>
        </div>
    );
};

export default ProfileView;
