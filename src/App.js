import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
        const [word, setWord] = useState("");
        const [meanings, setMeanings] = useState([]);

  const dictionaryapi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
//       console.log(data.data);
      setMeanings(data.data)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
          dictionaryapi();
  }, [])
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
