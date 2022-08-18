import CropRotateIcon from "@mui/icons-material/CropRotate";
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedIcon from "@mui/icons-material/Bed";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function PropertyItem(props) {
  const ClickHandler = () => {
    console.log("hi");
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
      <div className="c-card block  shadow-md hover:shadow-xl rounded-lg overflow-hidden bg-white">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={props.details.image}
            alt=""
          />
        </div>
        <div className="p-2 ">
          <span className="Popular pr-2 bg-blue-600 text-white rounded-md font-semibold uppercase tracking-wide text-xs flex items-center w-fit">
              <AutoAwesomeIcon className="py-1 " />
          {props.details.popular ? 'Popular' :'Recently Built'}
            </span>
          <div className="my-2 flex items-center ">
            <span className="font-bold text-xl text-blue-600">
              {` $${props.details.rent}`}
            </span>
            &nbsp;
            <span className="text-sm font-semibold text-blue-400">
              /month
            </span>
            &nbsp;
            <div className="ml-auto ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  text-blue-600 hover:fill-blue-600 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={ClickHandler}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
          <h2 className="my-2  font-bold text-2xl">{props.details.name}</h2>
          <p className="text-sm text-gray-500">{props.details.address}</p>
        </div>
        <div className="p-2 border-t text-xs text-gray-700 flex justify-between">
          <span className="ml-1 text-gray-600 flex items-center ">
            <BedIcon className="text-blue-600 mr-1" />
            {`${props.details.beds} beds`}
          </span>
          <span className="ml-1 text-gray-600 flex items-center ">
            <BathtubOutlinedIcon className="text-blue-600 mr-1" />
            {`${props.details.bathrooms} Bathrooms`}
          </span>
          <span className="ml-1 text-gray-600 flex items-center ">
            <CropRotateIcon className="text-blue-600 mr-1" />
            {`${props.details.area} m2`}
          </span>
        </div>
      </div>
    </div>
  );
}
export default PropertyItem;
