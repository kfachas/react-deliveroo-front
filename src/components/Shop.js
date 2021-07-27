const Shop = ({ values, setValues }) => {
  return (
    <div className="shop">
      <button className="valid">Valider mon panier</button>

      {Number(values.total) === 0 ? (
        <span>Le panier est vide</span>
      ) : (
        <ul>
          {values.listId.map((elem, index) => {
            const obj = { ...values };
            console.log(elem);
            return (
              obj.menu[elem].counter !== 0 && (
                <li key={index}>
                  <button
                    onClick={() => {
                      obj.menu[elem].counter -= 1;
                      obj.total -= obj.menu[elem].price;
                      setValues(obj);
                    }}
                  >
                    -
                  </button>
                  {values.menu[elem].counter}
                  <button
                    onClick={() => {
                      obj.menu[elem].counter += 1;
                      obj.total += obj.menu[elem].price;
                      setValues(obj);
                    }}
                  >
                    +
                  </button>
                  {values.menu[elem].title}
                  {values.menu[elem].price} €
                </li>
              )
            );
          })}
          <li>Sous-total: {values.total.toFixed(2)}</li>
          <li>Frais de livraison : 2,50€ </li>
          <span>Total :{(values.total + 2.5).toFixed(2)} €</span>
        </ul>
      )}
    </div>
  );
};

export default Shop;
