import React, { useState } from 'react';
import axios from 'axios';

function Form() {

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [name, setName] = useState(``);
    const [gender, setGender] = useState(``);
    const [birthday, setBirthday] = useState(``);

    async function saveUser(e){
        e.preventDefault();
        let form = {
            'email': email,
            'password': password,
            'name': name,
            'gender': gender,
            'birthday': birthday
        }
        const response = await axios.post('/users/', form);
        console.log(response.data);
    }

    function handleGenderChange(e) {
        setGender(e.target.value);
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
                                    <input type="email" className="form-control" id="email" placeholder="E-mail" required size={40} name="email" onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Qual a sua senha?</label>
                                    <input type="password" className="form-control" id="password" placeholder="Senha" required minLength={8} name="password" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Qual o seu nome?</label>
                                    <input type="text" className="form-control" id="name" name="name" required placeholder="Nome" onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="form-check">
                                    <label>Gênero</label>
                                    <br/>
                                    <label className="form-radio-label">
                                        <input className="form-radio-input" type="radio" name="gender" onChange={e => handleGenderChange(e)} value="M" />
                                        <span className="form-radio-sign">Masculino</span>
                                    </label>
                                    <label className="form-radio-label ml-3">
                                        <input className="form-radio-input" type="radio" name="gender" onChange={e => handleGenderChange(e)} value="F" />
                                        <span className="form-radio-sign">Feminino</span>
                                    </label>
                                    <label className="form-radio-label ml-3">
                                        <input className="form-radio-input" type="radio" name="gender" onChange={e => handleGenderChange(e)} value="O" />
                                        <span className="form-radio-sign">Outro</span>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="birthday">Qual sua data de nascimento?</label>
                                    <input type="date" name="birthday" id="birthday" placeholder="Data de Nascimento" className="form-control" onChange={e => setBirthday(e.target.value)} />
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