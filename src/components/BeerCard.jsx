const BeerCard = (props) => {
  return (
    <div className="beer-card">
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
    </div>
  );
};

export default BeerCard;
