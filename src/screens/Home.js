import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousal from '../components/Carousal';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  // const loadData = async () => {
  //   let response = await fetch('http://localhost:4000/api/foodData', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   response = await response.json(); // Convert response to JSON

  //   console.log(response[0], response[1]);

  //   setFoodItem(response[0]);
  //   setFoodCat(response[1]);
  // };

  // useEffect(() => {
  //   loadData();
  // }, []); // Load data on component mount

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Carousal />
      </div>

      <div className="container">
        {foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div key={data._id} className="row mb-3">
                  <div className="fs-3 m-3">{data.categoryName}</div>

                  <hr />

                  {foodItem.length > 0
                    ? foodItem
                        .filter((item) => item.categoryName === data.categoryName)
                        .map((filteredItem) => {
                          return (
                            <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                              <Card item={filteredItem} />
                              {/* <Card/> */}
                            </div>
                          );
                        })
                    : <div>No Such Data Found</div>}
                </div>
              );
            })
          : 'Loading...'}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
