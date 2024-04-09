import {ThirdPage} from "./ThirdPage.tsx";
import {useContext} from "react";
import {ApplicationContext} from "../contexts/Providers.tsx";

export const SecondPage = () => {

    const {
        user,
        term,
        role,
        age
    } = useContext(ApplicationContext)!

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
        <ThirdPage/>
    </>
}