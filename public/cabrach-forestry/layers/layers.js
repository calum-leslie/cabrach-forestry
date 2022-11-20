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
var format_SAC_2 = new ol.format.GeoJSON();
var features_SAC_2 = format_SAC_2.readFeatures(json_SAC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAC_2.addFeatures(features_SAC_2);
var lyr_SAC_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAC_2, 
                style: style_SAC_2,
                interactive: true,
                title: '<img src="styles/legend/SAC_2.png" /> SAC'
            });
var format_NFEOwnership_3 = new ol.format.GeoJSON();
var features_NFEOwnership_3 = format_NFEOwnership_3.readFeatures(json_NFEOwnership_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NFEOwnership_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NFEOwnership_3.addFeatures(features_NFEOwnership_3);
var lyr_NFEOwnership_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NFEOwnership_3, 
                style: style_NFEOwnership_3,
                interactive: true,
                title: '<img src="styles/legend/NFEOwnership_3.png" /> NFE Ownership'
            });
var format_Windfarms_4 = new ol.format.GeoJSON();
var features_Windfarms_4 = format_Windfarms_4.readFeatures(json_Windfarms_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Windfarms_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Windfarms_4.addFeatures(features_Windfarms_4);
var lyr_Windfarms_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Windfarms_4, 
                style: style_Windfarms_4,
                interactive: true,
                title: '<img src="styles/legend/Windfarms_4.png" /> Windfarms'
            });
var format_NFI_5 = new ol.format.GeoJSON();
var features_NFI_5 = format_NFI_5.readFeatures(json_NFI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NFI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NFI_5.addFeatures(features_NFI_5);
var lyr_NFI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NFI_5, 
                style: style_NFI_5,
                interactive: true,
    title: 'NFI<br />\
    <img src="styles/legend/NFI_5_0.png" /> Non woodland<br />\
    <img src="styles/legend/NFI_5_1.png" /> Woodland<br />'
        });
var format_NWSS_6 = new ol.format.GeoJSON();
var features_NWSS_6 = format_NWSS_6.readFeatures(json_NWSS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NWSS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NWSS_6.addFeatures(features_NWSS_6);
var lyr_NWSS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NWSS_6, 
                style: style_NWSS_6,
                interactive: true,
                title: '<img src="styles/legend/NWSS_6.png" /> NWSS'
            });
var format_AWI_7 = new ol.format.GeoJSON();
var features_AWI_7 = format_AWI_7.readFeatures(json_AWI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AWI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AWI_7.addFeatures(features_AWI_7);
var lyr_AWI_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AWI_7, 
                style: style_AWI_7,
                interactive: true,
    title: 'AWI<br />\
    <img src="styles/legend/AWI_7_0.png" /> Ancient (of semi-natural origin)<br />\
    <img src="styles/legend/AWI_7_1.png" /> Long-Established (of plantation origin)<br />\
    <img src="styles/legend/AWI_7_2.png" /> Other (on Roy map)<br />'
        });

