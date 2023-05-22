import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import { MarkerF, InfoWindowF, InfoBoxF } from "@react-google-maps/api";
import customMarker from "../../images/acci.png";
import { formatRelative } from "date-fns";
import acci from "../../data.json";
import "@reach/combobox/styles.css";
import Card_Accidents from "./Card_Accidents";
// import mapStyles from "./mapStyles";
import accident_img from "../../images/accident-img.png"
import { MdLocationOn } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { BsFillInfoCircleFill } from 'react-icons/bs';
const libraries = ["places"];
const mapContainerStyle = {
    height: "90vh",
    width: "100vw",
};
const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 26.689742349655745,
    lng: 88.43101736489807,
};

function Maps() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAObG5o48uk0MFpkCkpebOzF1vHt07M-TI",
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const [selectedAcci, setSelectedAcci] = React.useState(null);
    const [selectedAcciDet, setSelectedAcciDet] = React.useState(null);
    function details() {
        setSelectedAcciDet(selectedAcci)
        setSelectedAcci(null)
    }
    function details_close() {
        setSelectedAcciDet(null)
    }
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>
            <Search panTo={panTo} />
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                // onClick={onMapClick}
                onLoad={onMapLoad}
            > {
                    acci.data.map((acci) => {
                        return (
                            <div key={acci.id}>
                                <MarkerF
                                    position={{ lat: acci.x, lng: acci.y }}
                                    options={{ icon: customMarker }}
                                    onClick={() => {
                                        setSelectedAcci(acci);
                                    }}
                                />
                            </div>
                        );
                    })
                }
                {selectedAcci && (
                    <InfoWindowF

                        position={{
                            lat: selectedAcci.x,
                            lng: selectedAcci.y
                        }}
                        onCloseClick={() => {
                            setSelectedAcci(null)
                        }}
                    >

                        {/* <Card_Accidents title={selectedAcci.title} desc={selectedAcci.desc} no_injured={selectedAcci.NumberOfInjured} no_deaths={selectedAcci.NumberOfDeaths} date={selectedAcci.eventDate} time={selectedAcci.eventTime} /> */}
                        <div className="card-accidents">
                            <img
                                className="card-img-top"
                                src={accident_img}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7">
                                        <h6 className='f-20 inter mb-0'>
                                            {selectedAcci.title}
                                        </h6>
                                        <p className='fw-semibold f-12 light-grey'><span className='orange'><MdLocationOn /></span>
                                            Venus More, Siliguri</p>
                                    </div>
                                    <div className="col-5">
                                        <button className='button red-btn-outline' onClick={details}>Details</button>
                                    </div>
                                </div>
                                <p className='habibi f-12 grey lh-sm'>{selectedAcci.desc}</p>
                                <p className='habibi f-12 light-grey lh-sm mb-0'>Number of injured :{selectedAcci.NumberOfInjured}</p>
                                <p className='habibi f-12 light-grey lh-sm'>Number of deaths : {selectedAcci.NumberOfDeaths} </p>
                                <p className='fw-semibold f-12 dark-grey mb-0'><span><SlCalender /></span>
                                    &nbsp; {selectedAcci.eventDate}&nbsp; <span><AiOutlineClockCircle /></span>&nbsp; {selectedAcci.eventTime} </p>
                            </div>
                        </div>

                    </InfoWindowF>
                )}
            </GoogleMap>
        </div>
    );
}


function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.6532, lng: () => -79.3832 },
            radius: 100 * 1000,
        },
    });

    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
            console.log(lat, lng)
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    return (
        <div className="">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Search your location"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" &&
                            data.map(({ id, description }) => (
                                <ComboboxOption key={id} value={description} />
                            ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}
export default Maps;
