import React, { useRef } from 'react';
import Bids from '../components/bids';
// import Carousel from 'react-elastic-carousel';

const Home =() => {
    const ref = useRef(null);
    const scrollRight = () => {
        ref.current.scrollLeft += 200;
    };
    const scrollleft = () => {
        ref.current.scrollLeft -= 200;
    };
    const sellers = [
        {num:1,img:'img/mia.png',name:'Mia Ayana',info1:5.250},
        {num:2,img:'img/rian.png',name:'Rian Leon',info1:4.932},
        {num:3,img:'img/lady.png',name:'Lady Young',info1:4.620},
        {num:4,img:'img/black.png',name:'Black Glass',info1:4.125},
        {num:5,img:'img/budhiman.png',name:'Budhiman',info1:3.921},
        {num:6,img:'img/mia.png',name:'Mia Ayana',info1:5.250},
        {num:7,img:'img/rian.png',name:'Rian Leon',info1:4.932},
        {num:8,img:'img/lady.png',name:'Lady Young',info1:4.620},
        {num:9,img:'img/black.png',name:'Black Glass',info1:4.125},
        {num:10,img:'img/budhiman.png',name:'Budhiman',info1:3.921},
    ];

    // const breakPoints = [
    //     {width:1440, itemToShow:5},
    //     {width:500, itemToShow:2},
    //     {width:800, itemToShow:3},
    // ];

    return (
        <div className="body"> 
            <div className="discover">
                <p> Discover, collect, and sell extraordinary NFTs</p>
            </div>
            <div className="topSellers" id='Following'>
                <h1 className="titre">
                    Top Sellers
                </h1>
                <img className="leftarrow" onClick={scrollleft} src='img/leftarrow.png' alt=''/>
                <img className="rightarrow"  onClick={scrollRight} src='img/rightarrow.png' alt=''/>
                <div className="sellerscontainer" ref={ref}>
                    {/* <div className="seller1">
                        <div className="number">
                            1
                        </div>
                        <div className="infoseller">
                            <img src='img/mia.png' alt=''></img>
                            <p>Mia Ayana</p>
                            <p>5.250 ETH</p>
                        </div>
                    </div> */}
                    {/* <Carousel breakPoints={breakPoints}> */}
                        {sellers.map(seller => 
                        <div className="seller">
                            <div className="number">
                                {seller.num}
                            </div>
                            <div className="infoseller">
                                <img src={seller.img} alt=''></img>
                                <p>{seller.name}</p>
                                <p>{seller.info1} ETH</p>
                            </div>
                        </div>)}
                    {/* </Carousel> */}
                    {/* <div className="seller">
                        <div className="number">
                            3
                        </div>
                        <div className="infoseller">
                            <img src='img/lady.png' alt=''></img>
                            <p>Lady Young</p>
                            <p>4.620 ETH</p>
                        </div>
                    </div>
                    <div className="seller">
                        <div className="number">
                            4
                        </div>
                        <div className="infoseller">
                            <img src='img/black.png' alt=''></img>
                            <p>Black Glass</p>
                            <p>4.125 ETH</p>
                        </div>
                    </div>
                    <div className="seller">
                        <div className="number">
                            5
                        </div>
                        <div className="infoseller">
                            <img src='img/budhiman.png' alt=''></img>
                            <img src='img/tick.png' alt='' className='tick'></img>
                            <p>Budhiman</p>
                            <p>3.921 ETH</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="hotbids" id='items'>
                <h1 className="titre">
                    Hot Bids
                </h1>
                <Bids></Bids>
            </div>
            <button className="loadmore">Load More</button> 
        </div>                
    );
}
export default Home ;