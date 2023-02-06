import MenuItems from "./MenuItems";

const Content = ({ data }) => {
  return (
    <div className="content">
      <div className="menu">
        {data.categories.map((category, index) => {
          if (index < 6) {
            return <MenuItems key={index} category={category} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Content;
