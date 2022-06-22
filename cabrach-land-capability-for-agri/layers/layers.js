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
var format_BoundaryofCabrachandGlenfiddichEstaterough_1 = new ol.format.GeoJSON();
var features_BoundaryofCabrachandGlenfiddichEstaterough_1 = format_BoundaryofCabrachandGlenfiddichEstaterough_1.readFeatures(json_BoundaryofCabrachandGlenfiddichEstaterough_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundaryofCabrachandGlenfiddichEstaterough_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoundaryofCabrachandGlenfiddichEstaterough_1.addFeatures(features_BoundaryofCabrachandGlenfiddichEstaterough_1);
var lyr_BoundaryofCabrachandGlenfiddichEstaterough_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoundaryofCabrachandGlenfiddichEstaterough_1, 
                style: style_BoundaryofCabrachandGlenfiddichEstaterough_1,
                interactive: true,
                title: '<img src="styles/legend/BoundaryofCabrachandGlenfiddichEstaterough_1.png" /> Boundary of Cabrach and Glenfiddich Estate (rough)'
            });
var format_LCA_2 = new ol.format.GeoJSON();
var features_LCA_2 = format_LCA_2.readFeatures(json_LCA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LCA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LCA_2.addFeatures(features_LCA_2);
var lyr_LCA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LCA_2, 
                style: style_LCA_2,
                interactive: true,
    title: 'LCA<br />\
    <img src="styles/legend/LCA_2_0.png" /> 3.20000000000<br />\
    <img src="styles/legend/LCA_2_1.png" /> 4.10000000000<br />\
    <img src="styles/legend/LCA_2_2.png" /> 4.20000000000<br />\
    <img src="styles/legend/LCA_2_3.png" /> 5.10000000000<br />\
    <img src="styles/legend/LCA_2_4.png" /> 5.20000000000<br />\
    <img src="styles/legend/LCA_2_5.png" /> 5.30000000000<br />\
    <img src="styles/legend/LCA_2_6.png" /> 6.10000000000<br />\
    <img src="styles/legend/LCA_2_7.png" /> 6.20000000000<br />\
    <img src="styles/legend/LCA_2_8.png" /> 6.30000000000<br />\
    <img src="styles/legend/LCA_2_9.png" /> 7.00000000000<br />'
        });
var format_SoiloutlinesWRB_3 = new ol.format.GeoJSON();
var features_SoiloutlinesWRB_3 = format_SoiloutlinesWRB_3.readFeatures(json_SoiloutlinesWRB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoiloutlinesWRB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoiloutlinesWRB_3.addFeatures(features_SoiloutlinesWRB_3);
var lyr_SoiloutlinesWRB_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SoiloutlinesWRB_3, 
                style: style_SoiloutlinesWRB_3,
                interactive: true,
                title: '<img src="styles/legend/SoiloutlinesWRB_3.png" /> Soil outlines (WRB)'
            });

lyr_OSMTFLandscape_0.setVisible(true);lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.setVisible(true);lyr_LCA_2.setVisible(true);lyr_SoiloutlinesWRB_3.setVisible(true);
var layersList = [lyr_OSMTFLandscape_0,lyr_BoundaryofCabrachandGlenfiddichEstaterough_1,lyr_LCA_2,lyr_SoiloutlinesWRB_3];
lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LCA_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'LCCODE': 'LCCODE', 'Scale': 'Scale', 'Water': 'Water', 'LCA': 'LCA', });
lyr_SoiloutlinesWRB_3.set('fieldAliases', {'referenceS': 'Reference soil', 'qualifier_': 'Qualifier 1', 'qualifier1': 'Qualifier 2', });
lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LCA_2.set('fieldImages', {'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'LCCODE': 'Hidden', 'Scale': 'Hidden', 'Water': 'Hidden', 'LCA': 'Range', });
lyr_SoiloutlinesWRB_3.set('fieldImages', {'referenceS': 'TextEdit', 'qualifier_': 'TextEdit', 'qualifier1': 'TextEdit', });
lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LCA_2.set('fieldLabels', {'LCA': 'inline label', });
lyr_SoiloutlinesWRB_3.set('fieldLabels', {'referenceS': 'inline label', 'qualifier_': 'inline label', 'qualifier1': 'inline label', });
lyr_SoiloutlinesWRB_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});