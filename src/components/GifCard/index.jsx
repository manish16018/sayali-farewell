import { useState, useEffect } from "react";
import OptionTile from "./OptionTile";
import { Details } from "../../Utils/const1";

export default function GIFCard({ data, setIndex }) {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    console.log("In this one now");
    return () => {
      handler(false);
    };
  }, [data]);

  const handler = (flag = true) => {
    setIsCorrect(flag);
  };

  return (
    <div className="container-gif">
      <div className="container-gif-image">
        <img src={data.imgUrl} alt={data.alt} height="420px" widht="200px" />
      </div>
      {!isCorrect ? (
        <div className="options">
          {Details.map((ele) => (
            <OptionTile
              key={ele.id}
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
    </div>
  );
}
