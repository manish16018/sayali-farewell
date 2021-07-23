import { useState, useEffect } from "react";
import OptionTile from "./OptionTile";
import { Details as details } from "../../Utils/const1";

export default function GIFCard({ data }) {
  const Details = [...details]
  Details.sort( () => .5 - Math.random() );
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    document.querySelector(".container-gif").style.display = "none"
    setTimeout(() => {
      document.querySelector(".container-gif").style.display = "flex"
    },60)
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
    <div className="container-gif fade">
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
          ))
          }
        </div>
      ) : (
        <div className="card-container-desc">
          <h2> {data.Name}'s thoughts !! </h2>
          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: data.Comment }}
          ></p>
        </div>
      )}
    </div>
  );
}
