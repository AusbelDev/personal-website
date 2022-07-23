import "./StartButton.css";

const StartButton = () => {
  return (
    <div id="container">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Go To Site</span>
      </button>
    </div>
  );
};

export default StartButton;
