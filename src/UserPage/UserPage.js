import { useRecoilValue } from "recoil";
import {userLastName,userName} from "../Components/Atom/IsRegistered";
import Card from "../Components/Card/Card";
import Logo from "../Components/Logo/Logo";
import "../UserPage/UserPage.css"
const UserPage = (props) => {

    const userFirstName = useRecoilValue(userName);
    const userSurename = useRecoilValue(userLastName);

    return (
        <section className="userPage">
                <div className="header">
                <div className="logo">
                    <Logo/>
                    <h2>Armenian Bank</h2>
                </div>
                
                <div className="userInfo">
                    <h2>{userFirstName}</h2>
                    <h2>{userSurename}</h2>
                    <img src="../../../Images/user.png" width="50px"/>
                </div>
            </div>
            <div className="cont">
                <Card/>
            </div>
            
        </section>
        
    )
}

export default UserPage;