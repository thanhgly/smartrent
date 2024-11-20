import mockData from "./data";
import ExportIcon from "./icons/exportIcon";
const Dashboard = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Address</th>
          <th>Unit</th>
          <th>Tenant</th>
          <th>Rent</th>
          <th>Prev Elec</th>
          <th>Curr Elec</th>
          <th>Bill Elec</th>
          <th>Prev Water</th>
          <th>Curr Water</th>
          <th>Bill Water</th>
          <th>Total</th>
          <th>Export?</th>
        </tr>
        {mockData.map((customer, index) => (
          <tr key={index}>
            <td>{mockData[index].address}</td>
            <td>{mockData[index].unit}</td>
            <td>{mockData[index].tenant}</td>
            <td>{mockData[index].rent}</td>
            <td>{mockData[index].prevElec}</td>
            <td>{mockData[index].currElec}</td>
            <td>{mockData[index].billElec}</td>
            <td>{mockData[index].prevWater}</td>
            <td>{mockData[index].currWater}</td>
            <td>{mockData[index].billWater}</td>
            <td>{mockData[index].total}</td>
            <td>
              <ExportIcon width={30} height={30} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Dashboard;
