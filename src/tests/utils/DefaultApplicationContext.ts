import {Roles} from "../../contexts/Providers.tsx";

export const DefaultApplicationContext = {
    user:"testUser",
    setUser:()=>{},
    term: 10,
    setTerm:()=>{},
    role: Roles.Devs,
    setRole:()=>{},
    age: 30,
    setAge:()=>{}
}