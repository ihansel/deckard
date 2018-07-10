HTMLWidgets.widget({

  name: 'deckard_point',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.

new deck.DeckGL({
  mapboxApiAccessToken: '',
  mapStyle: '',
  longitude: null,
  latitude: null,
  zoom: null,
  maxZoom: null,
  layers: [
    new deck.ScatterplotLayer({
      id: 'scatter-plot',
      data: '',
      radiusScale: 20,
      radiusMinPixels: 0.5,
      getPosition: d => [d[0], d[1], 0],
      getColor: d => (d[2] === 1 ? MALE_COLOR : FEMALE_COLOR)
    })
  ]
});


      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
