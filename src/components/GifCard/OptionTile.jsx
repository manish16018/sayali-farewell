import { useEffect, useState } from "react";

export default function OptionTile({ name, rightAnswer, handler }) {
  const [check, setCheck] = useState(null)

  useEffect(()=>{
    setCheck(null)
  },[rightAnswer])

  const checkAnswer = () => {
    if (name === rightAnswer) {
      setCheck(true);
      handler();
    } else setCheck(false);
  };

  return (
    <div
      className={`option-tile ${
        check == null ? "default" : check ? "valid" : "invalid"
      }`}
      onClick={checkAnswer}
    >
      {name}
    </div>
  );
}
