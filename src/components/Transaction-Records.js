import React from 'react';

const TransactionRecords = () =>{

    const interestbtn = () => {
        let btn1 = document.querySelectorAll('.deposit');
        for ( var i = 0; i < btn1.length; i++) {
            btn1[i].style.display="none";
        }
        let btn2 = document.querySelectorAll('.withdraw');
        for ( var i = 0; i < btn2.length; i++) {
            btn2[i].style.display="none";
        }
        let btn3 = document.querySelectorAll('.interest');
        for ( var i = 0; i < btn3.length; i++) {
            btn3[i].style.display="";
        }
    }
    
    const depositbtn = () => {
        let btn1 = document.querySelectorAll('.interest');
        for ( var i = 0; i < btn1.length; i++) {
            btn1[i].style.display="none";
        }
        let btn2 = document.querySelectorAll('.withdraw');
        for ( var i = 0; i < btn2.length; i++) {
            btn2[i].style.display="none";
        }
        let btn3 = document.querySelectorAll('.deposit');
        for ( var i = 0; i < btn3.length; i++) {
            btn3[i].style.display="";
        }
    }
    
    const withdrawbtn = () => {
        let btn1 = document.querySelectorAll('.deposit');
        for ( var i = 0; i < btn1.length; i++) {
            btn1[i].style.display="none";
        }
        let btn2 = document.querySelectorAll('.interest');
        for ( var i = 0; i < btn2.length; i++) {
            btn2[i].style.display="none";
        }
        let btn3 = document.querySelectorAll('.withdraw');
        for ( var i = 0; i < btn3.length; i++) {
            btn3[i].style.display="";
        }
    }
    
    const affall = () => {
    let btn1 = document.querySelectorAll('.deposit');
    for ( var i = 0; i < btn1.length; i++) {
        btn1[i].style.display="";
    }
    let btn2 = document.querySelectorAll('.interest');
    for ( var i = 0; i < btn2.length; i++) {
        btn2[i].style.display="";
    }
    let btn3 = document.querySelectorAll('.withdraw');
    for ( var i = 0; i < btn3.length; i++) {
        btn3[i].style.display="";
    }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-7">
                    <p className="titre">Transaction Records</p>
                </div>
                <div className="col d-grid gap-2 d-md-flex justify-content-md-end">
                    <bouton className="btn btn-success " type="button" onClick = {affall} id='all'>All</bouton>
                    <div className="interestbtn">
                        <bouton className="btn" type="button" onClick = {interestbtn}>Interest</bouton>
                    </div>
                    <div className="wdbtn">
                        <bouton className="btn" type="button" onClick={withdrawbtn}>Withdraw</bouton>
                    </div>
                    <div className="depositbtn">
                        <bouton className="btn" type="button" onClick={depositbtn}>Deposit</bouton>
                    </div>                
                </div>
            </div>
            <div className="table-responsive-lg">
                <table className="table mt-4 table-hover">
                    <thead>
                    <tr>
                        <td>Date</td>
                        <td>Crypto</td>
                        <td>Amount</td>
                        <td>Types Of Transaction</td>
                        <td>Description</td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr className="deposit">
                            <td><img src="img/date.png" className="me-2 dark"/>
                                <img src="img/ldate.png" className="me-2 light"/>
                                2021-06-04</td>
                            <td><img src="img/box1.png" className="me-2"/>USDT</td>
                            <td className="amount">+1.1000000</td>
                            <td>                    
                                <div className="depositbtn">
									<bouton className="btn" type="button">Deposit</bouton>
								</div>    
                            </td>                            
                            <td><img src="img/checked.png" className="me-2 dark"/>
                                <img src="img/lchecked.png" className="me-2 light"/>
                                Completed</td>
                        </tr>
                        <tr class="withdraw">
                            <td><img src="img/date.png" className="me-2 dark"/>
                                <img src="img/ldate.png" className="me-2 light"/>
                                2021-06-04</td>
                            <td><img src="img/box1.png" className="me-2"/>USDT</td>
                            <td className="amount">+1.1000000</td>
                            <td>
                                <div className="wdbtn">
									<bouton className="btn" type="button">Withdraw</bouton>
								</div>
                            </td>
                            <td><img src="img/checked.png" className="me-2 dark"/>
                                <img src="img/lchecked.png" className="me-2 light"/>
                                Completed</td>
                        </tr>
                        <tr className='interest'>
                            <td><img src="img/date.png" className="me-2 dark"/>
                                <img src="img/ldate.png" className="me-2 light"/>
                                2021-06-04</td>
                            <td><img src="img/box1.png" className="me-2"/>USDT</td>
                            <td className="amount">+1.1000000</td>
                            <td>
                                <div className="interestbtn">
									<bouton className="btn" type="button" >Interest</bouton>
								</div>
                            </td>
                            <td><img src="img/checked.png" className="me-2 dark"/>
                                <img src="img/lchecked.png" className="me-2 light"/>
                                Completed</td>
                        </tr>
                        <tr className="deposit">
                            <td><img src="img/date.png" className="me-2 dark"/>
                                <img src="img/ldate.png" className="me-2 light"/>
                                2021-06-04</td>
                            <td><img src="img/box1.png" className="me-2"/>USDT</td>
                            <td className="amount">+1.1000000</td>
                            <td>                    
                                <div className="depositbtn">
									<bouton className="btn" type="button">Deposit</bouton>
								</div>    
                            </td>
                            <td><img src="img/checked.png" className="me-2 dark"/>
                                <img src="img/lchecked.png" className="me-2 light"/>
                                Completed</td>
                        </tr>
                        <tr class="withdraw">
                            <td><img src="img/date.png" className="me-2 dark"/>
                                <img src="img/ldate.png" className="me-2 light"/>
                                2021-06-04</td>
                            <td><img src="img/box1.png" className="me-2"/>USDT</td>
                            <td className="amount">+1.1000000</td>
                            <td>
                                <div className="wdbtn">
									<bouton className="btn" type="button">Withdraw</bouton>
								</div>
                            </td>
                            <td><img src="img/checked.png" className="me-2 dark"/>
                                <img src="img/lchecked.png" className="me-2 light"/>
                                Completed</td>
                        </tr>
                        <tr className="deposit">
                            <td><img src="img/date.png" className="me-2 dark"/>
                                <img src="img/ldate.png" className="me-2 light"/>
                                2021-06-04</td>
                            <td><img src="img/box1.png" className="me-2"/>USDT</td>
                            <td className="amount">+1.1000000</td>
                            <td>                    
                                <div className="depositbtn">
									<bouton className="btn" type="button">Deposit</bouton>
								</div>     
                            </td>
                            <td><img src="img/checked.png" className="me-2 dark"/>
                                <img src="img/lchecked.png" className="me-2 light"/>
                                Completed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>    
    )
}
export default TransactionRecords;