import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meals = ({ data }) => {
  return (
    <>
      {data.map((elem, index) => {
        return (
          <div className="meals" key={index}>
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
