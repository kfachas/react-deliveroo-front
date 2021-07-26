import Meals from "./Meals";

const Categories = ({ data }) => {
  return (
    <div>
      {data.map((elem, index) => {
        if (elem.meals.length === 0) {
          return <div key={index}></div>;
        }
        return (
          <>
            <h3
              className="titleMeals"
              style={{
                marginBottom: "20px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {elem.name}
            </h3>
            <div key={index} className="categories">
              <Meals data={elem.meals} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
