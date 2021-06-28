import './jquery-ui.min'
$( function() {
    $('#area-range').slider({
        range: true,
        min: 0,
        max: 70,
        step: 5,
        slide: function( event, ui ) {
            $( "#area-range p" ).text( ui.values[ 0 ] + '-' + ui.values[ 1 ])
        },
    })
    $('#price-range').slider({
        range: true,
        min: 0,
        max: 7e6,
        slide: function( event, ui ) {
            $( "#price-range p" ).text( ui.values[ 0 ] + '-' + ui.values[ 1 ])
        },
    })
})
