import React from 'react'

export default function AddUser() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center">
                    Adicionar Usuario
                </h2>
                <div className="mb-3">
                    <label htmlFro="Name" className="form-label">
                        Nome
                    </label>
                    <input type={"text"} className="form-control" placeholder="Informe seu nome" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFro="Email" className="form-label">
                        Email
                    </label>
                    <input type={"email"} className="form-control" placeholder="Informe seu email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFro="Password" className="form-label">
                        Senha
                    </label>
                    <input type={"password"} className="form-control" placeholder="Informe sua senha" name="password" />
                </div>
                <button type="submit" className="btn btn-outline-primary mx-1">Enviar</button>
                <button type="submit" className="btn btn-outline-danger mx-1 ">Cancelar</button>
            </div>
        </div>
    </div>
  )
}
