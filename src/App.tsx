import React from 'react';
import './App.css';
import Image from "C:/Users/PC/Desktop/typescript/google-ts/src/images/gooogle.jpg";

function App() {
    return (
        <div className="container text-center">
            <div className="row align-items-center mt-5">
                <div className="col"></div>
                <div className="col-6">
                    <img style={nest} src={Image} alt="Google slika"/>
                    <form>
                        <input className="form-control mt-4" type="text" placeholder="Search Here"/>
                    </form>
                    <div className="row mt-3">
                        <div className="col-2"></div>
                        <div className="col-8 btn-toolbar justify-content-between">
                            <button type="button" className="btn btn-light">Google Search</button>
                            <button type="button" className="btn btn-light">Im feeling lucky</button>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
                <div className="col"></div>
            </div>


        </div>
    );
}

let nest = {
    width : '70%'
}

export default App;

