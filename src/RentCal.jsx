import { useState } from "react";
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
  };
  return (
    <form>
      <header>hoa don tien phong</header>
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
