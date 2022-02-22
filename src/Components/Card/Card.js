import { useRef, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "../Card/Card.css"


const Card = (props) => {
    
    const cvvReg = /^[0-9]{3}$/
    const bankReg = /^[2-6]+[0-9]{11,}$/
    const cardNameReg = /^[a-zA-Z]+\ [a-zA-Z]{6,}$/
    const monthReg = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
    

    const cardNameRef = useRef(null);
    const cardRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);
    const cvvRef = useRef(null);

    



    const upperCase = () => {
        cardNameRef.current.value = cardNameRef.current.value.toUpperCase();
    }

    
    const cehckBankCard = (event) =>{
        event.preventDefault();
        if(cvvReg.test(cvvRef.current.value) && bankReg.test(cardRef.current.value) && cardNameReg.test(cardNameRef.current.value) && monthReg.test(monthRef.current.value + "/" + yearRef.current.value)){
            setFirstCardName(cardNameRef.current.value);
            setFirstCardNumbers(cardRef.current.value);
            setFirstCard(true);
            setSecondForm(true);
            setFormNone("formNone");
        }
        else{
            alert("Input Valid Card")
        }
    }

    const cehckSecondBankCard = (event) => {
        event.preventDefault();
        if(cvvReg.test(cvvRef.current.value) && bankReg.test(cardRef.current.value) && cardNameReg.test(cardNameRef.current.value) && monthReg.test(monthRef.current.value + "/" + yearRef.current.value)){
            setSecFormNone("secFormNone");
            setSecondCardName(cardNameRef.current.value);
            setSecondCardNumbers(cardRef.current.value);
            setSecondCard(true);
        }
        else{
           alert("Input Valid Card")
        }
    }
        const [secondForm,setSecondForm] = useState(false);
        const [btnClass,setBtnClass] = useState("openForm");
        const [isClicked, setIsclicked] = useState(false);
        const [formNone, setFormNone] = useState("");
        const [secFormNone,setSecFormNone] = useState(""); 
        const [firstCardNumbers,setFirstCardNumbers] = useState(0);
        const [firstCardName,setFirstCardName] = useState("");
        const [firstCard,setFirstCard] = useState(false);
        const [secondCardNumbers,setSecondCardNumbers] = useState(0);
        const [secondCardName,setSecondCardName] = useState("");
        const [secondCard,setSecondCard] = useState(false);

        const openModal = () => {
            setIsclicked(true);
            setBtnClass("btnNone");
        
        }

        return( 
        <div>
          { isClicked &&  <form className={formNone} action="#">
          <Input inputmode="numeric" pattern="[0-9\s]{11,19}" maxlength="19" type="tel" refs={cardRef} placeholder="XXXX XXXX XXXX XXXX" />
          <input onKeyUp={upperCase} ref={cardNameRef} type="text" placeholder="JOHN SNOW"/>
          <div className="dateCvv">
              <Input type="text" pattern="[0-9]{2}" maxlength="2" className="mm" refs={monthRef} placeholder="MM"/>
              <Input type="text" pattern="[0-9]{2}" maxlength="2" className="yy" refs={yearRef} placeholder="YY"/>
              <Input type="password" maxlength="3" refs={cvvRef} placeholder="***"/>
          </div>
          
          <Button onClick={cehckBankCard}>Send</Button>
      </form> }
      <Button className={btnClass} onClick={openModal}> Add Card + </Button>
      {firstCard && <div className="cards">
          <div className="cardImg">
              <img src="../../../Images/images.png" width="100px"/>
          </div>
          <div className="personalInfo">
              <h2>{firstCardNumbers}</h2>
              <h2>{firstCardName}</h2>
          </div>
          
          </div>}
        {secondForm && <form className={secFormNone} action="#">
          <Input inputmode="numeric" pattern="[0-9\s]{11,19}" maxlength="19" type="tel" refs={cardRef} placeholder="XXXX XXXX XXXX XXXX" />
          <input onKeyUp={upperCase} ref={cardNameRef} type="text" placeholder="JOHN SNOW"/>
          <div className="dateCvv">
              <Input type="text" pattern="[0-9]{2}" maxlength="2" className="mm" refs={monthRef} placeholder="MM"/>
              <Input type="text" pattern="[0-9]{2}" maxlength="2" className="yy" refs={yearRef} placeholder="YY"/>
              <Input type="password" maxlength="3" refs={cvvRef} placeholder="***"/>
          </div>
          
          <Button onClick={cehckSecondBankCard}>Send</Button>
      </form>}
      
      {secondCard && <div className="cards">
          <div className="cardImg">
              <img src="../../../Images/images.png" width="100px"/>
          </div>
          <div className="personalInfo">
              <h2>{secondCardNumbers}</h2>
              <h2>{secondCardName}</h2>
          </div>
          
          </div>}


      </div>
         )

         
    }

   

export default Card;