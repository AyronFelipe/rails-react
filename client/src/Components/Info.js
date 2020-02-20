import React from 'react';
import Typewriter from 'typewriter-effect';

function Info(){

    const frase1 = `Os cupons cheguem na sua mão através do verso das notinhas fiscais de um mercado parceiro.`;
    const frase2 = `Você não precise de ponto comercial. Você possa trabalhar de casa, sem a necessidadede uma equipe. Fazendo com que seus custos operacionais sejam baixos.`;
    const frase3 = `Você tenha uma rápido retorno. Nosso modelo de negócios trata-se de uma micro franquia. Portanto o investimento é baixo e o payback estimado é de 3 a 7 meses.`

    return(
        <div className="d-flex justify-content-start flex-column mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <img src="https://www.bomcupom.com/wp-content/themes/bomcupom-novo/assets/images/cupom-feliz.png" className="img-responsive" alt=""/>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className="d-flex justify-content-start flex-column">
                        <h1 className="important-text display-4">Ser BomCupom é fazer parte de uma revolução</h1>
                        <h1 className="important-text mx-auto" style={{ backgroundColor: '#1aa06f' }}>Faça parte desta revolução</h1>
                        <h1 className="important-text mx-auto">Nossos objetivos são fazer com que:</h1>
                        <h2 className="important-text">
                            <Typewriter
                                options={{
                                    strings: [frase1, frase2, frase3],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;