import { Details } from "../../Utils/const1";
import Profile from "../Profile";
import "./styles.scss";
import GIFCard from "../GifCard";
import { useState } from "react";
import Arrows from '../Arrows';

const Home = () => {
  const length = Details.length;
  let [index, setIndex] = useState(0);
  const setDataIndex = (inc) => setIndex((index = Math.abs(index + length + inc) % length));

  return (
    <div>
      <Profile />
      <Arrows setIndex={setDataIndex}>
        <div className="Home">
          <GIFCard data={Details[index]} setIndex={setDataIndex} />
        </div>
      </Arrows>
    </div>
  );
};

export default Home;
