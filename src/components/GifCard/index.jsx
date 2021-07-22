import { useState } from "react";
import OptionTile from "./OptionTile";
import { Details } from "../../Utils/const1";

export default function GIFCard({ data, setIndex }) {
  const [isCorrect, setIsCorrect] = useState(false);

  const handler = (flag = true) => {
    setIsCorrect(flag);
  };

  return (
    <div className="container-gif">
      <a
        className="prev"
        onClick={() => {
          setIndex(-1);
          handler(false);
        }}
      >
        &#10094;
      </a>
      <div className="container-gif-image">
        <img src={data.imgUrl} alt={data.alt} height="420px" widht="200px" />
      </div>
      {!isCorrect ? (
        <div className="options">
          {Details.map((ele) => (
            <OptionTile
              rightAnswer={data.Name}
              name={ele.Name}
              handler={handler}
            />
          ))}
        </div>
      ) : (
        <div className="card-container">
          <h2> My thoughts about You !! </h2>
          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: data.Comment }}
          ></p>
        </div>
      )}
      <a
        className="next"
        onClick={() => {
          setIndex(1);
          handler(false);
        }}
      >
        &#10095;
      </a>
    </div>
  );
}
