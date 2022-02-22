import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { userLastName,userName,isRegistered} from "../Components/Atom/IsRegistered";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";
import "../Registration/Registration.css"



const Registration = (props) => {

    const nameReg = /^[a-z ,.'-]+$/i;
    const passReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/;

    const ageReg = /^(1[89]|[2-9]\d)$/;
    const emailReg = /^\S+\@\gmail|mail\.com$|\.ru$|\.org$|.am$/;
    
    const [isUserRegistered,setUserRegistered] = useRecoilState(isRegistered);
    const [userFirstName,setUserFirstName] = useRecoilState(userName);
    const [userSurename,setUserSurename] = useRecoilState(userLastName);



    const firstName = useRef(null);
    const lastName = useRef(null);
    const age = useRef(null);
    const phoneNum = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const passwordRepeat = useRef(null);

    //   
    const registr = () => {
       if(nameReg.test(firstName.current.value) && nameReg.test(lastName.current.value) && ageReg.test(age.current.value) && emailReg.test(email.current.value) && passReg.test(password.current.value) && (password.current.value == passwordRepeat.current.value)){
           setUserRegistered(true);
           setUserFirstName(firstName.current.value);
           setUserSurename(lastName.current.value);
       }
       else{
           alert("Complete Your Registration Correctly")
       }
    }



    return(
    <form action="#" className="regform">
        <Input refs={firstName} type="text" className="fname" placeholder="Input Your Name"/>
        <Input refs={lastName} type="text" className="lname" placeholder="Input Your Last Name"/>
        <Input refs={age} type="number" className="age" placeholder="Input Your Age"/>
        <Input refs={phoneNum} type="tel" pattern="(([+374]{4}|[0]{1}))?([1-9]{2})(\d{6})" className="phone" placeholder="Input Your Phone Number"/>
        <Input refs={email} type="email" className="email" placeholder="Input Your Email"/>
        <Input refs={password} type="password" className="lname" placeholder="Password"/>
        <Input refs={passwordRepeat} type="password" className="lname" placeholder="Repeat Password"/>
        <Button className="registr" onClick={registr}>Registration</Button>
    </form>
    )
    
}

export default Registration;