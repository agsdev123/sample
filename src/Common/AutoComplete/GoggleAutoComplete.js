import React, { useState } from "react";
// import pin from "./../../Assets/pin.png";
import "./GoggleAutoComplete.scss";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
// import { withTranslation } from "react-i18next";

const GoogleAutoComplete = (props) => {
  // console.log(coordinates);
  const {  setFieldsValue, setSearchfilter } = props;

  const handleSelect = async (place) => {
    const results = await geocodeByAddress(place.description);
    const latLng1 = await getLatLng(results[0]);
    const city = place?.terms.slice(-3)[0]?.value;
    const statename = place?.terms.slice(-2)[0]?.value;
    const countryName = place?.terms.slice(-1)[0]?.value;
    const placeZipcode = results[0].address_components.slice(-1)[0].short_name;
    const { lat, lng } = latLng1;
    localStorage.setItem("PlaceName", place.description);
    const latLng = await getLatLng(results[0]);

    if (setSearchfilter) {
      setSearchfilter(prev=>({
        ...prev, 
        lat,
        long:lng,
      }))
    }
    // if (setLeadFieldsValue) {
    //   setLeadFieldsValue({
    //     l_location: {
    //       coordinates: [lat, lng],
    //     },
    //     l_address: {
    //       street: place.description,
    //       city,
    //       state: statename,
    //       country: countryName,
    //       zipCode: placeZipcode && placeZipcode.length > 4 ? placeZipcode : "",
    //     },
    //   });
    // }
  };

  const { street } = props.Addressdata?.location.address ?? {};

  return (
    <div className="AutocompletePlace-container">
      <GooglePlacesAutocomplete
        apiKey="AIzaSyCzj_ngf9JwrP93BG8jNoeFMfNv4ik6n5A"
        placeholder={props.placeholder}
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

export default (GoogleAutoComplete);
