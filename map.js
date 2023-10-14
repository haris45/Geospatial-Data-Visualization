var rappers = [
  { name: 'Big Pun', borough: 'Bronx', info: 'Years Active: 1995–2000', image: 'images/bigpun.jpg' },
  { name: 'KRS-One', borough: 'Bronx', info: 'Years Active: 1986–Present', image: 'images/KRS-One.jpg' },
  { name: 'Fat Joe', borough: 'Bronx', info: '1992–Present', image: 'images/fatjoe.jpg' },
  { name: 'Melle Mel', borough: 'Bronx', info: 'Years Active: 	1978–Present', image: 'images/MelleMel.jpg' },
  { name: 'Slick Rick', borough: 'Bronx', info: 'Years Active: 1984-Present', image: 'images/slickrick.jpg' },
  { name: 'Canibus', borough: 'Bronx', info: 'Years Active: 1993–Present', image: 'images/Canibus.webp' },

  { name: 'Nas', borough: 'Queens', info: 'Years Active: 1991 - Present', image: 'images/nas.jpg' },
  { name: 'Mobb Deep', borough: 'Queens', info: 'Years Active: 1991 - 2017', image: 'images/mobbdeep.webp' },
  { name: 'Capone-N-Noreaga', borough: 'Queens', info: 'Years Active: 1995 - 2019', image: 'images/cnn.jpg' },
  { name: 'LL Cool J', borough: 'Queens', info: 'Years Active: 1984 - Present', image: 'images/llcoolj.jpg' },
  { name: 'Run DMC', borough: 'Queens', info: 'Years Active: 1983 - 2002', image: 'images/rundmc.jpg' },
  { name: '50 Cent', borough: 'Queens', info: 'Years Active: 1996 - Present', image: 'images/50cent.jpg' },
  { name: 'Nicki Minaj', borough: 'Queens', info: 'Years Active: 2004 - Present', image: 'images/nickiminaj.jpg' },
  { name: 'Cormega', borough: 'Queens', info: 'Years Active: 1989 - Present', image: 'images/cormega.jpg' },
  { name: 'A Tribe Called Quest', borough: 'Queens', info: 'Years Active: 1985 - 2017', image: 'images/atcq.jpg' },
  { name: 'Bas', borough: 'Queens', info: 'Years Active: 2010 - Present', image: 'images/bas.webp' },
  { name: 'Kool G Rap', borough: 'Queens', info: 'Years Active: 1986 - Present', image: 'images/koolgrap.jpg' },
  { name: 'Ja Rule', borough: 'Queens', info: 'Years Active: 1994 - Present', image: 'images/jarule.webp' },
  

  { name: 'Jay-Z', borough: 'Brooklyn', info: 'Years Active: 1986 - Present', image: 'images/JayZ.jpg' },
  { name: 'The Notorious B.I.G.', borough: 'Brooklyn', info: 'Years Active: 1992 - 1997', image: 'images/notoriousbig.jpg' },
  { name: 'Mos Def', borough: 'Brooklyn', info: 'Years Active: 1994 - Present', image: 'images/mosdef.jpg' },
  { name: 'Joey Bada$$', borough: 'Brooklyn', info: 'Years Active: 2010 - Present', image: 'images/joeybadass.jpg' },
  { name: 'Busta Rhymes', borough: 'Brooklyn', info: 'Years Active: 1989 - Present', image: 'images/bustarhymes.jpg' },
  { name: 'GZA', borough: 'Brooklyn', info: 'Years Active: 1990 - Present', image: 'images/gza.jpg' },
  { name: 'AZ', borough: 'Brooklyn', info: 'Years Active: 1993 - Present', image: 'images/az.jpg' },
  { name: 'Foxy Brown', borough: 'Brooklyn', info: 'Years Active: 1994 - Present', image: 'images/foxybrown.jpg' },
  { name: 'Talib Kweli', borough: 'Brooklyn', info: 'Years Active: 1997 - Present', image: 'images/talibkweli.jpg' },
  { name: 'Big Daddy Kane', borough: 'Brooklyn', info: 'Years Active: 1986 - Present', image: 'images/bigdaddykane.jpg' },
  { name: "Ol' Dirty Bastard", borough: 'Brooklyn', info: 'Years Active: 1992 - 2004', image: 'images/oldirtybastard.webp' },
  { name: 'Guru', borough: 'Brooklyn', info: 'Years Active: 1986 - 2010', image: 'images/guru.jpg' },
  { name: "Fabolous", borough: 'Brooklyn', info: 'Years Active: 1997 - Present', image: 'images/fabolous.jpg' },


  { name: 'A$AP Rocky', borough: 'Manhattan', info: 'Years Active: 2007 - Present', image: 'images/asaprocky.webp' },
  { name: 'Big L', borough: 'Manhattan', info: 'Years Active: 1992 - 1999', image: 'images/bigl.jpg' },
  { name: 'Cam\'ron', borough: 'Manhattan', info: 'Years Active: 1993 - Present', image: 'images/camron.jpg' },
  { name: 'Mase', borough: 'Manhattan', info: 'Years Active: 1993 - Present', image: 'images/mase.jpg' },
  { name: 'A$AP Ferg', borough: 'Manhattan', info: 'Years Active: 2007 - Present', image: 'images/asapferg.jpg' },
  { name: 'Immortal Technique', borough: 'Manhattan', info: 'Years Active: 2000 - Present', image: 'images/immortaltechnique.jpg' },
  
  
  { name: 'RZA', borough: 'Staten Island', info: 'Years Active: 1984 - Present', image: 'images/rza.jpg' },
  { name: 'Method Man', borough: 'Staten Island', info: 'Years Active: 1992 - Present', image: 'images/methodman.webp' },
  { name: 'Raekwon', borough: 'Staten Island', info: 'Years Active: 1991 - Present', image: 'images/raekwon.jpg' },
  { name: 'Ghostface Killah', borough: 'Staten Island', info: 'Years Active: 1991 - Present', image: 'images/ghostfacekillah.jpg' },
  { name: 'Inspectah Deck', borough: 'Staten Island', info: 'Years Active: 1992 - Present', image: 'images/InspectahDeck.webp' },
  
  

];

