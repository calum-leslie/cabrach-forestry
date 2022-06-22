var wms_layers = [];


        var lyr_OSMTFLandscape_0 = new ol.layer.Tile({
            'title': 'OSM TF Landscape',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Maps © Thunderforest, Data © OpenStreetMap contributors</a>',
                url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=c74fa5e4990241a09d78d41aa377f07f'
            })
        });
var format_Pictish_1 = new ol.format.GeoJSON();
var features_Pictish_1 = format_Pictish_1.readFeatures(json_Pictish_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pictish_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pictish_1.addFeatures(features_Pictish_1);
var lyr_Pictish_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pictish_1, 
                style: style_Pictish_1,
                interactive: true,
                title: '<img src="styles/legend/Pictish_1.png" /> Pictish'
            });

lyr_OSMTFLandscape_0.setVisible(true);lyr_Pictish_1.setVisible(true);
var layersList = [lyr_OSMTFLandscape_0,lyr_Pictish_1];
lyr_Pictish_1.set('fieldAliases', {'fid': 'fid', 'CANMOREID': 'CANMOREID', 'SITENUMBER': 'SITENUMBER', 'NMRSNAME': 'Site', 'ALTNAME': 'ALTNAME', 'BROADCLASS': 'Class', 'SITETYPE': 'Type', 'COUNTY': 'COUNTY', 'COUNCIL': 'COUNCIL', 'PARISH': 'PARISH', 'ARCHITECTU': 'ARCHITECTU', 'ARCHAEOLOG': 'ARCHAEOLOG', 'FORM': 'FORM', 'GRIDREF': 'Grid reference (OS)', 'ACCURACY': 'ACCURACY', 'URL': 'Canmore link', 'ENTRYDATE': 'ENTRYDATE', 'LASTUPDATE': 'LASTUPDATE', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'COMPILER': 'COMPILER', 'LICENCE': 'LICENCE', 'Antiquity': 'Antiquity', });
lyr_Pictish_1.set('fieldImages', {'fid': 'Hidden', 'CANMOREID': 'Hidden', 'SITENUMBER': 'Hidden', 'NMRSNAME': 'TextEdit', 'ALTNAME': 'Hidden', 'BROADCLASS': 'TextEdit', 'SITETYPE': 'TextEdit', 'COUNTY': 'Hidden', 'COUNCIL': 'Hidden', 'PARISH': 'Hidden', 'ARCHITECTU': 'Hidden', 'ARCHAEOLOG': 'Hidden', 'FORM': 'Hidden', 'GRIDREF': 'TextEdit', 'ACCURACY': 'Hidden', 'URL': 'TextEdit', 'ENTRYDATE': 'Hidden', 'LASTUPDATE': 'Hidden', 'XCOORD': 'Hidden', 'YCOORD': 'Hidden', 'COMPILER': 'Hidden', 'LICENCE': 'Hidden', 'Antiquity': 'TextEdit', });
lyr_Pictish_1.set('fieldLabels', {'NMRSNAME': 'inline label', 'BROADCLASS': 'inline label', 'SITETYPE': 'inline label', 'GRIDREF': 'inline label', 'URL': 'inline label', 'Antiquity': 'inline label', });
lyr_Pictish_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});