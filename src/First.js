import React, { useState } from "react";
import { AllData } from "./constant";

const breakfast = AllData.filter((item, index) => {
  return item.catagory === "breakfast";
});

const lunch = AllData.filter((item, index) => {
  return item.catagory === "lunch";
});
const dinner = AllData.filter((item, index) => {
  return item.catagory === "dinner";
});
const shake = AllData.filter((item, index) => {
  return item.catagory === "shake";
});
console.log(shake);

const First = () => {
  const [product, setProduct] = useState(AllData);

  const changeData = (data) => {
    setProduct(data);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" id="first">
            {" "}
            Our Menu Updated With Vercel
          </div>
        </div>
        {/* this is second */}
        <div className="row">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12" id="second">
              <button
                className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-1"
                onClick={() => changeData(AllData)}
              >
                All
              </button>
              <button
                className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-3"
                onClick={() => changeData(breakfast)}
              >
                breakfast
              </button>
              <button
                className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-2"
                onClick={() => changeData(shake)}
              >
                shake
              </button>
              <button
                className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-2"
                onClick={() => changeData(lunch)}
              >
                lunch
              </button>
              <button
                className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-3 col-2"
                onClick={() => changeData(dinner)}
              >
                dinner
              </button>
            </div>
          </div>
        </div>

        {/* this is third */}
        <div className="row">
          <div className="container">
            <div className="col-12 " id="third">
              {product.map((item) => {
                return (
                  <>
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3"
                      id="t1"
                    >
                      <div className="col-6" id="left">
                        <img id="img" src={item.Img} alt="not found"></img>
                      </div>
                      <div className="col-6" id="right">
                        <div className="col-12" id="title">
                          {item.title}{" "}
                          <span style={{ color: "red" }}> $15.99</span>
                        </div>
                        <div className="col-12 mt-3" id="desc">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
