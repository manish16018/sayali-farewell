import { Details } from "../../Utils/const1";
import Profile from "../Profile";
import "./styles.scss";
import GIFCard from "../GifCard";
import { useState } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Profile />
      <div className="Home">
        <GIFCard
          data={Details[index]}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
};

export default Home;
