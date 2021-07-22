import { useState } from "react";
import OptionTile from "./OptionTile";
import { Details } from "../../Utils/const1";

export default function GIFCard({ data, setIndex }) {
  const [isCorrect, setIsCorrect] = useState(false);

  const handler = () => {
    setIsCorrect(true);
  };

  return (
    <div className="container-gif">
      <div className="">
        <img src={data.imgUrl} alt={data.alt} height="500px" />
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
        <div className="card-container"></div>
      )}
    </div>
  );
}
