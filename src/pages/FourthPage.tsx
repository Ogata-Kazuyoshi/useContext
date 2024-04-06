import {FormEvent, useContext, useRef} from "react";
import {AgeContext, RoleContext, Roles, TermContext, UserContext} from "../providers/Providers.tsx";

export const FourthPage = () => {

    const {setUser} = useContext(UserContext)!
    const {setTerm} = useContext(TermContext)!
    const {setRole} = useContext(RoleContext)!
    const {setAge} = useContext(AgeContext)!

    const userInputRef = useRef<HTMLInputElement>(null)
    const termInputRef = useRef<HTMLInputElement>(null)
    const roleInputRef = useRef<HTMLInputElement>(null)
    const ageInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e:FormEvent) => {
        e.preventDefault()
        const inputRole = roleInputRef.current!.value

        // Rolesの有効な値かどうかをチェックする関数
        const isValidRole = (role: string): role is Roles => {
            return Object.values(Roles).includes(role as Roles);
        };

        if (!isValidRole(inputRole)) {
            window.alert("Roleの種類が正しくありません");
            return;
        }

        setUser(userInputRef.current!.value)
        setTerm(+termInputRef.current!.value)
        setRole(roleInputRef.current!.value as Roles)
        setAge(+ageInputRef.current!.value)

        userInputRef.current!.value = ""
        termInputRef.current!.value = ""
        roleInputRef.current!.value = ""
        ageInputRef.current!.value = ""
    }

    return <>
    <div>FourthPage</div>
        <form onSubmit={submitHandler} >
            <div>
                <label>user変更：</label>
                <input ref={userInputRef} type="text"/>
            </div>
            <div>
                <label>term変更：</label>
                <input ref={termInputRef} type="text"/>
            </div>
            <div>
                <label>role変更：</label>
                <input ref={roleInputRef} type="text"/>
            </div>
            <div>
                <label>age変更：</label>
                <input ref={ageInputRef} type="text"/>
            </div>
            <button>変更</button>
        </form>
    </>
}