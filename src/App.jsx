import "./App.css";

function App() {
  return (
    <>
      <header>hoa don tien phong</header>
      <div>
        <input
          name="currentElecInput"
          placeholder="Số mới:"
          type="number"
          label
        ></input>
        <input
          name="prevElecInput"
          placeholder="Số cũ:"
          type="number"
          label
        ></input>
        <h3>Chênh lệch elec:</h3>
      </div>
      <div>
        <input
          name="currentWaterInput"
          placeholder="Số mới:"
          type="number"
          label
        ></input>
        <input
          name="prevWaterInput"
          placeholder="Số cũ:"
          type="number"
          label
        ></input>
        <h3>Chênh lệch water:</h3>
      </div>
      <div>
        <h4>
          Rent :<input placeholder="Tiền phòng:"></input>
        </h4>
        <h4>
          Tiền Điện: :<input placeholder="Tiền Điện:"></input>
        </h4>
        <h4>
          Tiền Nước:<input placeholder="Tiền Nước:"></input>
        </h4>
        <h4>
          Tiền Rác:<input placeholder="Tiền Rác:"></input>
        </h4>
        <h4>
          Tiền Phát Sinh:<input placeholder="Tiền Phát Sinh:"></input>
        </h4>
      </div>
    </>
  );
}

export default App;
