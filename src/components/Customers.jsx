import CustomerItem from "./CustomerItem";

function Customers({ customers }) {
  return (
    <div className="customers">
      {/* {customers.map((item) => {
        return <CustomerItem></CustomerItem>;
      })} */}
      {customers.map((item) => (
        <CustomerItem item={item} key={item.id}></CustomerItem>
      ))}
    </div>
  );
}

export default Customers;
