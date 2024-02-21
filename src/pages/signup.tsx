import React, {ReactHTMLElement, useState, useEffect} from "react";
import { useRouter } from 'next/router';

const Registar = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);

    // ROUTER SETTING
    const router = useRouter();

    // フォームデータをAPI側にリクエストを送る
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8081/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                })
            });
    
            // レスポンスの処理を追加する
            const data = await res.json()

            console.log("res.status  : " + res.status);
            console.log("res.message : " + data.message);
            console.log("res.ok      : " + data.ok)
 
            if (data.ok) {
                router.push("/login");
            } else {
                setError(data.message);
            }

            console.log(error)

        } catch (error) {
            console.error("エラーが発生しました:", error);
        }
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;

        switch (name) {
            case "username":
                setUsername(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }
    
    return (
        <>
            <h1>SIGN UP</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">ユーザー名</label>
                <input onChange={changeHandler} value={username} type="text" name="username" id="username" />
                <label htmlFor="email">メールアドレス</label>
                <input onChange={changeHandler} value={email} type="email" name="email" id="email" />
                <label htmlFor="password">パスワード</label>
                <input onChange={changeHandler} value={password} type="password" name="password" id="password" />
                {error && <div>{error}</div>}
                <button type="submit">
                    SUBMIT
                </button>
            </form>

            <a href="http://localhost:3000/login">アカウントを持っている:LOGIN</a>
        </>
    );
}

export default Registar