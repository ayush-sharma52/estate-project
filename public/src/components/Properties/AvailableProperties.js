import { useSelector } from "react-redux";
import PropertyItem from "./PropertyItem";

function AvailableProperties() {
  const propertiesList = useSelector((state) => state.properties);
  let content;

  if (propertiesList.length > 0) {
    content = propertiesList.map((property) => (
      <PropertyItem key={property.address} details={property} />
    ));
  }
  else{
    content=<p className='w-full p-4 text-bold'>No properties matched for the current set of filters, Please alter them to match some properties</p>
  }
 
  return (
    <>
      <div className="antialiased  text-gray-900 font-sans ">
        <div className="container mx-auto ">
          <div className="flex flex-wrap -mx-4">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}

export default AvailableProperties;
