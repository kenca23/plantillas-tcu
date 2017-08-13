		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "9.938976", "longitude":"-84.052380", "icon": "img/map-marker2.png"} //9.938976, -84.052380
			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 14,
			center	: '9.938976, -84.052380',
			markers	: myMarkers
		});

