var json = [
            {
                "title": "Client X - Business Dev",
                "lat": 48.8760154,
                "lng": 2.3310631,
                "description": "<h4>Client X - Business Dev</h4>"
            },
            {
                "title": "Client X - Business Dev",
                "lat": 48.757887,
                "lng": 2.1694163,
                "description": "<h4>Client X - Business Dev</h4>"
            },
            {
                "title": "Client X - Business Dev",
                "lat": 45.7864507,
                "lng": 4.7619503,
                "description": "<h4>Client X - Business Dev</h4>"
            },
            {
                "title": "Client X - Business Dev",
                "lat": 49.2386335,
                "lng": 4.0004503,
                "description": "<h4>Client X - Business Dev</h4>"
            },             
            {
                "title": "Client X - Business Dev",
                "lat": 44.8638282,
                "lng": -0.6561812,
                "description": "<h4>Client X - Business Dev</h4>"
            },
            {
                "title": "Client X - Business Dev",
                "lat": 45.1842207,
                "lng": 5.6805229,
                "description": "<h4>Client X - Business Dev</h4>"
            }
        ]

var myCenter = new google.maps.LatLng(47.0781336,2.3282632);

function initialize() {
    
    var mapProp = {
        center:myCenter,
        zoom:6,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var infowindow =  new google.maps.InfoWindow({
        content: ""
    });

    for (var i = 0, length = json.length; i < length; i++) {
        var data=json[i];
        var latLng = new google.maps.LatLng(data.lat, data.lng); 
        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: data.title
        });

        bindInfoWindow(marker, map, infowindow, data.description);
    } 
}

function bindInfoWindow(marker, map, infowindow, description) {
    marker.addListener('click', function() {
        infowindow.setContent(description);
        infowindow.open(map, this);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);