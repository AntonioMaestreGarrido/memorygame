import "./styles.css";
import { CardContainer } from "./components/CardContainer";

export default function App() {
  return (
    <div className="App">
      <CardContainer arraySize={5} />
    </div>
  );
}
