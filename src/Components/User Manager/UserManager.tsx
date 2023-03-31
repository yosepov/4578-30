import ProfileMenu from "../Menu/Menu";
import {SignUp} from "../SignUp/SignUp";
import { Account } from "../Account/Account";

export const UserManager = () => {

let maker;

    if(localStorage.getItem(`LoggedIn`)){
        maker = <ProfileMenu/>
    }else{
        maker = <Account/>
    }

    return maker
}