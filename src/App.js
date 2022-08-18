import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import AvailableProperties from './components/Properties/AvailableProperties';
import FilterBar from './components/FilterBar'

function App() {
  return (
    <div className="bg-slate-100 ">
      <Nav />
      <div className="w-4/5 mx-auto pb-12">
       <Header/>
       <FilterBar/>
       <AvailableProperties/>
      </div>
      </div>
  );
}

export default App;
