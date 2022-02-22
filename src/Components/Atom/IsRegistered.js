import { atom } from "recoil";

const isRegistered = atom({
    key:"isRegistered",
    default:false
}) 

    const userName = atom({
        key:"userName",
        default:null
    })

    const userLastName = atom({
        key:"userLastName",
        default:null
    })

export{userLastName,userName,isRegistered};