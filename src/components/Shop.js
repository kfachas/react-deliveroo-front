const Shop = ({ values, setValues }) => {
  return (
    <div
      className="shop"
      style={{
        height: values.total === 0 && "150px",
      }}
    >
      <button id="btn" className={values.total === 0 ? "notvalid" : "valid"}>
        Valider mon panier
      </button>

      {Number(values.total) === 0 ? (
        <span>Le panier est vide</span>
      ) : (
        <div className="listShop">
          <ul>
            {values.listId.map((elem, index) => {
              const obj = { ...values };
              console.log(elem);
              return (
                obj.menu[elem].counter !== 0 && (
                  <li key={index}>
                    <div>
                      <button
                        onClick={() => {
                          obj.menu[elem].counter -= 1;
                          obj.total -= obj.menu[elem].price;
                          setValues(obj);
                        }}
                      >
                        -
                      </button>
                      <span style={{ margin: "0px 5px" }}>
                        {values.menu[elem].counter}
                      </span>
                      <button
                        onClick={() => {
                          obj.menu[elem].counter += 1;
                          obj.total += obj.menu[elem].price;
                          setValues(obj);
                        }}
                      >
                        +
                      </button>
                      <span> {values.menu[elem].title}</span>
                    </div>
                    <div>{values.menu[elem].price} €</div>
                  </li>
                )
              );
            })}
          </ul>
          <div>
            <div>
              <span>Sous-total:</span>
              <span>{values.total.toFixed(2)} €</span>
            </div>
            <div>
              <span>Frais de livraison :</span>
              <span>2,50 €</span>
            </div>
            <div>
              <span>Total :</span>
              <span>{(values.total + 2.5).toFixed(2)} €</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
