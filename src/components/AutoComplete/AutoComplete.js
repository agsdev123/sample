import React, { useState } from "react";
// import pin from "./../../Assets/pin.png";
import "./AutoComplete.scss";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { withTranslation } from "react-i18next";

const AutoComplete = (props) => {
  console.log(props);
  // const [address, setAddress] = useState(null);
  // const [coordinates, setCoordinates] = React.useState({
  //   lat: null,
  //   lng: null,
  // });

  const { t, address, setFieldsValue, location, setaddress } = props;

  const handleSelect = async (place) => {
    const results = await geocodeByAddress(place.description);
    const latLng1 = await getLatLng(results[0]);
    const city = place?.terms.slice(-3)[0]?.value;
    const statename = place?.terms.slice(-2)[0]?.value;
    const countryName = place?.terms.slice(-1)[0]?.value;
    const placeZipcode = results[0].address_components.slice(-1)[0].short_name;
    const { lat, lng } = latLng1;
    const latLng = await getLatLng(results[0]);
    console.log("latLng", latLng.lat);
    localStorage.setItem("placelat", latLng.lat);
    localStorage.setItem("placelong", latLng.lng);

    if (setFieldsValue) {
      setFieldsValue({
        [location]: {
          coordinates: [lat, lng],
        },
        [address]: {
          street: place.description,
          city,
          state: statename,
          country: countryName,
          zipCode: placeZipcode && placeZipcode.length > 4 ? placeZipcode : "",
        },
      });
    }

    if (setaddress) {
      setaddress((prev) => ({
        ...prev,
        [address]: {
          street: place.description,
          city: statename,
          zipCode: placeZipcode && placeZipcode.length > 4 ? placeZipcode : "",
          country: countryName,
        },
        [location]: {
          coordinates: [lat, lng],
        },
      }));
    }
  };

  const { street } = props.Addressdata?.location.address ?? {};

  return (
    <div className="AutocompletePlace-container">
      <GooglePlacesAutocomplete
        apiKey="AIzaSyCzj_ngf9JwrP93BG8jNoeFMfNv4ik6n5A"
        placeholder={props.placeholder ? props.placeholder : t("address")}
        initialValue={props.placeName && props.placeName}
        // value={address}
        // onChange={setAddress}
        onSelect={handleSelect}
        // autocompletionRequest={{
        //   componentRestrictions: {
        //     country: ["ph"]
        //   }
        // }}
      />
    </div>
  );
};

export default withTranslation()(AutoComplete);
