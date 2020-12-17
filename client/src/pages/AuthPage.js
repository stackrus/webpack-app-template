import React, {useState} from "react";

const AuthPage = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
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
                    <button className={"btn"}>Войти</button>
                </div>
                <div className={"col"}>
                    <button className={"btn"}>Зарегистрироваться</button>
                </div>
            </div>

        </div>
    )
};

export default AuthPage;
