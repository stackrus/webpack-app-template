import React, {useState} from "react";
import useHttp from '../hooks/http.hook'

const AuthPage = () => {
    const {loading, error, request} = useHttp()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
        // console.log(form)
    }

    const registerHandler = async () => {
            try {
                const data = await request('/api/auth/register', 'POST', {...form})
                console.log('Data:', data)
            }
            catch (e) {}
    }

    return (
        <div className={"container"}>
            <div className={"row"} align={"center"}>
                <div className={"col"}>
                    <h1>Welcum to z club buddy</h1>
                </div>
            </div>

            <div className={"row"} align={"center"}>
                <div className={"col"}>
                    <input placeholder={"Введите e-mail"}
                           id={"email"}
                           type={"text"}
                           name={"email"}
                           onChange={changeHandler}
                    />
                </div>
            </div>

            <div className={"row"} align={"center"}>
                <div className={"col"}>
                    <input placeholder={"Введите пароль"}
                           id={"password"}
                           type={"password"}
                           name={"password"}
                           onChange={changeHandler}
                    />
                </div>
            </div>

            <div className={"row"} align={"center"}>
                <div className={"col"}>
                    <button
                        className={"btn"}

                        disabled={loading}
                    >
                        Войти
                    </button>
                </div>

                <div className={"col"}>
                    <button
                        className={"btn"}
                        onClick={registerHandler}
                        disabled={loading}
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </div>

        </div>
    )
};

export default AuthPage;
