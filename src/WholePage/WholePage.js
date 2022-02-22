import { useRecoilValue } from "recoil";
import {isRegistered} from "../Components/Atom/IsRegistered";
import Main from "../MainPage/Main";
import UserPage from "../UserPage/UserPage";

const WholePage = (props) => {
      const isUserRegistered = useRecoilValue(isRegistered);

     return(
            <section>
                    {!isUserRegistered && <Main/>}
                    {isUserRegistered && <UserPage/>}
            </section> 
        
        )
}
export default WholePage;