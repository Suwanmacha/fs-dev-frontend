import React, {ReactHTMLElement, useState} from "react";
import { useRouter } from 'next/router';

const Registar = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    // ROUTER SETTING
    const router = useRouter();

    // フォームデータをAPI側にリクエストを送る
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8081/auth/login", {
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
            const data = await res.json();
            if (data.token) {
                router.push("/page");
            } else {
                setError(data.message);
            }

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
        }
    }
    
    return (
        <>
            <h1>LOGIN</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">ユーザー名</label>
                <input onChange={changeHandler} value={username} type="text" name="username" id="username" />
                <label htmlFor="email">メールアドレス</label>
                <input onChange={changeHandler} value={email} type="email" name="email" id="email" />
                <label htmlFor="password">パスワード</label>
                <input onChange={changeHandler} value={password} type="password" name="password" id="password" />
                {error && <div>{error}</div>}
                <button type="submit">
                    LOGIN
                </button>
            </form>

            <a href="http://localhost:3000/">アカウントを作る:SIGN UP</a>
        </>
    );
}

export default Registar