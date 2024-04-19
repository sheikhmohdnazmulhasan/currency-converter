import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-5 lg:px-0 flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
