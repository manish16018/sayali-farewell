import "./index.scss";

export default function Arrows(props) {
  return (
    <div className="arrow-container">
      <p className="prev" onClick={() => props.setIndex(-1)}>
        &#10094;
      </p>
      <div className="arrow-gifs">
        {props.children}
      </div>
      <p className="next" onClick={() => props.setIndex(1)}>
        &#10095;
      </p>
    </div>
  );
}
