import React, {useEffect, useState} from "react";
import useHttp from '../hooks/http.hook'

const AuthPage = () => {
    const {loading, error, request} = useHttp()
    const [responseAnswer, setResponseAnswer] = useState('')
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    // useEffect(() => {
    //     console.log(error)
    // }, [error])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
        // console.log(form)
    }

    const registerHandler = async () => {
            try {
                const data = await request('/api/auth/register', 'POST', {...form})
                setResponseAnswer(data.message)
                // console.log(error)
            }
            catch (e) {
                // console.log(e)
                setResponseAnswer(e.message)
            }
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

            <div className={"row"} align={"center"}>
                <div className={"col"}>
                    <p id={"ErrorParagraph"}>{responseAnswer}</p>
                </div>

            </div>

        </div>
    )
};

export default AuthPage;
