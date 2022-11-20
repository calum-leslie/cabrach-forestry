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
var format_HLA_2 = new ol.format.GeoJSON();
var features_HLA_2 = format_HLA_2.readFeatures(json_HLA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HLA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HLA_2.addFeatures(features_HLA_2);
var lyr_HLA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HLA_2, 
                style: style_HLA_2,
                interactive: true,
    title: 'HLA<br />\
    <img src="styles/legend/HLA_2_0.png" /> Managed Woodland<br />\
    <img src="styles/legend/HLA_2_1.png" /> Planned Rectilinear Fields and Farms<br />\
    <img src="styles/legend/HLA_2_2.png" /> Plantation<br />\
    <img src="styles/legend/HLA_2_3.png" /> Rectilinear Fields and Farms<br />\
    <img src="styles/legend/HLA_2_4.png" /> Rough Grazing<br />\
    <img src="styles/legend/HLA_2_5.png" /> Smallholdings<br />\
    <img src="styles/legend/HLA_2_6.png" /> Unenclosed Improved Pasture<br />'
        });
var format_Windfarms_3 = new ol.format.GeoJSON();
var features_Windfarms_3 = format_Windfarms_3.readFeatures(json_Windfarms_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Windfarms_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Windfarms_3.addFeatures(features_Windfarms_3);
var lyr_Windfarms_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Windfarms_3, 
                style: style_Windfarms_3,
                interactive: true,
                title: '<img src="styles/legend/Windfarms_3.png" /> Windfarms'
            });
var format_NFI_4 = new ol.format.GeoJSON();
var features_NFI_4 = format_NFI_4.readFeatures(json_NFI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NFI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NFI_4.addFeatures(features_NFI_4);
var lyr_NFI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NFI_4, 
                style: style_NFI_4,
                interactive: true,
    title: 'NFI<br />\
    <img src="styles/legend/NFI_4_0.png" /> Non woodland<br />\
    <img src="styles/legend/NFI_4_1.png" /> Woodland<br />'
        });
var format_NWSS_5 = new ol.format.GeoJSON();
var features_NWSS_5 = format_NWSS_5.readFeatures(json_NWSS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NWSS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NWSS_5.addFeatures(features_NWSS_5);
var lyr_NWSS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NWSS_5, 
                style: style_NWSS_5,
                interactive: true,
                title: '<img src="styles/legend/NWSS_5.png" /> NWSS'
            });
var format_AWI_6 = new ol.format.GeoJSON();
var features_AWI_6 = format_AWI_6.readFeatures(json_AWI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AWI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AWI_6.addFeatures(features_AWI_6);
var lyr_AWI_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AWI_6, 
                style: style_AWI_6,
                interactive: true,
    title: 'AWI<br />\
    <img src="styles/legend/AWI_6_0.png" /> Ancient (of semi-natural origin)<br />\
    <img src="styles/legend/AWI_6_1.png" /> Long-Established (of plantation origin)<br />\
    <img src="styles/legend/AWI_6_2.png" /> Other (on Roy map)<br />'
        });
var format_Archaeo_7 = new ol.format.GeoJSON();
var features_Archaeo_7 = format_Archaeo_7.readFeatures(json_Archaeo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Archaeo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Archaeo_7.addFeatures(features_Archaeo_7);
var lyr_Archaeo_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Archaeo_7, 
                style: style_Archaeo_7,
                interactive: true,
                title: 'Archaeo'
            });
var format_Photo_8 = new ol.format.GeoJSON();
var features_Photo_8 = format_Photo_8.readFeatures(json_Photo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photo_8.addFeatures(features_Photo_8);
var lyr_Photo_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Photo_8, 
                style: style_Photo_8,
                interactive: true,
                title: 'Photo'
            });

