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
var format_SoiltypeHuttonInstitute2019_1 = new ol.format.GeoJSON();
var features_SoiltypeHuttonInstitute2019_1 = format_SoiltypeHuttonInstitute2019_1.readFeatures(json_SoiltypeHuttonInstitute2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoiltypeHuttonInstitute2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoiltypeHuttonInstitute2019_1.addFeatures(features_SoiltypeHuttonInstitute2019_1);
var lyr_SoiltypeHuttonInstitute2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SoiltypeHuttonInstitute2019_1, 
                style: style_SoiltypeHuttonInstitute2019_1,
                interactive: true,
    title: 'Soil type (Hutton Institute 2019)<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_0.png" /> Alluvial soils<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_1.png" /> Brown soils<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_2.png" /> Calcareous soils<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_3.png" /> Immature soils<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_4.png" /> Lochs<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_5.png" /> Made up ground<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_6.png" /> Mineral gleys<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_7.png" /> Mineral podzols<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_8.png" /> Montane soils<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_9.png" /> No data<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_10.png" /> No data?<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_11.png" /> Non-soil<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_12.png" /> Peat<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_13.png" /> Peaty gleys<br />\
    <img src="styles/legend/SoiltypeHuttonInstitute2019_1_14.png" /> Peaty podzols<br />'
        });
var format_AncientWoodlandInventory_2 = new ol.format.GeoJSON();
var features_AncientWoodlandInventory_2 = format_AncientWoodlandInventory_2.readFeatures(json_AncientWoodlandInventory_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AncientWoodlandInventory_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AncientWoodlandInventory_2.addFeatures(features_AncientWoodlandInventory_2);
var lyr_AncientWoodlandInventory_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AncientWoodlandInventory_2, 
                style: style_AncientWoodlandInventory_2,
                interactive: true,
                title: '<img src="styles/legend/AncientWoodlandInventory_2.png" /> Ancient Woodland Inventory'
            });

