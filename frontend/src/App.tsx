import "./App.css";
import { useGetData } from "./service/sample.service";

function App() {
  const { data } = useGetData();

  return <div>{data}</div>;
}

export default App;
