import React, { useState } from 'react'
import b1 from './images/b1.jpg'
import b2 from './images/b2.jfif'
import b3 from './images/b3.jfif'
import d1 from './images/d1.webp'
import d2 from './images/d2.jpg'
import l1 from './images/l4.jfif'
import l2 from './images/l2.jpg'
import l3 from './images/l4.jfif'
import s1 from './images/s1.jpg'
import s2 from './images/s2.jpg'
import s3 from './images/s3.webp'


const AllData = [
  {
    title: 'Buttermilk Pancakes ',
    description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    Img: b1,
    catagory: 'breakfast',
  },
  {
    title: 'Diner Double',
    description: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
    Img: b2,
    catagory: 'breakfast',
  },
  {
    title: 'Godzilla Milkshake',
    description: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
    Img: b3,
    catagory: 'breakfast',
  },
  {
    title: 'Country Delight',
    description: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
    Img: l1,
    
    catagory: 'lunch',
},
{
    title: 'Egg Attack',
    description: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90',
    Img: l2,
    
    catagory: 'lunch',
},
{
    title: 'Oreo Dream',
    description: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
    Img: l3,

    catagory: 'lunch',
},
{
    title: 'Bacon Overflow',
    description: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
    Img: d2,
    catagory: 'dinner',
},
{
    title: 'American Classic',
    description: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
    Img: d1,
    catagory: 'dinner',
},
{
    title: 'Quarantine Buddy',
    description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    Img: d2,
    catagory: 'dinner',
},
{
    title: 'Steak Dinner',
    description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    Img: s1,
    catagory: 'shake',
},
{
    title: 'title',
    description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    Img: s2,
    catagory: 'shake',
  },
  {
    title: 'title',
    description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
    Img: s3,
    catagory: 'shake',
},
]

const breakfast = AllData.filter((item, index) => {
    return item.catagory == 'breakfast'
    
})


const lunch = AllData.filter((item, index) => {
    return item.catagory == 'lunch'
})
const dinner = AllData.filter((item, index) => {
    return item.catagory == 'dinner'
})
const shake = AllData.filter((item, index) => {
    return item.catagory == 'shake'
})
console.log(shake);

const First = () => {
    const [product, setProduct] = useState(AllData)
    
    
    const changeData=(data)=>{
        setProduct(data);
    }
  return (
      <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" id="first">
            {' '}
            Our Menu
          </div>
        </div>
        {/* this is second */}
        <div className="row">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12" id="second">
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-1"   onClick={()=>changeData(AllData)}>All</button>
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-3" onClick={()=>changeData(breakfast)} >breakfast</button>
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-2"  onClick={()=>changeData(shake)}>shake</button>
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-2"  onClick={()=>changeData(lunch)}>lunch</button>
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-2"  onClick={()=>changeData(dinner)}>dinner</button> 
              
            </div>
          </div>
        </div>

        {/* this is third */}
        <div className="row">
          <div className="container">
            <div className="col-12 " id="third">
              {product.map(item=>{
                return <>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3" id="t1">
                <div className="col-6" id="left">
                  <img id="img" src={item.Img} alt="not found"></img>
                </div>
                <div className="col-6" id="right">
                  <div className="col-12" id="title">
                    {item.title} <span style={{color:"red"}}> $15.99</span>
                  </div>
                  <div className="col-12 mt-3" id="desc">
                    <p>
                     {item.description}
                    </p>
                  </div>
                </div>
              </div>
              </>

              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default First
