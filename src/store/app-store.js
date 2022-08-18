import { createSlice, configureStore } from "@reduxjs/toolkit";
import image1 from "../images/villa1.jpg";
import image2 from "../images/villa2.jpg";
import image3 from "../images/villa3.jfif";
import image4 from "../images/villa4.jfif";
import image5 from "../images/flat.jpg";
import apartment from "../images/apartment.jpg";
import apartment1 from "../images/apartment1.jpg";
import house from "../images/House.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jfif";
import image11 from "../images/image11.jfif";
import image12 from "../images/image12.jpg";
import image13 from '../images/image13.jpg';
import image14 from "../images/image14.jfif";
import image15 from "../images/image15.jfif";
import image16 from "../images/image16.jfif";

const DUMMY_PROPERTIES = [
  {
    name: "Waverly Building",
    address: "24 Waverly Pl, NY, USA",
    rent: "2,200",
    beds: "4",
    type: "villa",
    bathrooms: "3",
    area: "9x30",
    popular: true,
    image: apartment1,
    location: "New York, USA",
  },
  {
    name: "Silver Towers ",
    address: "100 Bleecker St, NY, USA",
    rent: "2,300",
    beds: "2",
    type: "bungalow",
    bathrooms: "3",
    area: "12x20",
    popular: false,
    image: house,
    location: "New York, USA",
  },
  {
    name: "Faulkner Ave",
    address: "909 Woodland St. NY, USA",
    rent: "3,500",
    image: image3,
    beds: "4",
    type: "villa",
    bathrooms: "3",
    area: "20x10",
    popular: false,
    location: "New York, USA",
  },
  {
    name: "Zs Villa",
    address: "2821 Fort Cummins, NY, USA",
    rent: "3,590",
    type: "bungalow",
    image: image4,
    beds: "3",
    bathrooms: "3",
    area: "15x15",
    popular: true,
    location: "New York, USA",
  },
  {
    name: "Palm Harbor",
    address: "2699 Green valley, Highland Lake, NY",
    rent: "2,700",
    type: "villa",
    beds: "3",
    bathrooms: "2",
    area: "13x20",
    popular: true,
    image: image1,
    location: "New York, USA",
  },
  {
    name: "Beverly Springfield",
    address: "2821 Lake Sevilla, Palm Harbor, NY",
    rent: "2,700",
    beds: "4",
    type: "bungalow",
    bathrooms: "2",
    area: "40x8",
    popular: true,
    image: image2,
    location: "New York, USA",
  },
  {
    name: "scintel Towers ",
    address: "2901  yemen St, NY, USA",
    rent: "3,800",
    beds: "3",
    type: "villa",
    bathrooms: "1",
    area: "20x20",
    popular: true,
    image: image9,
    location: "New York, USA",
  },
  {
    name: "Riveria Palace",
    address: "A/Y-354, St. fortins gubback ,NY, USA",
    rent: "3,800",
    beds: "2",
    type: "bungalow",
    bathrooms: "3",
    area: "30x12",
    popular: false,
    image: image10,
    location: "New York, USA",
  },
  {
    name: "Laplace heights",
    address: "A-190/23, 12th George greens ,TX, USA",
    rent: "2,500",
    beds: "2",
    type: "villa",
    bathrooms: "4",
    area: "20x14",
    popular: true,
    image: image11,
    location: "Texas, USA",
  },
  {
    name: "Morena Towers",
    address: "D-400, Lincoln streets-10th ,TX, USA",
    rent: "2,300",
    beds: "2",
    type: "bungalow",
    bathrooms: "3",
    area: "25x10",
    popular: false,
    image: image12,
    location: "Texas, USA",
  },
  {
    name: "La-Costa Mansion",
    address: "2109, 5th Street , TX , USA",
    rent: "3,750",
    beds: "2",
    type: "villa",
    bathrooms: "3",
    area: "20x15",
    popular: true,
    image: image5,
    location: "Texas, USA",
  },
  {
    name: "East Bldg ",
    address: "239 Greene St, Texas, USA",
    rent: "3,900",
    beds: "2",
    type: "bungalow",
    bathrooms: "3",
    area: "20x13",
    popular: false,
    image: apartment,
    location: "Texas, USA",
  },
  {
  name: "Tikvah ",
  address: " 22 Washington Square N, Texas, TX 10011, USA",
  rent: "2,300",
  beds: "2",
  type: "villa",
  bathrooms: "3",
  area: "30x12",
  popular: false,
  image: image13,
  location: "Texas, USA",
},
  {
  name: "Pless Annex ",
  address: "26 Washington Pl, Texas, TX 10003, USA",
  rent: "2,480",
  beds: "2",
  type: "bungalow",
  bathrooms: "3",
  area: "30x15",
  popular: false,
  image: image14,
  location: "Texas, USA",
},
  {
  name: "Meyer Hall",
  address: "4 Washington Pl,Texas,TX 10003, USA",
  rent: "3,990",
  beds: "2",
  type: "villa",
  bathrooms: "3",
  area: "3T0x16",
  popular: false,
  image: image15,
  location: "Texas, USA",
},
  {
  name: "Wilf Hall",
  address: " 133 Macdougal St, Texas, TX 10012, USA",
  rent: "3,500",
  beds: "4",
  type: "bungalow",
  bathrooms: "3",
  area: "30x13",
  popular: true,
  image: image16,
  location: "Texas, USA",
  },
];

const propertySlice = createSlice({
  name: "Properties",
  initialState: { properties: DUMMY_PROPERTIES },
  reducers: {
    replaceAll(state, action) {
      state.properties = DUMMY_PROPERTIES;
    },
    filter(state, action) {
      const { location, type, price, area } = action.payload;
      const priceUpperLimit = parseInt(price.split("-")[1]);
      const priceLowerLimit = parseInt(price.split("-")[0]);
      const areaUpperLimit = parseInt(area.split("-")[1]);
      const areaLowerLimit = parseInt(area.split("-")[0]);
      console.log(priceUpperLimit);

      state.properties = DUMMY_PROPERTIES.filter((property) => {
        const propertyPrice = parseInt(property.rent.replace(/,/g, ""));
        const propertyArea =
          parseInt(property.area.split("x")[0]) *
          parseInt(property.area.split("x")[1]);

        if (
          (location ? property.location === location : true) &&
          (type ? property.type === type : true) &&
          (price
            ? priceLowerLimit <= propertyPrice &&
              propertyPrice <= priceUpperLimit
            : true) &&
          (area
            ? areaLowerLimit <= propertyArea && propertyArea <= areaUpperLimit
            : true)
        ) {
          return true;
        }
        return false;
      });
    },
  },
});

export const propertyActions = propertySlice.actions;

const propertyStore = configureStore({ reducer: propertySlice.reducer });
export default propertyStore;



