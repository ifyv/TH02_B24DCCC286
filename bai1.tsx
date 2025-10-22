import { useState } from "react";
import axios from "axios";
import { write } from "fs";

const Bai1 = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data);
    } catch {
      alert("Không tìm thấy thành phố!");
    }
  };

  return (
    <div style={{  marginTop: "40px" }}>
      <h2>Bài 1 - Ứng dụng Thời tiết</h2>
      <input
        type="text"
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", width: "200px", marginRight: "8px" }}
      />
      <button onClick={handleSearch} style= {{backgroundColor: "#007bff", color:"white",border: "none",
    padding: "8px 16px",
    borderRadius: "5px"}}>Xem thời tiết</button>

      {weather && (
        <div style={{ marginTop: 20 }}>
          <p>Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
          <p>Tình trạng: {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default Bai1;

