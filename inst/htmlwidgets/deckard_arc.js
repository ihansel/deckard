HTMLWidgets.widget({

  name: 'deckard_arc',

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
    new deck.ArcLayer({
      id: 'arc-layer',
      data: '',
    pickable: true,
    getStrokeWidth: 12,
    getSourcePosition: d => d.from.coordinates,
    getTargetPosition: d => d.to.coordinates,
    getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
    getTargetColor: d => [Math.sqrt(d.outbound), 140, 0],
    onHover: ({object}) => setTooltip(`${object.from.name} to ${object.to.name}`)
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
