import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import BeerCard from "../components/BeerCard";

const BeerCollection = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("Fehler beim Laden", err);
      });
  }, []);

  return (
    <section className="beer-collection">
      <article className="beer-cards-gallery">
        {data?.map((item, index) => (
          <div key={index} className="beer-card-wrapper">
            <Link to={`/beercollection/${item._id}`}>
              <BeerCard
                img={item.image_url}
                name={item.name}
                slogan={item.tagline}
                producer={item.contributed_by}
              />
            </Link>
          </div>
        ))}
      </article>
      <NavBar />
    </section>
  );
};

export default BeerCollection;
