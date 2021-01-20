import React from 'react';
import Sidebar from '../organisms/Sidebar';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Valdate from '../../helpers/Valdate';
function Main(props) {
    return (
        <div>
        <Valdate/>
        <Sidebar/>
            <div className="c-wrapper c-fixed-components">
            {/* ĐÂY LÀ HEADER */}
            <Header/>

                <div className="c-body">
                    <main className="c-main">
                        <div className="container-fluid">
                        {props.children}
                            <div className="fade-in" />
                        </div>
                    </main>
                  {/* DAYLAFOOTER */}
                  <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Main;