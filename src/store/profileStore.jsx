import { makeAutoObservable } from "mobx";

class UserStore {
    userProfile = null;

    constructor() {
        makeAutoObservable(this);
        const storedProfile = localStorage.getItem("userProfile");
        if (storedProfile) {
            this.userProfile = JSON.parse(storedProfile);
        }
    }

    setUserProfile(profile) {
        this.userProfile = profile;
        localStorage.setItem("userProfile", JSON.stringify(profile));
    }

    deleteUserProfile() {
        this.userProfile = null;
        localStorage.removeItem("userProfile");
    }

    saveUserProfile() {
        if (this.userProfile) {
            localStorage.setItem("userProfile", JSON.stringify(this.userProfile));
        }
    }

    updateAvatar(avatarUrl) {
        if (this.userProfile) {
            this.userProfile.avatar = avatarUrl;
            this.saveUserProfile();
        } else {
            // Optionally handle the case where there is no user profile loaded
            console.error("Cannot update avatar, no user profile is loaded.");
        }
    }


    getUserProfile() {
        const storedProfile = localStorage.getItem("userProfile");
        return JSON.parse(storedProfile);
    }
}

export const userStore = new UserStore();
