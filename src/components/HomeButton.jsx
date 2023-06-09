import Home from "../assets/homelogo.png";

const HomeButton = () => {
  return (
    <button className="home-button">
      <img src={Home} alt="Home" />
    </button>
  );
};

export default HomeButton;