var boroughs = [];

var boroughDescriptions = {
  'Bronx': 'The Bronx is known for its rich history and diverse culture. It is home to famous attractions like the Bronx Zoo and the New York Botanical Garden. The borough has a strong Hispanic and African American presence, and it offers a mix of residential neighborhoods and urban development.',
  'Brooklyn': "Brooklyn is known for its vibrant arts scene, historic brownstone neighborhoods, and a diverse population. It's home to the Brooklyn Bridge, Coney Island, and numerous cultural institutions. It's often considered the hipster capital of the world and is known for its trendy neighborhoods.",
  'Manhattan': "Manhattan is the heart of New York City and a global financial center. It's known for iconic landmarks such as Times Square, Central Park, and the Statue of Liberty. The borough is a bustling hub of business, entertainment, and culture, with a mix of skyscrapers and historic districts.",
  'Queens': "Queens is one of the most ethnically diverse places in the world. It's known for Flushing Meadows-Corona Park, the USTA Billie Jean King National Tennis Center, and the Queens Museum. It offers a mix of residential, industrial, and commercial areas.",
  'Staten Island': "Staten Island is known for its suburban feel and natural beauty. It's home to the Staten Island Ferry and the Staten Island Greenbelt. The borough has a quieter, more relaxed atmosphere compared to the other boroughs and is often referred to as the 'forgotten borough'."
};

// Define the list of GeoJSON URLs for each borough
var geoJSONUrls = {
  'Bronx': 'data/bronx.geojson',
  'Brooklyn': 'data/brooklyn.geojson',
  'Manhattan': 'data/manhattan.geojson',
  'Queens': 'data/queens.geojson',
  'Staten Island': 'data/staten_island.geojson'
};

function createMap() {
  var map = L.map('map').setView([40.7128, -74.0060], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  var boroughColors = {
    'Bronx': 'red',
    'Brooklyn': 'orange',
    'Manhattan': 'green',
    'Queens': 'blue',
    'Staten Island': 'purple',
  };

  boroughs.forEach(function (borough) {
    var color = boroughColors[borough.name];

    L.geoJSON(borough.geojson, {
      style: {
        fillOpacity: 0.8,
        color: color,
        weight: 0,
      }
    }).addTo(map);

    L.geoJSON(borough.geojson).on('click', function (e) {
      var rappersInBorough = rappers.filter(function (rapper) {
        return rapper.borough === borough.name;
      });

      var popupContent = document.createElement('div');
      popupContent.className = 'popup-container'; // Added a class for styling
      popupContent.innerHTML += '<h3 style="font-size: 18px;">' + borough.name + '</h3>';
      popupContent.innerHTML += '<p style="font-size: 13px;">' + boroughDescriptions[borough.name] + '</p>';

      if (rappersInBorough.length > 0) {
        popupContent.innerHTML += '<ul>';
        popupContent.innerHTML += '<div class="rapper-grid">';

        for (var i = 0; i < rappersInBorough.length; i++) {
          if (i % 3 === 0) {
            if (i > 0) {
              popupContent.innerHTML += '</tr>';
            }
            popupContent.innerHTML += '<tr>';
          }

          popupContent.innerHTML += '<td>';
          popupContent.innerHTML += '<h5 style="font-size: 18px;">' + rappersInBorough[i].name + '</h5>';

          if (rappersInBorough[i].image) {
            popupContent.innerHTML += '<img src="' + rappersInBorough[i].image + '" alt="' + rappersInBorough[i].name + ' Image" style="max-height: 200px; max-width: 150px;">';
          }
          popupContent.innerHTML += '<p style="font-size: 13px;">' + rappersInBorough[i].info + '</p>';
          popupContent.innerHTML += '<hr>'; // Add a horizontal line between rappers
          popupContent.innerHTML += '</td>';
        }

        popupContent.innerHTML += '</tr>';
        popupContent.innerHTML += '</table>';
      }

      var popup = L.popup({
        maxHeight: 600, // Set the maximum height for the popup
        maxWidth: 600, // Set the maximum width for the popup
        closeOnClick: false, // Prevent closing when clicking outside
      }).setLatLng(e.latlng).setContent(popupContent);

      popup.openOn(map);
    }).addTo(map);
  });
}



// Fetch and add GeoJSON data for each borough
function fetchBoroughData(boroughName, geoJSONUrl) {
  fetch(geoJSONUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Add the GeoJSON data to the boroughs array
      boroughs.push({
        name: boroughName,
        geojson: data
      });

      // After fetching all borough data, you can create your map here
      if (boroughs.length === Object.keys(geoJSONUrls).length) {
        createMap();
      }
    })
    .catch(function (error) {
      console.error('Error loading GeoJSON data for ' + boroughName + ':', error);
    });
}

// Fetch GeoJSON data for each borough
for (var boroughName in geoJSONUrls) {
  fetchBoroughData(boroughName, geoJSONUrls[boroughName]);
}


  

  