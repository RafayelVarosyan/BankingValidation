import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";
import Logo from "../Components/Logo/Logo";
import "../MainPage/Main.css";
import Registration from "../Registration/Registration";

const Main = (props) => {



    return(
        <section id="head">
            <div className="header">
                <div className="logo">
                    <Logo/>
                </div>
                
                {/* <div className="login"> */}
                    {/* <Input type="email" className="login_input" placeholder="example@gmail.com" />
                    <Input type="password" className="login_input" placeholder="**********" /> */}
                    {/* <Button className="log" >Log In</Button> */}
                {/* </div> */}
                
            </div>
            
            <div className="container">
                <div className="view">
                    <h2>Our Bank Is Connecting All Over The World</h2>
                </div>
                <div className="registration">
                        <Registration />
                </div>
            </div>
            
        </section>
    )






}

export default Main;