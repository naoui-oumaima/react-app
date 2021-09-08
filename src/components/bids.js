import React from 'react';
import { useHistory } from 'react-router';

const Bids = () =>{
    const history=useHistory()
    const bids = [
        {src:"img/bid1.png",info1:"Abstract Smoke Red Blue",info2:"1.25 ",like:"img/like.png",nblikes:92},
        {src:"img/bid2.png",info1:"Mountain Landscape",info2:"0.20 ",like:"img/like.png",nblikes:25},
        {src:"img/bid3.png",info1:"Paint Color on Wall",info2:"0.00 ",like:"img/dislike.png",nblikes:84},
        {src:"img/bid4.png",info1:"Abstract Patern",info2:"0.87 ",like:"img/like.png",nblikes:82},
        {src:"img/bid5.png",info1:"White Line Grafiti",info2:"0.09 ",like:"img/dislike.png",nblikes:22},
        {src:"img/bid6.png",info1:"Abstract Triangle",info2:"0.90 ",like:"img/like.png",nblikes:71},
        {src:"img/bid7.png",info1:"Lake Landscape",info2:"0.52 ",like:"img/like.png",nblikes:63},
        {src:"img/bid8.png",info1:"Blue Red Art",info2:"0.85 ",like:"img/like.png",nblikes:66},
    ];

    return (
        <div className='containerbids'>
            <div className='rowbids'>
                {bids.map(bid =><div className='bid'  onClick={()=>history.push("/item")}>
                    <img src={bid.src} alt=""></img>
                    <p className='bidinfo1'>{bid.info1}</p>
                    <div className='row'>
                        <p className='bidinfo2 col'><b>{bid.info2}</b>ETH</p>
                        <div className='likes col'>
                            <p><img src={bid.like} alt=''/> {bid.nblikes}</p>
                        </div>
                    </div>
                </div>)}
                {/* <div className='bid'>
                    <img src="img/bid1.png" alt=""></img>
                    <p className='bidinfo1'>Abstract Smoke Red Blue</p>
                    <div className='row'>
                        <p className='bidinfo2 col'>1.25 ETH</p>
                        <div className='likes col'>
                            <p>92</p>
                        </div>
                    </div>
                </div>
                <div className='bid'>
                    <img src="img/bid2.png" alt=""></img>
                    <p className='bidinfo1'>Abstract Smoke Red Blue</p>
                    <div className='row'>
                        <p className='bidinfo2 col'>1.25 ETH</p>
                        <div className='likes col'>
                            <p>92</p>
                        </div>
                    </div>
                </div>
                <div className='bid'>
                    <img src="img/bid3.png" alt=""></img>
                    <p className='bidinfo1'>Abstract Smoke Red Blue</p>
                    <div className='row'>
                        <p className='bidinfo2 col'>1.25 ETH</p>
                        <div className='likes col'>
                            <p>92</p>
                        </div>
                    </div>
                </div>
                <div className='bid'>
                    <img src="img/bid4.png" alt=""></img>
                    <p className='bidinfo1'>Abstract Smoke Red Blue</p>
                    <div className='row'>
                        <p className='bidinfo2 col'>1.25 ETH</p>
                        <div className='likes col'>
                            <p>92</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rowbids'>
                <div className='bid'>
                    <img src="img/bid5.png" alt=""></img>
                    <p className='bidinfo1'>Abstract Smoke Red Blue</p>
                    <div className='row'>
                        <p className='bidinfo2 col'>1.25 ETH</p>
                        <div className='likes col'>
                            <p>92</p>
                        </div>
                    </div>
                </div>
                <div className='bid'>
                    <img src="img/bid6.png" alt=""></img>
                    <p className='bidinfo1'>Abstract Smoke Red Blue</p>
                    <div className='row'>
                        <p className='bidinfo2 col'>1.25 ETH</p>
                        <div className='likes col'>
                            <p>92</p>
                        </div>
                    </div>
                </div>
                <div className='bid'>
                    <img src="img/bid7.png" alt=""></img>
                    <p className='bidinfo1'>Abstract Smoke Red Blue</p>
                    <div className='row'>
                        <p className='bidinfo2 col'>1.25 ETH</p>
                        <div className='likes col'>
                            <p>92</p>
                        </div>
                    </div>
                </div>
                <div className='bid'>
                    <img src="img/bid8.png" alt=""></img>
                    <p className='bidinfo1'>Abstract Smoke Red Blue</p>
                    <div className='row'>
                        <p className='bidinfo2 col'>1.25 ETH</p>
                        <div className='likes col'>
                            <p>92</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Bids ;