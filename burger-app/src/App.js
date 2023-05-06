import Container from "./components/Container";
import BurgerList from "./components/Burger-list";
import { useEffect, useState } from "react";
import { API, URL } from "./instance";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBurgers = async () => {
      const res = await API.get(URL);
      setData(res.data);
    };
    getBurgers();
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, data);

  return (
    <div className="bg-orange-500 min-h-[100vh] py-10">
      <Container>
        <h1 className="text-center text-3xl text-white font-extrabold py-10">
          Burger App
        </h1>
        <BurgerList data={data} />
      </Container>
    </div>
  );
}

export default App;
