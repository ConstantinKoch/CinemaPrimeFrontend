import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import './MapContainer.css';

const mapStyles = {
	width: '400px',
	height: '400px',
	overflowY: 'hidden',
	overflowX: 'hidden'
};

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
	};

	onMarkerClick = (props, marker) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onMapClicked = () => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	render() {
		return (
			<div className="map">
				<Map
					resetBoundsOnResize={true}
					style={mapStyles}
					google={this.props.google}
					initialCenter={{
						lat: 49.4742736,
						lng: 8.5323109
					}}
					zoom={14}
					onClick={this.onMapClicked}
				>
					<Marker onClick={this.onMarkerClick} />
					<InfoWindow
						onClose={this.onInfoWindowClose}
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
					>
						<h2>
							CinemaPrime <br />Coblitzallee 1-9<br />68163 Mannheim
						</h2>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);