lyr_OSMTFLandscape_0.setVisible(true);lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.setVisible(true);lyr_SAC_2.setVisible(true);lyr_NFEOwnership_3.setVisible(true);lyr_Windfarms_4.setVisible(true);lyr_NFI_5.setVisible(true);lyr_NWSS_6.setVisible(true);lyr_AWI_7.setVisible(true);
var layersList = [lyr_OSMTFLandscape_0,lyr_BoundaryofCabrachandGlenfiddichEstaterough_1,lyr_SAC_2,lyr_NFEOwnership_3,lyr_Windfarms_4,lyr_NFI_5,lyr_NWSS_6,lyr_AWI_7];
lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SAC_2.set('fieldAliases', {'NAME': 'SAC', 'PA_CODE': 'PA_CODE', 'STATUS': 'Status', 'SITE_HA': 'Area (ha)', 'EUR_CODE': 'EUR_CODE', 'MPA_NET': 'MPA_NET', 'GEO_LOC': 'GEO_LOC', 'Link': 'Link', });
lyr_NFEOwnership_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'signing_da': 'signing_da', 'title': 'Title', 'legal_stat': 'Legal status', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Area (ha)': 'Area (ha)', 'Acquired': 'Acquired', });
lyr_Windfarms_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'link': 'Link', });
lyr_NFI_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'CATEGORY': 'Category', 'IFT_IOA': 'IFT/IOA', 'COUNTRY': 'COUNTRY', 'Shape_Leng': 'Shape_Leng', 'Area_ha': 'Area (ha)', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_NWSS_6.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'SCPTDATA_I': 'SCPTDATA_I', 'PAWS_SURVY': 'PAWS_SURVY', 'TYPE': 'TYPE', 'CANOPY_PCT': 'CANOPY_PCT', 'NATIVE_PCT': 'NATIVE_PCT', 'DOM_HABITA': 'Habitat', 'DOM_HB_PCT': 'Habitat dom (%)', 'SEMINT_PCT': 'SEMINT_PCT', 'STRUCT_NUM': 'STRUCT_NUM', 'MATURITY': 'Maturity', 'DOM_STRUCT': 'Structure', 'HERBIVORE': 'Herbivore impact', 'ER_NAT_PCT': 'ER_NAT_PCT', 'OTHR_TRAIT': 'Other traits', 'HECTARES': 'Area (ha)', 'INVASV_PCT': 'Invasives (canopy %)', 'INVASV_NUM': 'INVASV_NUM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AWI_7.set('fieldAliases', {'SQUARE': 'SQUARE', 'SITE_ID': 'SITE_ID', 'COMP_ID': 'COMP_ID', 'WOOD_ID': 'WOOD_ID', 'HECTARE': 'HECTARE', 'DISTRICT': 'DISTRICT', 'PARISH': 'PARISH', 'SITE_NAME': 'Site', 'GRID_REF': 'GRID_REF', 'EAST': 'EAST', 'NORTH': 'NORTH', 'SN_OTH': 'SN_OTH', 'ITE_NO': 'ITE_NO', 'ANTIQ_CODE': 'ANTIQ_CODE', 'ANTIQUITY': 'Antiquity', 'MAP_ORIGIN': 'MAP_ORIGIN', 'Area (ha)': 'Area (ha)', });
lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SAC_2.set('fieldImages', {'NAME': 'TextEdit', 'PA_CODE': 'Hidden', 'STATUS': 'TextEdit', 'SITE_HA': 'TextEdit', 'EUR_CODE': 'Hidden', 'MPA_NET': 'Hidden', 'GEO_LOC': 'Hidden', 'Link': '', });
lyr_NFEOwnership_3.set('fieldImages', {'OBJECTID': 'Hidden', 'signing_da': 'Hidden', 'title': 'TextEdit', 'legal_stat': 'TextEdit', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'Area (ha)': 'TextEdit', 'Acquired': 'DateTime', });
lyr_Windfarms_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'link': 'TextEdit', });
lyr_NFI_5.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'CATEGORY': 'TextEdit', 'IFT_IOA': 'TextEdit', 'COUNTRY': 'Hidden', 'Shape_Leng': 'Hidden', 'Area_ha': 'TextEdit', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', });
lyr_NWSS_6.set('fieldImages', {'FID': 'Hidden', 'OBJECTID': 'Hidden', 'SCPTDATA_I': 'Hidden', 'PAWS_SURVY': 'Hidden', 'TYPE': 'Hidden', 'CANOPY_PCT': 'Hidden', 'NATIVE_PCT': 'Hidden', 'DOM_HABITA': 'TextEdit', 'DOM_HB_PCT': 'Range', 'SEMINT_PCT': 'Hidden', 'STRUCT_NUM': 'Hidden', 'MATURITY': 'TextEdit', 'DOM_STRUCT': 'TextEdit', 'HERBIVORE': 'TextEdit', 'ER_NAT_PCT': 'Hidden', 'OTHR_TRAIT': 'TextEdit', 'HECTARES': 'TextEdit', 'INVASV_PCT': 'Range', 'INVASV_NUM': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_AWI_7.set('fieldImages', {'SQUARE': 'Hidden', 'SITE_ID': 'Hidden', 'COMP_ID': 'Hidden', 'WOOD_ID': 'Hidden', 'HECTARE': 'Hidden', 'DISTRICT': 'Hidden', 'PARISH': 'Hidden', 'SITE_NAME': 'Hidden', 'GRID_REF': 'Hidden', 'EAST': 'Hidden', 'NORTH': 'Hidden', 'SN_OTH': 'Hidden', 'ITE_NO': 'Hidden', 'ANTIQ_CODE': 'Hidden', 'ANTIQUITY': 'TextEdit', 'MAP_ORIGIN': 'Hidden', 'Area (ha)': 'Range', });
lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SAC_2.set('fieldLabels', {'NAME': 'inline label', 'STATUS': 'inline label', 'SITE_HA': 'inline label', 'Link': 'no label', });
lyr_NFEOwnership_3.set('fieldLabels', {'title': 'inline label', 'legal_stat': 'inline label', 'Area (ha)': 'inline label', 'Acquired': 'inline label', });
lyr_Windfarms_4.set('fieldLabels', {'Name': 'inline label', 'link': 'inline label', });
lyr_NFI_5.set('fieldLabels', {'CATEGORY': 'inline label', 'IFT_IOA': 'inline label', 'Area_ha': 'inline label', });
lyr_NWSS_6.set('fieldLabels', {'DOM_HABITA': 'inline label', 'DOM_HB_PCT': 'inline label', 'MATURITY': 'inline label', 'DOM_STRUCT': 'inline label', 'HERBIVORE': 'inline label', 'OTHR_TRAIT': 'inline label', 'HECTARES': 'inline label', 'INVASV_PCT': 'inline label', });
lyr_AWI_7.set('fieldLabels', {'ANTIQUITY': 'inline label', 'Area (ha)': 'inline label', });
lyr_AWI_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});