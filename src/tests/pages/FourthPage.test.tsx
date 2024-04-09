import {renderWithContext} from "../utils/renderWithContext.tsx";
import {FourthPage} from "../../pages/FourthPage.tsx";
import {vi} from "vitest";
import {userEvent} from "@testing-library/user-event";
import {screen} from "@testing-library/react";


describe("FourthPage.tsxのテスト",()=>{

    beforeEach(() => {
        // window.alertをモック関数で上書き
        window.alert = vi.fn();
    });

    test("変更ボタンを押すとroleのインプットの値が正しい場合はcontextの各セット関数を正しい引数で呼んで、インプットを空にする",async()=>{
        const spySetUser = vi.fn()
        const spySetTerm = vi.fn()
        const spySetRole = vi.fn()
        const spySetAge = vi.fn()

        renderWithContext({
            children: <FourthPage />,
            contexts: {
                setUser: spySetUser,
                setTerm:spySetTerm,
                setRole:spySetRole,
                setAge:spySetAge
            }
        })

        // ユーザー名の入力フィールドに値を入力
        await userEvent.type(screen.getAllByRole("textbox")[0], "testtestUser");
        await userEvent.type(screen.getAllByRole("textbox")[1], "50");
        await userEvent.type(screen.getAllByRole("textbox")[2], "PM");
        await userEvent.type(screen.getAllByRole("textbox")[3], "100");

        // フォームの送信
        await userEvent.click(screen.getByRole('button', {name: /変更/}));

        // setUserが期待される引数で呼び出されたかを検証
        expect(spySetUser).toHaveBeenCalledWith("testtestUser");
        expect(spySetTerm).toHaveBeenCalledWith(50);
        expect(spySetRole).toHaveBeenCalledWith("PM");
        expect(spySetAge).toHaveBeenCalledWith(100);

        expect(screen.getAllByRole("textbox")[0]).toHaveValue("")
        expect(screen.getAllByRole("textbox")[1]).toHaveValue("")
        expect(screen.getAllByRole("textbox")[2]).toHaveValue("")
        expect(screen.getAllByRole("textbox")[3]).toHaveValue("")
    })

    test("変更ボタンを押した際に、roleの値が不適切だと、どのセット関数も呼ばずにInputもそのまま",async()=>{
        const spySetUser = vi.fn()
        const spySetTerm = vi.fn()
        const spySetRole = vi.fn()
        const spySetAge = vi.fn()

        renderWithContext({
            children: <FourthPage />,
            contexts: {
                setUser: spySetUser,
                setTerm:spySetTerm,
                setRole:spySetRole,
                setAge:spySetAge
            }
        })

        // ユーザー名の入力フィールドに値を入力
        await userEvent.type(screen.getAllByRole("textbox")[0], "testtestUser");
        await userEvent.type(screen.getAllByRole("textbox")[1], "50");
        await userEvent.type(screen.getAllByRole("textbox")[2], "hogehoge");
        await userEvent.type(screen.getAllByRole("textbox")[3], "100");

        // フォームの送信
        await userEvent.click(screen.getByRole('button', {name: /変更/}));

        // setUserが期待される引数で呼び出されたかを検証
        expect(spySetUser).not.toHaveBeenCalled()
        expect(spySetTerm).not.toHaveBeenCalled()
        expect(spySetRole).not.toHaveBeenCalled()
        expect(spySetAge).not.toHaveBeenCalled()

        expect(screen.getAllByRole("textbox")[0]).toHaveValue("testtestUser")
        expect(screen.getAllByRole("textbox")[1]).toHaveValue("50")
        expect(screen.getAllByRole("textbox")[2]).toHaveValue("hogehoge")
        expect(screen.getAllByRole("textbox")[3]).toHaveValue("100")
    })
})