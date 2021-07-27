import Meals from "./Meals";
const Categories = ({ data, values, setValues }) => {
  return (
    <div>
      {data.map((elem, index) => {
        return (
          elem.meals.length > 0 && (
            <section key={index}>
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
              <div className="categories">
                <Meals
                  data={elem.meals}
                  values={values}
                  setValues={setValues}
                />
              </div>
            </section>
          )
        );
      })}
    </div>
  );
};

export default Categories;
