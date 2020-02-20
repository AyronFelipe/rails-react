import React from 'react';
import Header from './Header';
import Form from './Form';
import Info from './Info';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="main-panel">
                <div className="content">
                    <div className="page-inner">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <Info />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <Form />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
