import { useState, useEffect } from "react";
import OptionTile from "./OptionTile";
import { Details } from "../../Utils/const1";

export default function GIFCard({ data }) {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    return () => {
        handler(false,0)
    };
  }, [data]);

  const handler = (flag=true, time=500) => {
    setTimeout(() => {
      setIsCorrect(flag);
    },(time))
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
        <div className="card-container-desc">
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
