const Item = ({ meal }) => {
  return (
    <div className="meal-card">
      <div className="meal-infos">
        <div className="meal-text">
          <h3>{meal.title}</h3>
          <p className="meal-desc"> {meal.description}</p>
          <div className="item-infos">
            <span className="item-price">{meal.price}</span>
            <span className="itemp-popular">{meal.popular}</span>
          </div>
        </div>
        <div>
          <img className="meal-picture" src={meal.picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Item;
