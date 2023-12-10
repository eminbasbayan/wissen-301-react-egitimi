function CustomerItem({ item }) {
  const { name, age, city } = item;
  
  return (
    <div className="customer-item">
      <span>Name: {name}</span> <br />
      <span>Age: {age} </span> <br />
      <span>City: {city} </span>
      <hr />
    </div>
  );
}

export default CustomerItem;
