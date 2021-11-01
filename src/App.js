import Nav from "./components/Nav";
import Search from "./components/Search";
import List from "./components/List";
import axios from "axios";
import { useState, useCallback } from "react";

const App = () => {
  const [movieItem, setMovieItem] = useState([]);

  const onInsert = useCallback(async (movieName) => {
    try {
      let res = await axios.get(
        `http://localhost:3001/search/movie?query=${movieName}`
      );
      setMovieItem((movieItem) => res.data.items); // 받은 데이터로 최신 상태 변경
    } catch (e) {
      console.log("error => " + e);
    }
  }, []);

  return (
    <>
      <Nav />
      <Search onInsert={onInsert} />
      <List movieItem={movieItem} />
    </>
  );
};

export default App;
