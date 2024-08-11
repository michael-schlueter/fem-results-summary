import Result from "./Result";
import Summary from "./Summary";

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="grid grid-cols-[minmax(auto, 736px)] md:grid-cols-[minmax(auto,368px)_minmax(auto,368px)] md:grid-rows-[1fr] md:rounded-[32px] md:shadow-custom">
        <Result />
        <Summary />
      </main>
    </div>
  );
}

export default App;


