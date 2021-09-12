import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux";


const Bids = () =>{
    const dispatch = useDispatch();

    const history=useHistory()
    const bids = [
        {src:"img/bid1.png",info1:"Abstract Smoke Red Blue",info2:"1.25 ",like:"img/like.png",nblikes:92,creator:'Mia Ayana',creatorimg:"img/mia.png"},
        {src:"img/bid2.png",info1:"Mountain Landscape",info2:"0.20 ",like:"img/like.png",nblikes:25,creator:'Black Glass',creatorimg:"img/black.png"},
        {src:"img/bid3.png",info1:"Paint Color on Wall",info2:"0.00 ",like:"img/dislike.png",nblikes:84,creator:'Black Glass',creatorimg:"img/black.png"},
        {src:"img/bid4.png",info1:"Abstract Patern",info2:"0.87 ",like:"img/like.png",nblikes:82,creator:'Mia Ayana',creatorimg:"img/mia.png"},
        {src:"img/bid5.png",info1:"White Line Grafiti",info2:"0.09 ",like:"img/dislike.png",nblikes:22,creator:'Lady Young',creatorimg:"img/lady.png"},
        {src:"img/bid6.png",info1:"Abstract Triangle",info2:"0.90 ",like:"img/like.png",nblikes:71,creator:'Mia Ayana',creatorimg:"img/mia.png"},
        {src:"img/bid7.png",info1:"Lake Landscape",info2:"0.52 ",like:"img/like.png",nblikes:63,creator:'Lady Young',creatorimg:"img/lady.png"},
        {src:"img/bid8.png",info1:"Blue Red Art",info2:"0.85 ",like:"img/like.png",nblikes:66,creator:'Mia Ayana',creatorimg:"img/mia.png"},
    ];

    return (
        <div className='containerbids'>
            <div className='rowbids'>
                {bids.map(bid =><div className='bid' onClick={() => {
                let action = { type: "SET_ITEM", value: { item: bid } };
                dispatch(action);
                history.push("/item")}}>
                    <img src={bid.src} alt=""></img>
                    <p className='bidinfo1'>{bid.info1}</p>
                    <div className='row'>
                        <p className='bidinfo2 col'><b>{bid.info2}</b>ETH</p>
                        <div className='likes col'>
                            <p><img src={bid.like} alt=''/> {bid.nblikes}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
export default Bids ;