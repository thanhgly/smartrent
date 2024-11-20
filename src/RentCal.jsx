import { useState } from "react";
import mockData from "./data";
export default function RentCal() {
  const [currElec, setCurrElec] = useState("");
  const [prevElec, setPrevElec] = useState("");
  const [elecBill, setElecBill] = useState(0);
  const [currWater, setCurrWater] = useState("");
  const [prevWater, setPrevWater] = useState("");
  const [waterBill, setWaterBill] = useState(0);
  const [rent, setRent] = useState("");
  const [garbage, setGarbage] = useState("");
  const [misc, setMisc] = useState("");
  const [total, setTotal] = useState(0);
  const [addr, setAddr] = useState("");
  const [unit, setUnit] = useState("");
  const [tenant, setTenant] = useState("");
  function handleAddrChange(e) {
    setAddr(e.target.value);
  }
  function handleUnitChange(e) {
    setUnit(e.target.value);
  }
  function handleTenantChange(e) {
    setTenant(e.target.value);
  }
  function handleCurrElecChange(e) {
    setCurrElec(e.target.value);
    calculateElecBill(prevElec, e.target.value);
  }
  function handlePrevElecChange(e) {
    setPrevElec(e.target.value);
    calculateElecBill(e.target.value, currElec);
  }
  const calculateElecBill = (prevElec, currElec) => {
    if (prevElec && currElec) {
      const bill = (currElec - prevElec) * 4000;
      setElecBill(bill);
    }
  };
  const handleCurrWaterChange = (e) => {
    setCurrWater(e.target.value);
    calculateWaterBill(prevWater, e.target.value);
  };
  const handlePrevWaterChange = (e) => {
    setPrevWater(e.target.value);
    calculateWaterBill(e.target.value, currWater);
  };
  const calculateWaterBill = (prevWater, currWater) => {
    const bill = (currWater - prevWater) * 18000;
    setWaterBill(bill);
  };
  const handleRentChange = (e) => {
    setRent(e.target.value);
  };
  const handleGarbageChange = (e) => {
    setGarbage(e.target.value);
  };
  const handleMiscChange = (e) => {
    setMisc(e.target.value);
  };
  let categories = [waterBill, elecBill, rent, garbage, misc];
  const calculateTotal = (e) => {
    e.preventDefault();

    const totalSum = categories.reduce(
      (acc, category) => acc + (parseFloat(category) || 0),
      0
    );
    setTotal(totalSum);
    const newEntry = {
      address: addr,
      unit: unit,
      tenant: tenant,
      rent: rent,
      prevElec: prevElec,
      currElec: currElec,
      billElec: elecBill,
      prevWater: prevWater,
      currWater: currWater,
      billWater: waterBill,
      total: total,
    };
    mockData.push(newEntry);
    console.log("mock updated:", mockData);
  };
  return (
    <form>
      <header>hoa don tien phong</header>
      <div>
        <label>
          Dia chi:
          <input
            placeholder="Dia chi"
            value={addr}
            onChange={handleAddrChange}
          ></input>
        </label>
        <label>
          Unit
          <input
            placeholder="Unit"
            value={unit}
            onChange={handleUnitChange}
          ></input>
        </label>
        <label>
          Tenant
          <input
            placeholder="Tenant"
            value={tenant}
            onChange={handleTenantChange}
          ></input>
        </label>
      </div>
      <div>
        <label>
          Chênh lệch elec:
          <input
            value={currElec}
            onChange={handleCurrElecChange}
            placeholder="Số mới:"
            type="number"
          ></input>
          <input
            value={prevElec}
            onChange={handlePrevElecChange}
            name="prevElecInput"
            placeholder="Số cũ:"
            type="number"
          ></input>
        </label>
      </div>
      <div>
        <label>
          Chênh lệch water:
          <input
            value={currWater}
            onChange={handleCurrWaterChange}
            name="currentWaterInput"
            placeholder="Số mới:"
            type="number"
          ></input>
          <input
            value={prevWater}
            onChange={handlePrevWaterChange}
            name="prevWaterInput"
            placeholder="Số cũ:"
            type="number"
          ></input>
        </label>
      </div>
      <div>
        <h4>
          Rent :
          <input
            value={rent}
            onChange={handleRentChange}
            name="rent"
            type="number"
            placeholder="Tiền phòng:"
          ></input>
        </h4>
        <h4>Tiền Điện: {elecBill}</h4>
        <h4>Tiền Nước: {waterBill}</h4>
        <h4>
          Tiền Rác:
          <input
            value={garbage}
            onChange={handleGarbageChange}
            name="trashBill"
            type="number"
            placeholder="Tiền Rác:"
          ></input>
        </h4>
        <h4>
          Tiền Phát Sinh:
          <input
            value={misc}
            onChange={handleMiscChange}
            name="miscellaneous"
            type="number"
            placeholder="Tiền Phát Sinh:"
          ></input>
        </h4>
      </div>
      <button onClick={calculateTotal}>Submit</button>
      <div>{total}</div>
    </form>
  );
}
