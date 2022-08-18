import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { propertyActions } from "../store/app-store";

function FilterBar() {
  const dispatch = useDispatch();
  const [inputStates, setInputStates] = useState({
    locationState: "",
    typeState: "",
    priceState: "",
    areaState: "",
  });

  const resetHandler = () => {
    setInputStates({
      locationState: "",
      typeState: "",
      areaState: "",
      priceState: "",
    });
    dispatch(propertyActions.replaceAll());
  };

  const submitHandler = () => {
    const filterData = {
      location: inputStates.locationState,
      type: inputStates.typeState,
      price: inputStates.priceState,
      area: inputStates.areaState,
    };
    dispatch(propertyActions.filter(filterData));
  };

  return (
    <div className="w-full shadow p-2 mb-5 rounded-md bg-white">
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5  my-4">
        <div className="flex flex-col  px-4  border-r border-r-gray-300">
          <label className="font-medium text-md text-gray-400">Location</label>
          <select
            value={inputStates.locationState}
            onChange={(event) => {
              setInputStates((prev) => {
                return { ...prev, locationState: event.target.value };
              });
            }}
            className="focus:outline-none block w-full font-extrabold hover:cursor-pointer"
          >
            <option value="">Select</option>
            <option value="New York, USA">New York, USA</option>
            <option value="Texas, USA">Texas, USA</option>
            {/* <option value="Florida, USA">Florida, USA</option>
            <option value="Las Vegas, USA">Las Vegas, USA</option> */}
          </select>
        </div>

        <div className="flex flex-col  px-4 border-r border-r-gray-300">
          <label className="font-medium block w-full text-md text-gray-400">
            Area(sq. mtrs)
          </label>
          <select
            value={inputStates.areaState}
            onChange={(event) => {
              setInputStates((prev) => {
                return { ...prev, areaState: event.target.value };
              });
            }}
            className="focus:outline-none block w-full font-extrabold hover:cursor-pointer"
          >
            <option value="">Select</option>
            <option value="200-300">200 - 300</option>
            <option value="300-400">300 - 400</option>
            {/* <option value="400-500">400 - 500</option> */}
          </select>
        </div>

        <div className="flex flex-col px-4  border-r border-r-gray-300">
          <label className="font-medium text-md text-gray-400">Price</label>
          <select
            value={inputStates.priceState}
            onChange={(event) => {
              setInputStates((prev) => {
                return { ...prev, priceState: event.target.value };
              });
            }}
            className="focus:outline-none block w-full font-extrabold hover:cursor-pointer"
          >
            <option value="">Select</option>
            {/* <option value="1000-2000">$1000 - $2000</option> */}
            <option value="2000-3000">$2000 - $3000</option>
            <option value="3000-4000">$3000 - $4000</option>
          </select>
        </div>

        <div className="flex flex-col px-4  border-r border-r-gray-300">
          <label className="font-medium text-md text-gray-400">
            Property Type
          </label>
          <select
            value={inputStates.typeState}
            onChange={(event) => {
              setInputStates((prev) => {
                return { ...prev, typeState: event.target.value };
              });
            }}
            className="focus:outline-none block w-full font-extrabold hover:cursor-pointer"
          >
            <option value="">Select</option>
            <option value="villa">Villa</option>
            <option value="bungalow">Bungalow</option>
            {/* <option value="flat">Flat</option> */}
          </select>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={submitHandler}
            className="px-6 py-0 bg-blue-600 hover:bg-blue-800 text-gray-100 text-md font-medium rounded-md  mt-4 xl:mt-0"
          >
            Search
          </button>
          <button
            onClick={resetHandler}
            className="px-6 py-0 bg-gray-300 hover:bg-gray-400 text-blue-600 text-md font-medium rounded-md  mt-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default FilterBar;
