import React, { useState, useContext } from 'react';
import './Home.css'
import { MyDataContext } from '../../Contex/Contex';
import Convert from '../../Convert/Convert';


const Home = (props) => {

  const { slides, logoArray, translate, setTranslate } = useContext(MyDataContext)
  console.log(slides)
  const { dataCard } = props;
  const cardData = [dataCard]
  return (
    <>
      {
        cardData.map(card => {
          return <div class="containerCards">
            <div class="card">
              <div class="card-header">
                <img src={card.image} alt="rover" />
              </div>
              <div class="card-body" style={{ textAlign: "center" }} download style={{ visibility: translate ? "visible" : "hidden" }}>
                <span class="tag tag-teal">{card.title}</span>

                <h3>
                  {card.description}
                </h3>

              </div>

              <div class="card-body" style={{ textAlign: "center" }} download style={{ visibility: translate ? "hidden" : "visible" }}>
                <span class="tag tag-teal"> <Convert
                  text={card.title}
                  language="heb"


                /></span>

                <h3>
                  <Convert
                    text={card.description}
                    language="heb"


                  />

                </h3>

              </div>
            </div>
          </div>
        })
      }

    </>
  )
}

export default Home;