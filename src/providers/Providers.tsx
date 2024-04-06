import {createContext, useState} from "react";
import * as React from "react";

type Props = {
    children: React.ReactNode
}

type UserState = {
    user:string,
    setUser:(user:string)=>void
}

type TermState = {
    term:number,
    setTerm:(term:number)=>void
}

export enum Roles {
    PM = "PM",
    PD = "PD",
    Devs = "Devs"
}

type RoleState = {
    role: Roles,
    setRole:(role:Roles)=>void
}

type AgeState = {
    age: number,
    setAge:(age:number)=>void
}


export const UserContext = createContext<UserState | null>(null)
export const TermContext = createContext<TermState | null>(null)
export const RoleContext = createContext<RoleState | null>(null)
export const AgeContext = createContext<AgeState | null>(null)

export const Providers:React.FC<Props> = ({children}) => {

    const [user, setUser] = useState("user")
    const [term , setTerm] = useState(5)
    const [role, setRole] = useState<Roles>(Roles.Devs)
    const [age, setAge] = useState(33)

    return <>
    <UserContext.Provider value={{user,setUser}}>
        <TermContext.Provider value={{term,setTerm}}>
            <RoleContext.Provider value={{role, setRole}}>
                <AgeContext.Provider value={{age, setAge}}>
                    {children}
                </AgeContext.Provider>
            </RoleContext.Provider>
        </TermContext.Provider>
    </UserContext.Provider>
    </>
}