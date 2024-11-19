import mockData from "./data";
const Dashboard = () => {
  return (
    <table>
      <tr>
        <th>Address</th>
        <th>Unit</th>
        <th>Customer</th>
        <th>Rent</th>
        <th>Prev Elec</th>
        <th>Curr Elec</th>
        <th>Bill Elec</th>
        <th>Prev Water</th>
        <th>Curr Water</th>
        <th>Bill Water</th>
        <th>Total</th>
      </tr>
      {mockData.map((customer) => (
        <tr key={mockData.indexOf(customer)}>
          <td>{mockData[mockData.indexOf(customer)].address}</td>
          <td>{mockData[mockData.indexOf(customer)].unit}</td>
          <td>{mockData[mockData.indexOf(customer)].customer}</td>
          <td>{mockData[mockData.indexOf(customer)].rent}</td>
          <td>{mockData[mockData.indexOf(customer)].prevElec}</td>
          <td>{mockData[mockData.indexOf(customer)].currElec}</td>
          <td>{mockData[mockData.indexOf(customer)].billElec}</td>
          <td>{mockData[mockData.indexOf(customer)].prevWater}</td>
          <td>{mockData[mockData.indexOf(customer)].currWater}</td>
          <td>{mockData[mockData.indexOf(customer)].billWater}</td>
          <td>{mockData[mockData.indexOf(customer)].total}</td>
        </tr>
      ))}
    </table>
  );
};
export default Dashboard;
