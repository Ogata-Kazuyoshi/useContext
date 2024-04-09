import {createContext, useState} from "react";
import * as React from "react";

type Props = {
    children: React.ReactNode
}

export type ApplicationState = {
    user: string,
    setUser: (user: string) => void
    term: number,
    setTerm: (term: number) => void
    role: Roles,
    setRole: (role: Roles) => void
    age: number,
    setAge: (age: number) => void
}

export enum Roles {
    PM = "PM",
    PD = "PD",
    Devs = "Devs"
}



export const ApplicationContext = createContext<ApplicationState | null>(null)
export const Providers: React.FC<Props> = ({children}) => {

    const [user, setUser] = useState("user")
    const [term, setTerm] = useState(5)
    const [role, setRole] = useState<Roles>(Roles.Devs)
    const [age, setAge] = useState(33)

    return <>
        <ApplicationContext.Provider value={
            {
                user,
                setUser,
                term,
                setTerm,
                role,
                setRole,
                age,
                setAge
            }
        }>
            {children}
        </ApplicationContext.Provider>
    </>
}