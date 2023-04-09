import React from 'react';
import "./style.css";

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author">Breakfast</span>
                    <h2 className="card-title">Maggi</h2>
                    <span className="card-description subtle">
                      Here comes the description Here comes the descriptionHere
                      comes the descriptionHere comes the descriptionHere comes
                      the description
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  {/* <img src={image} alt="images" className='card-media' /> */}
                  <span className="card-tag subtle"> Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default MenuCard;