lyr_OSMTFLandscape_0.setVisible(true);lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.setVisible(true);lyr_HLA_2.setVisible(true);lyr_Windfarms_3.setVisible(true);lyr_NFI_4.setVisible(true);lyr_NWSS_5.setVisible(true);lyr_AWI_6.setVisible(true);lyr_Archaeo_7.setVisible(true);lyr_Photo_8.setVisible(true);
var layersList = [lyr_OSMTFLandscape_0,lyr_BoundaryofCabrachandGlenfiddichEstaterough_1,lyr_HLA_2,lyr_Windfarms_3,lyr_NFI_4,lyr_NWSS_5,lyr_AWI_6,lyr_Archaeo_7,lyr_Photo_8];
lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HLA_2.set('fieldAliases', {'TAG': 'TAG', 'HIS_CODE': 'HIS_CODE', 'REL1_CODE': 'REL1_CODE', 'REL2_CODE': 'REL2_CODE', 'REL3_CODE': 'REL3_CODE', 'Historic_L': 'Historic Land Use', 'Period': 'Period', 'Type': 'Type', 'Code': 'Code', 'Rel1_Cat': 'Rel1_Cat', 'Rel1_Per': 'Rel1_Per', 'Rel1_Typ': 'Rel1_Typ', 'Rel1_Code_': 'Rel1_Code_', 'Rel2_Cat': 'Rel2_Cat', 'Rel2_Per': 'Rel2_Per', 'Rel2_Typ': 'Rel2_Typ', 'Rel2_Code_': 'Rel2_Code_', 'Rel3_Cat': 'Rel3_Cat', 'Rel3_Per': 'Rel3_Per', 'Rel3_Typ': 'Rel3_Typ', 'Rel3_Code_': 'Rel3_Code_', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Area (ha)': 'Area (ha)', });
lyr_Windfarms_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'link': 'Link', });
lyr_NFI_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'CATEGORY': 'Category', 'IFT_IOA': 'IFT/IOA', 'COUNTRY': 'COUNTRY', 'Shape_Leng': 'Shape_Leng', 'Area_ha': 'Area (ha)', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_NWSS_5.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'SCPTDATA_I': 'SCPTDATA_I', 'PAWS_SURVY': 'PAWS_SURVY', 'TYPE': 'TYPE', 'CANOPY_PCT': 'CANOPY_PCT', 'NATIVE_PCT': 'NATIVE_PCT', 'DOM_HABITA': 'Habitat', 'DOM_HB_PCT': 'Habitat dom (%)', 'SEMINT_PCT': 'SEMINT_PCT', 'STRUCT_NUM': 'STRUCT_NUM', 'MATURITY': 'Maturity', 'DOM_STRUCT': 'Structure', 'HERBIVORE': 'Herbivore impact', 'ER_NAT_PCT': 'ER_NAT_PCT', 'OTHR_TRAIT': 'Other traits', 'HECTARES': 'Area (ha)', 'INVASV_PCT': 'Invasives (canopy %)', 'INVASV_NUM': 'INVASV_NUM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AWI_6.set('fieldAliases', {'SQUARE': 'SQUARE', 'SITE_ID': 'SITE_ID', 'COMP_ID': 'COMP_ID', 'WOOD_ID': 'WOOD_ID', 'HECTARE': 'HECTARE', 'DISTRICT': 'DISTRICT', 'PARISH': 'PARISH', 'SITE_NAME': 'Site', 'GRID_REF': 'GRID_REF', 'EAST': 'EAST', 'NORTH': 'NORTH', 'SN_OTH': 'SN_OTH', 'ITE_NO': 'ITE_NO', 'ANTIQ_CODE': 'ANTIQ_CODE', 'ANTIQUITY': 'Antiquity', 'MAP_ORIGIN': 'MAP_ORIGIN', 'Area (ha)': 'Area (ha)', });
lyr_Archaeo_7.set('fieldAliases', {'CANMOREID': 'CANMOREID', 'SITENUMBER': 'SITENUMBER', 'NMRSNAME': 'NMRSNAME', 'ALTNAME': 'ALTNAME', 'BROADCLASS': 'BROADCLASS', 'SITETYPE': 'Artifact', 'COUNTY': 'COUNTY', 'COUNCIL': 'COUNCIL', 'PARISH': 'PARISH', 'ARCHITECTU': 'ARCHITECTU', 'ARCHAEOLOG': 'ARCHAEOLOG', 'FORM': 'FORM', 'GRIDREF': 'GRIDREF', 'ACCURACY': 'ACCURACY', 'URL': 'Link', 'ENTRYDATE': 'ENTRYDATE', 'LASTUPDATE': 'LASTUPDATE', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'COMPILER': 'COMPILER', 'LICENCE': 'LICENCE', });
lyr_Photo_8.set('fieldAliases', {'Name': 'Site', 'link1': 'Link', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_HLA_2.set('fieldImages', {'TAG': 'Hidden', 'HIS_CODE': 'Hidden', 'REL1_CODE': 'Hidden', 'REL2_CODE': 'Hidden', 'REL3_CODE': 'Hidden', 'Historic_L': 'TextEdit', 'Period': 'TextEdit', 'Type': 'TextEdit', 'Code': 'Hidden', 'Rel1_Cat': 'Hidden', 'Rel1_Per': 'Hidden', 'Rel1_Typ': 'Hidden', 'Rel1_Code_': 'Hidden', 'Rel2_Cat': 'Hidden', 'Rel2_Per': 'Hidden', 'Rel2_Typ': 'Hidden', 'Rel2_Code_': 'Hidden', 'Rel3_Cat': 'Hidden', 'Rel3_Per': 'Hidden', 'Rel3_Typ': 'Hidden', 'Rel3_Code_': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Area (ha)': 'Range', });
lyr_Windfarms_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'link': 'TextEdit', });
lyr_NFI_4.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'CATEGORY': 'TextEdit', 'IFT_IOA': 'TextEdit', 'COUNTRY': 'Hidden', 'Shape_Leng': 'Hidden', 'Area_ha': 'TextEdit', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', });
lyr_NWSS_5.set('fieldImages', {'FID': 'Hidden', 'OBJECTID': 'Hidden', 'SCPTDATA_I': 'Hidden', 'PAWS_SURVY': 'Hidden', 'TYPE': 'Hidden', 'CANOPY_PCT': 'Hidden', 'NATIVE_PCT': 'Hidden', 'DOM_HABITA': 'TextEdit', 'DOM_HB_PCT': 'Range', 'SEMINT_PCT': 'Hidden', 'STRUCT_NUM': 'Hidden', 'MATURITY': 'TextEdit', 'DOM_STRUCT': 'TextEdit', 'HERBIVORE': 'TextEdit', 'ER_NAT_PCT': 'Hidden', 'OTHR_TRAIT': 'TextEdit', 'HECTARES': 'TextEdit', 'INVASV_PCT': 'Range', 'INVASV_NUM': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', });
lyr_AWI_6.set('fieldImages', {'SQUARE': 'Hidden', 'SITE_ID': 'Hidden', 'COMP_ID': 'Hidden', 'WOOD_ID': 'Hidden', 'HECTARE': 'Hidden', 'DISTRICT': 'Hidden', 'PARISH': 'Hidden', 'SITE_NAME': 'Hidden', 'GRID_REF': 'Hidden', 'EAST': 'Hidden', 'NORTH': 'Hidden', 'SN_OTH': 'Hidden', 'ITE_NO': 'Hidden', 'ANTIQ_CODE': 'Hidden', 'ANTIQUITY': 'TextEdit', 'MAP_ORIGIN': 'Hidden', 'Area (ha)': 'Range', });
lyr_Archaeo_7.set('fieldImages', {'CANMOREID': 'Hidden', 'SITENUMBER': 'Hidden', 'NMRSNAME': 'Hidden', 'ALTNAME': 'Hidden', 'BROADCLASS': 'Hidden', 'SITETYPE': 'TextEdit', 'COUNTY': 'Hidden', 'COUNCIL': 'Hidden', 'PARISH': 'Hidden', 'ARCHITECTU': 'Hidden', 'ARCHAEOLOG': 'Hidden', 'FORM': 'Hidden', 'GRIDREF': 'Hidden', 'ACCURACY': 'Hidden', 'URL': 'TextEdit', 'ENTRYDATE': 'Hidden', 'LASTUPDATE': 'Hidden', 'XCOORD': 'Hidden', 'YCOORD': 'Hidden', 'COMPILER': 'Hidden', 'LICENCE': 'Hidden', });
lyr_Photo_8.set('fieldImages', {'Name': 'TextEdit', 'link1': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_BoundaryofCabrachandGlenfiddichEstaterough_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HLA_2.set('fieldLabels', {'Historic_L': 'inline label', 'Period': 'inline label', 'Type': 'inline label', 'Area (ha)': 'inline label', });
lyr_Windfarms_3.set('fieldLabels', {'Name': 'inline label', 'link': 'inline label', });
lyr_NFI_4.set('fieldLabels', {'CATEGORY': 'inline label', 'IFT_IOA': 'inline label', 'Area_ha': 'inline label', });
lyr_NWSS_5.set('fieldLabels', {'DOM_HABITA': 'inline label', 'DOM_HB_PCT': 'inline label', 'MATURITY': 'inline label', 'DOM_STRUCT': 'inline label', 'HERBIVORE': 'inline label', 'OTHR_TRAIT': 'inline label', 'HECTARES': 'inline label', 'INVASV_PCT': 'inline label', });
lyr_AWI_6.set('fieldLabels', {'ANTIQUITY': 'inline label', 'Area (ha)': 'inline label', });
lyr_Archaeo_7.set('fieldLabels', {'SITETYPE': 'inline label', 'URL': 'inline label', });
lyr_Photo_8.set('fieldLabels', {'Name': 'inline label', 'link1': 'inline label', });
lyr_Photo_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});