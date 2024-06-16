import "./App.css";
import AddSession from "./components/addSession";
import Sessions from "./components/sessions";

function App() {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-3xl font-bold w-full text-left mb-8">
          My Sessions
        </h1>
        <AddSession />
      </div>
      <Sessions />
    </>
  );
}

export default App;
