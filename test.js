
{
	routes(name: "59", transportModes: BUS) {
	  shortName
	  longName
	  patterns {
		code
		directionId
		name
		headsign
	  }
	}
  }
  
  {
	plan(
	  from: {lat: 60.168992, lon: 24.932366}
	  to: {lat: 60.175294, lon: 24.684855}
	  numItineraries: 3
	) {
	  itineraries {
		legs {
		  startTime
		  endTime
		  mode
		  duration
		  realTime
		  distance
		  transitLeg
		}
	  }
	}
  }
  
  {
	plan(
	  fromPlace: "Kamppi, Helsinki::60.168992,24.932366",
	  toPlace: "Pisa, Espoo::60.175294,24.684855",
	) {
	  itineraries{
		walkDistance,
		duration,
		legs {
		  mode
		  startTime
		  endTime
		  from {
			lat
			lon
			name
			stop {
			  code
			  name
			}
		  },
		  to {
			lat
			lon
			name
		  },
		  agency {
			gtfsId
					name
		  },
		  distance
		  legGeometry {
			length
			points
		  }
		}
	  }
	}
  }



  { stop(id: "HSL:1040129") {
	name
	lat
	lon
	wheelchairBoarding
  } 
  var req = {
	url: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: 
  };
  request(req, function (error, response, body) {
	if (!error && response.statusCode == 200) {
	  console.log(JSON.stringify(JSON.parse(body), null, 4));
	}
  });