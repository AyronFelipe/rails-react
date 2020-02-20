import React from 'react';

function Header(){
    return(
        <div className="main-header">
            <div className="nav-top">
                <div className="container d-flex flex-row">
                    <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="icon-menu"></i>
                        </span>
                    </button>
                    <button className="topbar-toggler more"><i className="icon-options-vertical"></i></button>
                    <a href="#" className="logo d-flex align-items-center mt-2">
                        <img src="https://www.bomcupom.com/wp-content/themes/bomcupom-novo/assets/images/bomcupom-marca.png" alt="navbar brand" className="navbar-brand" style={{ width: '215px', height: '45px' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;