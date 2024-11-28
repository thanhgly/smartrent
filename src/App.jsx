import "./App.css";
import Header from "./Header";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <lottie-player
          src="https://lottie.host/6af8e4cd-ab17-42d3-bf4f-46097b7526cf/5UEkGw9Qfh.json"
          background="transparent"
          speed="2"
          style={{ width: "50px", height: "50px" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
      </div>
      <Header />
    </>
  );
}

export default App;
