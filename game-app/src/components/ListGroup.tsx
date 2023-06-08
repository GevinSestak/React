function ListGroup() {
  let items = ["Rakvere", "Tallinn", "Tartu"];
  items = [];
  const getMessage = () => {
    return items.length === 0 ? <p>No items</p> : null;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage(1)}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
