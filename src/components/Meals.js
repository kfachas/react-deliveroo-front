import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ data, values, setValues }) => {
  return (
    <>
      {data.map((elem, index) => {
        return (
          <div
            className="meals"
            key={elem.id}
            onClick={() => {
              const obj = { ...values };
              if (!obj.menu[elem.id]) {
                obj.menu[elem.id] = {
                  title: elem.title,
                  counter: 0,
                  price: Number(elem.price),
                };
              }
              obj.menu[elem.id].counter += 1;
              obj.total += Number(elem.price);
              setValues(obj);
            }}
          >
            <div>
              <h3>{elem.title}</h3>
              {elem.description !== "" && <p>{elem.description}</p>}
              <span
                style={{
                  fontSize: "17px",
                  lineHeight: "14px",
                  color: "#808484",
                }}
              >
                {elem.price} €{" "}
                <span
                  style={{
                    color: "orangered",
                    fontWeight: "bold",
                    fontSize: "17px",
                    lineHeight: "14px",
                  }}
                >
                  {elem.popular && (
                    <>
                      <FontAwesomeIcon icon="star" style={{ height: "14px" }} />{" "}
                      <span style={{ fontSize: "12px" }}>Populaire</span>
                    </>
                  )}
                </span>
              </span>
            </div>
            {elem.picture && <img src={elem.picture} alt="" />}
          </div>
        );
      })}
    </>
  );
};

export default Meals;
