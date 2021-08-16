import React from 'react';
import Topbar from '../components/topbar'
import Chart from '../components/chart'
import TransactionRecords from '../components/Transaction-Records'
import ThemeContextProvider from '../context/themeContext'

const Home =() => {

    return (
        <div id='body'> 
            <ThemeContextProvider> 
                <Topbar/>      
            </ThemeContextProvider>    
            <section className="section1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className=" row">
                                <div className="col-7">
                                    <p className="titre">Asset Overview</p>
                                </div>
                                <div className="col d-grid gap-2 d-md-flex justify-content-md-end">
                                    <div class="dep">
                                        <bouton class="btn" type="button">Deposit</bouton>
                                    </div>                                    
                                    <bouton className="btn btn-success " href="">Withdraw</bouton>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col block">
                                    <div className="row">
                                        <div className="col-7">
                                            <p className="price">$18,214.239</p>
                                            <p className="infop">total Balance</p>
                                        </div>
                                        <div className="col">
                                            <p className="plus">+3.05%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col block">
                                    <div className="row">
                                        <div className="col-7">
                                            <p className="price">$18,214.239</p>
                                            <p className="infop">total Earned</p>
                                        </div>
                                        <div className="col">
                                            <p className="moins">-3.05%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col block">
                                    <div className="row">
                                        <div className="col-7">
                                            <p className="price">$18,214.239</p>
                                            <p className="infop">Daily Interest</p>
                                        </div>
                                        <div className="col">
                                            <p className="moins">-3.05%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col block">
                                    <div className="row">
                                        <div className="col-7">
                                            <p className="price">$18,214.239</p>
                                            <p className="infop">Principal Value</p>
                                        </div>
                                        <div className="col">
                                            <p className="plus">+3.05%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box col-lg-7">
                            <div className="row">
                                <div className="col-9">
                                    <p className="titre">My Box</p>
                                </div>
                                <div className="col-3 d-grid gap-2 d-md-flex justify-content-md-end">
                                    <bouton className="btn btn-success" href="">See Details</bouton>
                                </div>
                            </div>
                            <div className="table-responsive-lg">
                                <table className="table mt-4 table-hover">
                                    <thead>
                                    <tr>
                                        <td>Box</td>
                                        <td>Crypto</td>
                                        <td>Box Grade</td>
                                        <td>Annual Interest</td>
                                        <td>Daily Interest</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src="img/box1.png" className="me-2" alt=''/>$15,064.231195</td>
                                            <td>USDT</td>
                                            <td>C</td>
                                            <td>10.00%</td>
                                            <td>2.611579 bps</td>
                                        </tr>
                                        <tr>
                                            <td><img src="img/box2.png" className="me-2" alt=''/>$15,064.231195</td>
                                            <td>USDT</td>
                                            <td>C</td>
                                            <td>10.00%</td>
                                            <td>2.611579 bps</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className="section2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9">
                            <p className="titre">Financial Analysis</p>
                        </div>
                        <div className="col d-grid gap-2 d-md-flex justify-content-md-end">
                            <bouton className="btn btn-success" href="">See Details</bouton>
                        </div>
                    </div>
                    <div className="row cblock mt-3">
                        <div className="col-lg">
                            <ThemeContextProvider>
                                <Chart id="chart" titre='Total Asset'/>
                            </ThemeContextProvider>
                        </div>
                        <div className="col-lg">
                            <ThemeContextProvider>
                                <Chart id="chart1" titre='Total Earned'/>
                            </ThemeContextProvider>
                        </div>
                    </div>
                </div>
            </section>
        
            <section className="section3">
                <TransactionRecords/>
            </section>
        </div>                
    );
}
export default Home ;