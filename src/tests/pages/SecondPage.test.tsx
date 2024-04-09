import {renderWithContext} from "../utils/renderWithContext.tsx";
import {SecondPage} from "../../pages/SecondPage.tsx";
import {screen} from "@testing-library/react";

describe("SecondPage.tsxのテスト",()=>{
    test("SecondPageをレンダーすると正しい要素が表示される",()=>{
        renderWithContext({
            children: <SecondPage />
        })

        expect(screen.getByText(/testUser/)).toBeInTheDocument()
        expect(screen.getByText(/10/)).toBeInTheDocument()
        expect(screen.getByText(/Devs/)).toBeInTheDocument()
        expect(screen.getByText(/30/)).toBeInTheDocument()
    })
})