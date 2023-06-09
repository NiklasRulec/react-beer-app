import Back from "../assets/backarrow.png";

const BackButton = () => {
  return (
    <button className="back-button">
      <img src={Back} alt="Back" />
    </button>
  );
};

export default BackButton;
