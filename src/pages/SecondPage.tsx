import {ThirdPage} from "./ThirdPage.tsx";
import {useContext} from "react";
import {AgeContext, RoleContext, TermContext, UserContext} from "../providers/Providers.tsx";

export const SecondPage = () => {

    const {user} = useContext(UserContext)!
    const {term} = useContext(TermContext)!
    const {role} = useContext(RoleContext)!
    const {age} = useContext(AgeContext)!

    return <>
        <div>SecondPage</div>
        <ul>
            <li>{`User : ${user}`}</li>
            <li>{`term : ${term}`}</li>
            <li>{`role : ${role}`}</li>
            <li>{`age : ${age}`}</li>
        </ul>
        <br/>
        <br/>
        <ThirdPage />
    </>
}