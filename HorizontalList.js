import React,{useRef} from 'react';
import image from './arrow.png'; 
import './HorizontalList.css';

function HorizontalList({posts}) {
    function scroll(){
        var sl=document.getElementsByClassName('Hlist')[0].scrollLeft+=250;
        if(document.getElementsByClassName('Hlist')[0].scrollLeft>=5226.9)
        document.getElementsByClassName('Hlist')[0].scrollLeft=0;
    }
    
  return <>
 
  <img className='image' src={image} onClick={scroll}></img>
 
  
  <div className='MainList'>
  <div className='Hlist' >
      <>
      {
           posts.map((item,index)=>{
               return (
                <div className='divCard' key={index}>
                     <div>
                     <img src= {item.image}></img>
                     <div style={{position:'absolute',top:'93px'}}> {item.address.city},{item.address.state}</div>
                    
                       </div>
                   <div>
                      <div>{item.product_name}</div>  
                  <div>{item.brand_name}</div> 
                   <div>{item.price}</div>
                   <div >{item.date}</div>
                   </div>
                  

                </div>);
        })
      }
    </>
     
  </div>
  </div>
  </>
}

export default HorizontalList;
