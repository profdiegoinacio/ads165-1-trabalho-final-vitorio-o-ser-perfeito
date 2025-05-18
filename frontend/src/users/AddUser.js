import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""

    });

    const { name, email, password } = user

    const onInputChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center">
                        Adicionar Usuario
                    </h2>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFro="Name" className="form-label">
                                Nome
                            </label>
                            <input type={"text"} className="form-control" placeholder="Informe seu nome" name="name" value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFro="Email" className="form-label">
                                Email
                            </label>
                            <input type={"email"} className="form-control" placeholder="Informe seu email" name="email" value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFro="Password" className="form-label">
                                Senha
                            </label>
                            <input type={"password"} className="form-control" placeholder="Informe sua senha" name="password" value={password} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-outline-primary mx-1">Enviar</button>
                        <Link className="btn btn-outline-danger mx-1" to="/">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
