import {render} from "@testing-library/react";
import {ApplicationContext, ApplicationState} from "../../contexts/Providers.tsx";
import {DefaultApplicationContext} from "./DefaultApplicationContext.ts";
import {ReactNode} from "react";


type Props = {
    children:ReactNode,
    contexts?:Partial<ApplicationState>
}

export const renderWithContext = ({children,contexts}:Props) => {
    render(
        <ApplicationContext.Provider value={
            {
                ...DefaultApplicationContext,
                ...contexts
            }
        }>
            {children}
        </ApplicationContext.Provider>
    )
}