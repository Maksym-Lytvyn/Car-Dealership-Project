const Popup = () => {
  return (
    <div>
      <div style={{ marginTop: 40 }}>
        <img alt="card-mage" />
        <div>
          <h2>The name of the brand</h2>
          <div>
            <p>City</p>
            <p>Country</p>
            <p>Id: </p>
            <p>Year: </p>
            <p>Type: </p>
            <p>Fuel Consumption: </p>
            <p>Engine Size: </p>
          </div>

          <p>Description</p>
        </div>

        <div>
          <h3>Accessories and functionalities:</h3>
          <div>
            <p>Accessory</p>
            <p>Accessory</p>
            <p>Accessory</p>
            <p>Accessory</p>
            <p>Accessory</p>
            <p>Accessory</p>
          </div>
        </div>

        <div>
            <h3>Rental Conditions: </h3>
            <div>
                <p>Condition</p>
                <p>Condition</p>
                <p>Condition</p>
                <p>Condition</p>
                <p>Condition</p>
            </div>
        </div>
        <a >Rental car</a>
      </div>
    </div>
  );
};

export default Popup;
