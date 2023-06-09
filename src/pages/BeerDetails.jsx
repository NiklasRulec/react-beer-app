import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";

const BeerDetails = () => {
  const [beerDetails, setBeerDetails] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerid}`)
      .then((res) => res.json())
      .then((beerDetails) => {
        setBeerDetails(beerDetails);
        console.log(beerDetails);
      })
      .catch((err) => {
        console.log("Fehler beim Laden", err);
      });
  }, []);

  return (
    <section className="beer-details">
      <img src={beerDetails.image_url} alt={beerDetails.name} />
      <div className="text-section">
        <h1>{beerDetails.name}</h1>
        <h2>{beerDetails.tagline}</h2>
        <h2>{beerDetails.contributed_by}</h2>
        <p>First brewed : {beerDetails.first_brewed}</p>
        <p>Attenuation Level : {beerDetails.attenuation_level}</p>
        <h3>{beerDetails.description}</h3>
      </div>
      <Link to="/beercollection">
        <BackButton />
      </Link>
      <NavBar />
    </section>
  );
};

export default BeerDetails;
