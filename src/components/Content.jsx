import MenuItems from "./MenuItems";

const Content = ({ data }) => {
  return (
    <div className="content">
      <div className="menu">
        {data.categories.map((category, index) => {
          return <MenuItems key={index} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Content;
