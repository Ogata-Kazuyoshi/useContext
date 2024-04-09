import {ReactNode, useContext} from "react";
import {ApplicationContext, Providers, Roles} from "../../contexts/Providers.tsx";
import {act, renderHook} from "@testing-library/react";

describe("Providersのテスト",()=>{
    test("contextのsetUserに渡す引数に応じて、正しくuserが変更される",()=>{
        const result = renderContext()

        expect(result.current?.user).toBe("user")

        act(()=>{
            result.current?.setUser("testUser")
        })

        expect(result.current?.user).toBe("testUser")
    })

    test("contextのsetTermに渡す引数に応じて、正しくtermが変更される",()=>{
        const result = renderContext()

        expect(result.current?.term).toBe(5)

        act(()=>{
            result.current?.setTerm(999)
        })

        expect(result.current?.term).toBe(999)
    })

    test("contextのsetRoleす引数に応じて、正しくroleが変更される",()=>{
        const result = renderContext()

        expect(result.current?.role).toBe(Roles.Devs)

        act(()=>{
            result.current?.setRole(Roles.PD)
        })

        expect(result.current?.role).toBe(Roles.PD)
    })

    test("contextのsetAgeに渡す引数に応じて、正しくageが変更される",()=>{
        const result = renderContext()

        expect(result.current?.age).toBe(33)

        act(()=>{
            result.current?.setAge(999)
        })

        expect(result.current?.age).toBe(999)
    })
})

const useGetContext = () => useContext(ApplicationContext)

const renderContext = () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
        <Providers>{children}</Providers>
    )

   return  renderHook(useGetContext, { wrapper }).result
}