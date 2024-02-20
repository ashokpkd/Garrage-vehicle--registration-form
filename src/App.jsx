import { useRef, useState } from "react";

function App() {
  const [vehicleData, setVehicleData] = useState({
    vehicleName: "",
    vehicleModel: "",
    vehicleNumber: "",
    vehicleYear: "",
    vehicleType: "",
    collectedItems: [],
    vehicleMake: "",
    defects: "",
    attachments: "",
  });

  const fileInpRef = useRef(null);
  const handleInpFileChange = () => {
    const file = fileInpRef.current.files[0];
    setVehicleData((prev) => ({
      ...prev,
      attachments: file,
    }));
  };
  const handleOnchange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    if (type === "checkbox") {
      const items = [...vehicleData.collectedItems];

      if (checked) {
        items.push(name);
      } else {
        const index = items.indexOf(name);
        if (index > -1) {
          items.splice(index, 1);
        }
      }
      setVehicleData((prev) => ({ ...prev, collectedItems: items }));
    } else {
      setVehicleData((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    }
  };
  const handleOnsubmit = (e) => {
    e.preventDefault();
    console.log("vehicleData :", vehicleData);
  };
  return (
    <div className="flex w-full justify-center items-center py-20 bg-black h-full">
      <form className=" px-3 md:w-[30%] mx-auto" onSubmit={handleOnsubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Vehicle Name
          </label>
          <input
            type="text"
            id="vehicleName"
            value={vehicleData.vehicleName}
            name="vehicleName"
            onChange={handleOnchange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Vehicle Name"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Vehicle Model
          </label>
          <input
            type="text"
            value={vehicleData.vehicleModel}
            name="vehicleModel"
            id="vehicleModel"
            onChange={handleOnchange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            placeholder="Vehicle Model"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Vehicle Number
          </label>
          <input
            type="text"
            value={vehicleData.vehicleNumber}
            name="vehicleNumber"
            id="vehicleNumber"
            onChange={handleOnchange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            placeholder="Vehicle number"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Vehicle Year
          </label>
          <input
            type="date"
            value={vehicleData.vehicleYear}
            name="vehicleYear"
            id="vehicleYear"
            onChange={handleOnchange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Vehicle type
          </label>

          <div className="flex items-center mb-4">
            <input
              id="car"
              type="radio"
              checked={vehicleData.vehicleType === "Car"}
              value={"Car"}
              name="vehicleType"
              onChange={handleOnchange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Car
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="bike"
              type="radio"
              value="Bike"
              name="vehicleType"
              checked={vehicleData.vehicleType === "Bike"}
              onChange={handleOnchange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Bike
            </label>
          </div>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Items Collected
          </label>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="Helmet"
              id="helmet"
              checked={vehicleData.collectedItems.includes("Helmet")}
              onChange={handleOnchange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Helmet
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="Key"
              id="key"
              checked={vehicleData.collectedItems.includes("Key")}
              onChange={handleOnchange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Key
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="Petrol"
              id="petrol"
              checked={vehicleData.collectedItems.includes("Petrol")}
              onChange={handleOnchange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              petrol
            </label>
          </div>
        </div>
        <div className="mb-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Vehicle to make
          </label>
          <select
            name="vehicleMake"
            value={vehicleData.vehicleMake}
            onChange={handleOnchange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={"Choose a vehicle"}>Choose a vehicle</option>
            {vehicleData.vehicleType === "Car" ? <option value={"Car"}>Car</option> : null}
            {vehicleData.vehicleType === "Bike"? <option value={"Bike"}>Bike</option> : null }
          </select>
        </div>
        <div className=" mb-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Defects
          </label>
          <select
            name="defects"
            value={vehicleData.defects}
            onChange={handleOnchange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={"Choose defect"}>Choose defect</option>
            <option value={"Dead Batery"}>Dead Batery</option>
            <option value={"Flat Tyres"}>Flat Tyres</option>
            <option value={"Over Heating"}>Over Heating</option>
            <option value={"Starting Trouble"}>Starting Trouble</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Attachments
          </label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            ref={fileInpRef}
            onChange={handleInpFileChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5 flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