lyr_OSMTFLandscape_0.setVisible(true);lyr_SoiltypeHuttonInstitute2019_1.setVisible(true);lyr_AncientWoodlandInventory_2.setVisible(true);
var layersList = [lyr_OSMTFLandscape_0,lyr_SoiltypeHuttonInstitute2019_1,lyr_AncientWoodlandInventory_2];
lyr_SoiltypeHuttonInstitute2019_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'CODE': 'CODE', 'SMU_CODE': 'SMU_CODE', 'SER_CODE': 'SER_CODE', 'PHASE_CODE': 'PHASE_CODE', 'SMU_TYPE': 'SMU_TYPE', 'ASSOC_NAME': 'ASSOC_NAME', 'SMU_NAME': 'SMU_NAME', 'MSG13_CDE': 'MSG13_CDE', 'MSG13': 'MSG13', 'MSSG13_CDE': 'MSSG13_CDE', 'MSSG13': 'Soil', 'PHASE_DESC': 'Phase', 'SOIL_DRAIN': 'Drainage', 'TEXT_QUAL': 'TEXT_QUAL', 'COMPSOIL13': 'COMPSOIL13', 'LFRM_DSCR': 'LFRM_DSCR', 'PM_DSCR': 'Parent material', 'SMU_ASSOC_': 'SMU_ASSOC_', 'SMU_SYMB': 'SMU_SYMB', 'SERCDE1': 'SERCDE1', 'ASSOC1': 'ASSOC1', 'SERIES1': 'SERIES1', 'MSG13CDE1': 'MSG13CDE1', 'MSG13_1': 'MSG13_1', 'MSSG13CDE1': 'MSSG13CDE1', 'MSSG13_1': 'MSSG13_1', 'SERCDE2': 'SERCDE2', 'ASSOC2': 'ASSOC2', 'SERIES2': 'SERIES2', 'MSG13CDE2': 'MSG13CDE2', 'MSG13_2': 'MSG13_2', 'MSSG13CDE2': 'MSSG13CDE2', 'MSSG13_2': 'MSSG13_2', 'SERCDE3': 'SERCDE3', 'ASSOC3': 'ASSOC3', 'SERIES3': 'SERIES3', 'MSG13CDE3': 'MSG13CDE3', 'MSG13_3': 'MSG13_3', 'MSSG13CDE3': 'MSSG13CDE3', 'MSSG13_3': 'MSSG13_3', 'SERCDE4': 'SERCDE4', 'ASSOC4': 'ASSOC4', 'SERIES4': 'SERIES4', 'MSG13CDE4': 'MSG13CDE4', 'MSG13_4': 'MSG13_4', 'MSSG13CDE4': 'MSSG13CDE4', 'MSSG13_4': 'MSSG13_4', 'SERCDE5': 'SERCDE5', 'ASSOC5': 'ASSOC5', 'SERIES5': 'SERIES5', 'MSG13CDE5': 'MSG13CDE5', 'MSG13_5': 'MSG13_5', 'MSSG13CDE5': 'MSSG13CDE5', 'MSSG13_5': 'MSSG13_5', 'SERCDE6': 'SERCDE6', 'ASSOC6': 'ASSOC6', 'SERIES6': 'SERIES6', 'MSG13CDE6': 'MSG13CDE6', 'MSG13_6': 'MSG13_6', 'MSSG13CDE6': 'MSSG13CDE6', 'MSSG13_6': 'MSSG13_6', 'SERCDE7': 'SERCDE7', 'ASSOC7': 'ASSOC7', 'SERIES7': 'SERIES7', 'MSG13CDE7': 'MSG13CDE7', 'MSG13_7': 'MSG13_7', 'MSSG13CDE7': 'MSSG13CDE7', 'MSSG13_7': 'MSSG13_7', 'SERCDE8': 'SERCDE8', 'ASSOC8': 'ASSOC8', 'SERIES8': 'SERIES8', 'MSG13CDE8': 'MSG13CDE8', 'MSG13_8': 'MSG13_8', 'MSSG13CDE8': 'MSSG13CDE8', 'MSSG13_8': 'MSSG13_8', 'MSSG_SYMB': 'MSSG_SYMB', 'MAPSYMB16': 'MAPSYMB16', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AncientWoodlandInventory_2.set('fieldAliases', {'SQUARE': 'SQUARE', 'SITE_ID': 'SITE_ID', 'COMP_ID': 'COMP_ID', 'WOOD_ID': 'WOOD_ID', 'HECTARE': 'HECTARE', 'DISTRICT': 'DISTRICT', 'PARISH': 'PARISH', 'SITE_NAME': 'Site', 'GRID_REF': 'Grid reference (OS)', 'EAST': 'EAST', 'NORTH': 'NORTH', 'SN_OTH': 'SN_OTH', 'ITE_NO': 'ITE_NO', 'ANTIQ_CODE': 'ANTIQ_CODE', 'ANTIQUITY': 'Antiquity', 'MAP_ORIGIN': 'MAP_ORIGIN', });
lyr_SoiltypeHuttonInstitute2019_1.set('fieldImages', {'OBJECTID_1': 'Hidden', 'CODE': 'Hidden', 'SMU_CODE': 'Hidden', 'SER_CODE': 'Hidden', 'PHASE_CODE': 'Hidden', 'SMU_TYPE': 'Hidden', 'ASSOC_NAME': 'Hidden', 'SMU_NAME': 'Hidden', 'MSG13_CDE': 'Hidden', 'MSG13': 'Hidden', 'MSSG13_CDE': 'Hidden', 'MSSG13': 'TextEdit', 'PHASE_DESC': 'Hidden', 'SOIL_DRAIN': 'Hidden', 'TEXT_QUAL': 'Hidden', 'COMPSOIL13': 'Hidden', 'LFRM_DSCR': 'Hidden', 'PM_DSCR': 'TextEdit', 'SMU_ASSOC_': 'Hidden', 'SMU_SYMB': 'Hidden', 'SERCDE1': 'Hidden', 'ASSOC1': 'Hidden', 'SERIES1': 'Hidden', 'MSG13CDE1': 'Hidden', 'MSG13_1': 'Hidden', 'MSSG13CDE1': 'Hidden', 'MSSG13_1': 'Hidden', 'SERCDE2': 'Hidden', 'ASSOC2': 'Hidden', 'SERIES2': 'Hidden', 'MSG13CDE2': 'Hidden', 'MSG13_2': 'Hidden', 'MSSG13CDE2': 'Hidden', 'MSSG13_2': 'Hidden', 'SERCDE3': 'Hidden', 'ASSOC3': 'Hidden', 'SERIES3': 'Hidden', 'MSG13CDE3': 'Hidden', 'MSG13_3': 'Hidden', 'MSSG13CDE3': 'Hidden', 'MSSG13_3': 'Hidden', 'SERCDE4': 'Hidden', 'ASSOC4': 'Hidden', 'SERIES4': 'Hidden', 'MSG13CDE4': 'Hidden', 'MSG13_4': 'Hidden', 'MSSG13CDE4': 'Hidden', 'MSSG13_4': 'Hidden', 'SERCDE5': 'Hidden', 'ASSOC5': 'Hidden', 'SERIES5': 'Hidden', 'MSG13CDE5': 'Hidden', 'MSG13_5': 'Hidden', 'MSSG13CDE5': 'Hidden', 'MSSG13_5': 'Hidden', 'SERCDE6': 'Hidden', 'ASSOC6': 'Hidden', 'SERIES6': 'Hidden', 'MSG13CDE6': 'Hidden', 'MSG13_6': 'Hidden', 'MSSG13CDE6': 'Hidden', 'MSSG13_6': 'Hidden', 'SERCDE7': 'Hidden', 'ASSOC7': 'Hidden', 'SERIES7': 'Hidden', 'MSG13CDE7': 'Hidden', 'MSG13_7': 'Hidden', 'MSSG13CDE7': 'Hidden', 'MSSG13_7': 'Hidden', 'SERCDE8': 'Hidden', 'ASSOC8': 'Hidden', 'SERIES8': 'Hidden', 'MSG13CDE8': 'Hidden', 'MSG13_8': 'Hidden', 'MSSG13CDE8': 'Hidden', 'MSSG13_8': 'Hidden', 'MSSG_SYMB': 'Hidden', 'MAPSYMB16': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_AncientWoodlandInventory_2.set('fieldImages', {'SQUARE': 'Hidden', 'SITE_ID': 'Hidden', 'COMP_ID': 'Hidden', 'WOOD_ID': 'Hidden', 'HECTARE': 'Hidden', 'DISTRICT': 'Hidden', 'PARISH': 'Hidden', 'SITE_NAME': 'TextEdit', 'GRID_REF': 'TextEdit', 'EAST': 'Hidden', 'NORTH': 'Hidden', 'SN_OTH': 'Hidden', 'ITE_NO': 'Hidden', 'ANTIQ_CODE': 'Hidden', 'ANTIQUITY': 'TextEdit', 'MAP_ORIGIN': 'Hidden', });
lyr_SoiltypeHuttonInstitute2019_1.set('fieldLabels', {'MSSG13': 'inline label', 'PM_DSCR': 'inline label', });
lyr_AncientWoodlandInventory_2.set('fieldLabels', {'SITE_NAME': 'inline label', 'GRID_REF': 'inline label', 'ANTIQUITY': 'inline label', });
lyr_AncientWoodlandInventory_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});