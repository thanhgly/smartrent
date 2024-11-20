import mockData from "./data";
import jsPDF from "jspdf";
// import ExportIcon from "./icons/exportIcon";
const Dashboard = () => {
  const handleExport = (customer, action) => {
    const doc = new jsPDF();

    doc.text("Receipt", 10, 10);
    doc.text(`Tenant: ${customer.tenant}`, 10, 20);
    doc.text(`Address: ${customer.address}`, 10, 30);
    doc.text(`Unit: ${customer.unit}`, 10, 40);
    doc.text(`Rent: ${customer.rent}`, 10, 50);
    doc.text(`Electricity Bill: ${customer.billElec}`, 10, 60);
    doc.text(`Water Bill: ${customer.billWater}`, 10, 70);
    doc.text(`Total: ${customer.total}`, 10, 80);

    if (action === "save") {
      doc.save(`receipt_${customer.tenant}.pdf`);
    } else if (action === "print") {
      const pdfBlob = doc.output("blob");
      const url = URL.createObjectURL(pdfBlob);

      const printWindow = window.open(url, "_blank");
      if (printWindow) {
        printWindow.onload = () => {
          printWindow.print();
        };
      } else {
        alert("Unable to open print window. Please allow popups.");
      }
    }
  };
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
            <td>{customer.address}</td>
            <td>{customer.unit}</td>
            <td>{customer.tenant}</td>
            <td>{customer.rent}</td>
            <td>{customer.prevElec}</td>
            <td>{customer.currElec}</td>
            <td>{customer.billElec}</td>
            <td>{customer.prevWater}</td>
            <td>{customer.currWater}</td>
            <td>{customer.billWater}</td>
            <td>{customer.total}</td>
            <td>
              {/* <ExportIcon customer={customer} width={30} height={30} /> */}
              <button onClick={() => handleExport(customer, "save")}>
                Save as PDF
              </button>
              <button onClick={() => handleExport(customer, "print")}>
                Print
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Dashboard;
