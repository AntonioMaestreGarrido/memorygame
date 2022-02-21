import { useEffect, useState } from "react";
import { shuffle } from "../aux/aux";
import card1 from "../img/1.jpg";
import card2 from "../img/2.jpg";
import card3 from "../img/3.jpg";
import card4 from "../img/4.jpg";
import card5 from "../img/5.jpg";
import card6 from "../img/6.jpg";
import card7 from "../img/7.jpg";
import card8 from "../img/8.jpg";
import card9 from "../img/9.jpg";
import card0 from "../img/0.jpg";
const cardList = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card0
];
export function CardContainer(props) {
  const [arrayCards, setArrayCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  const [score, setScore] = useState(0);
  const [clickList, setClickList] = useState([]);
  const handleClick = () => setArrayCards([...shuffle(arrayCards)]);

  const checkScore = (clickValue) => {
    let index = clickValue.getAttribute("index");
    if (clickList.includes(index)) {
      document.getElementById(
        "score"
      ).innerText = `You loose!! Your score was ${score}`;
    } else {
      clickList.push(index);

      setScore(score + 1);
      console.log(arrayCards.length, score);
      if (score === arrayCards.length - 1) {
        victoria();
      }
      handleClick();
    }
    console.log(clickList);
  };
  const victoria = () => {
    document.getElementById("score").innerText = "You Win!!";
  };
  return (
    <>
      <h1>Defeat every villain!</h1>
      <h1 id="score">Score: {score}</h1>

      <div id="cardContainer">
        {arrayCards.map((ele) => {
          return (
            <div
              className="imgcontainer"
              index={ele}
              onClick={(ele) => checkScore(ele.currentTarget)}
            >
              <img
                src={cardList[ele]}
                width="100px"
                height="150px"
                alt="1"
                className="cardImg"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
