import React from 'react';
import axios from 'axios';

function Form() {

    function saveUser(e){
        e.preventDefault();
    }

    return(
        <div className="d-flex justify-content-md-end justify-content-sm-center justify-content-center mt-5">
            <form onSubmit={(e) => {saveUser(e)}} method="post">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">Cadastre-se aqui</div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="email">Qual o seu e-mail?</label>
                                    <input type="email" className="form-control" id="email" placeholder="E-mail" required size={40} name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Qual a sua senha?</label>
                                    <input type="password" className="form-control" id="password" placeholder="Senha" required minLength={8} name="password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Qual o seu nome?</label>
                                    <input type="text" className="form-control" id="name" name="name" required placeholder="Nome" />
                                </div>
                                <div className="form-check">
                                    <label>Gênero</label>
                                    <br/>
                                    <label className="form-radio-label">
                                        <input className="form-radio-input" type="radio" name="gender" value="M" />
                                        <span className="form-radio-sign">Masculino</span>
                                    </label>
                                    <label className="form-radio-label ml-3">
                                        <input className="form-radio-input" type="radio" name="gender" value="F" />
                                        <span className="form-radio-sign">Feminino</span>
                                    </label>
                                    <label className="form-radio-label ml-3">
                                        <input className="form-radio-input" type="radio" name="gender" value="O" />
                                        <span className="form-radio-sign">Outro</span>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="birthday">Qual sua data de nascimento?</label>
                                    <input type="date" name="birthday" id="birthday" placeholder="Data de Nascimento" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-action d-flex flex-row-reverse">
                        <button className="btn btn-bom-cupom btn-block" type="submit">
                            Salvar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;