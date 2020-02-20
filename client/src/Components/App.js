import React from 'react';
import Header from './Header';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="main-panel">
                <div className="content">
                    <div className="page-inner">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">Card Title</div>
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
