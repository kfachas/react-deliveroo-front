const Shop = ({ values, setValues }) => {
  console.log(values.menu);
  return (
    <div className="shop">
      <button>Valider mon panier</button>

      {Number(values.total) === 0 ? (
        <span>Le panier est vide</span>
      ) : (
        <ul>
          {values.menu.map((elem, index) => {
            return (
              <li key={index}>
                {elem.counter}
                {elem.title}
                {elem.price} €
              </li>
            );
          })}
          <li>Sous-total: {values.total}</li>
          <li>Frais de livraison : 2,50€ </li>
          <span>Total :{values.total + 2.5} €</span>
        </ul>
      )}
    </div>
  );
};

export default Shop;
