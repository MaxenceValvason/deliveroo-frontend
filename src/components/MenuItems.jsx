import Item from "./Item";

const MenuItems = ({ category }) => {
  return (
    <div className="menu-items">
      <h2>{category.name}</h2>
      <div className="meal">
        {category.meals.map((meal) => {
          return <Item key={meal.id} meal={meal} />;
        })}
      </div>
    </div>
  );
};
export default MenuItems;
