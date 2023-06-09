import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import BeerCollection from "../assets/Beer Collection.png";
import RandomBeer from "../assets/Random Beer.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((randomBeer) => {
        setRandomBeer(randomBeer);
        console.log(randomBeer._id);
      });
  }, []);
  return (
    <section className="home-section">
      <Link to="/beercollection">
        <article className="all-beers">
          <img src={BeerCollection} alt="Beer Collection Img" />
          <h5>All Beers</h5>
        </article>
      </Link>
      <Link to={`/beercollection/${randomBeer._id}`}>
        <article className="random-beer">
          <img src={RandomBeer} alt="Random Beer Img" />
          <h5>Random Beer</h5>
        </article>
      </Link>
      <NavBar />
    </section>
  );
};

export default Home;
