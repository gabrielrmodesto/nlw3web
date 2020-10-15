import React from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanags-map.css";
import Leafet from "leaflet";
import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leafet.icon({
	iconUrl: mapMarkerImg,
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2]
});

function OrphanagesMap() {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="Happy marker" />
					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>
				<footer>
					<strong>Cruzeiro</strong>
					<span>São Paulo</span>
				</footer>
			</aside>
			<Map
				center={[-22.5802038, -44.9605621]}
				zoom={15}
				style={{ width: "100%", height: "100%" }}
			>
				{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
				<TileLayer
					url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
				/>
				<Marker icon={mapIcon} position={[-22.5802038, -44.9605621]}>
				<Popup closeButton={false} minWidth={240} maxWidth={248} className="map-popup">
					Lar das crianças
					<Link to="">
						<FiArrowRight size={20} color="#FFF" />
					</Link>
				</Popup>
				</Marker>
				
			</Map>
			<Link to="" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	);
}

export default OrphanagesMap;
