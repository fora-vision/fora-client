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

    getUserProfile() {
        const storedProfile = localStorage.getItem("userProfile");
        return JSON.parse(storedProfile);
    }
}

export const userStore = new UserStore();
