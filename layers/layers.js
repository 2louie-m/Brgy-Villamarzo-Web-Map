ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32651").setExtent([316677.091643, 1837795.326433, 347644.029675, 1862369.831027]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BarangayAdminBoundaries_2 = new ol.format.GeoJSON();
var features_BarangayAdminBoundaries_2 = format_BarangayAdminBoundaries_2.readFeatures(json_BarangayAdminBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_BarangayAdminBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayAdminBoundaries_2.addFeatures(features_BarangayAdminBoundaries_2);
var lyr_BarangayAdminBoundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarangayAdminBoundaries_2, 
                style: style_BarangayAdminBoundaries_2,
                popuplayertitle: 'Barangay Admin Boundaries',
                interactive: false,
                title: '<img src="styles/legend/BarangayAdminBoundaries_2.png" /> Barangay Admin Boundaries'
            });
var format_CordonMap_3 = new ol.format.GeoJSON();
var features_CordonMap_3 = format_CordonMap_3.readFeatures(json_CordonMap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_CordonMap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CordonMap_3.addFeatures(features_CordonMap_3);
var lyr_CordonMap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CordonMap_3, 
                style: style_CordonMap_3,
                popuplayertitle: 'Cordon Map',
                interactive: false,
                title: '<img src="styles/legend/CordonMap_3.png" /> Cordon Map'
            });
var format_Farmland_4 = new ol.format.GeoJSON();
var features_Farmland_4 = format_Farmland_4.readFeatures(json_Farmland_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_Farmland_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Farmland_4.addFeatures(features_Farmland_4);
var lyr_Farmland_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Farmland_4, 
                style: style_Farmland_4,
                popuplayertitle: 'Farmland',
                interactive: false,
                title: '<img src="styles/legend/Farmland_4.png" /> Farmland'
            });
var format_FishPond_5 = new ol.format.GeoJSON();
var features_FishPond_5 = format_FishPond_5.readFeatures(json_FishPond_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_FishPond_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishPond_5.addFeatures(features_FishPond_5);
var lyr_FishPond_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishPond_5, 
                style: style_FishPond_5,
                popuplayertitle: 'Fish Pond',
                interactive: false,
                title: '<img src="styles/legend/FishPond_5.png" /> Fish Pond'
            });
var format_ResidentialArea_6 = new ol.format.GeoJSON();
var features_ResidentialArea_6 = format_ResidentialArea_6.readFeatures(json_ResidentialArea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_ResidentialArea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialArea_6.addFeatures(features_ResidentialArea_6);
var lyr_ResidentialArea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialArea_6, 
                style: style_ResidentialArea_6,
                popuplayertitle: 'Residential Area',
                interactive: false,
                title: '<img src="styles/legend/ResidentialArea_6.png" /> Residential Area'
            });
var format_RiverStream_7 = new ol.format.GeoJSON();
var features_RiverStream_7 = format_RiverStream_7.readFeatures(json_RiverStream_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_RiverStream_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverStream_7.addFeatures(features_RiverStream_7);
var lyr_RiverStream_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverStream_7, 
                style: style_RiverStream_7,
                popuplayertitle: 'River/Stream',
                interactive: false,
                title: '<img src="styles/legend/RiverStream_7.png" /> River/Stream'
            });
var format_BarangayRoad_8 = new ol.format.GeoJSON();
var features_BarangayRoad_8 = format_BarangayRoad_8.readFeatures(json_BarangayRoad_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_BarangayRoad_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayRoad_8.addFeatures(features_BarangayRoad_8);
var lyr_BarangayRoad_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarangayRoad_8, 
                style: style_BarangayRoad_8,
                popuplayertitle: 'Barangay Road',
                interactive: false,
                title: '<img src="styles/legend/BarangayRoad_8.png" /> Barangay Road'
            });
var format_BuildingFootprints_9 = new ol.format.GeoJSON();
var features_BuildingFootprints_9 = format_BuildingFootprints_9.readFeatures(json_BuildingFootprints_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_BuildingFootprints_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingFootprints_9.addFeatures(features_BuildingFootprints_9);
var lyr_BuildingFootprints_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingFootprints_9, 
                style: style_BuildingFootprints_9,
                popuplayertitle: 'Building Footprints',
                interactive: false,
                title: '<img src="styles/legend/BuildingFootprints_9.png" /> Building Footprints'
            });
var format_VillamarzoAdminBoundary_10 = new ol.format.GeoJSON();
var features_VillamarzoAdminBoundary_10 = format_VillamarzoAdminBoundary_10.readFeatures(json_VillamarzoAdminBoundary_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32651'});
var jsonSource_VillamarzoAdminBoundary_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillamarzoAdminBoundary_10.addFeatures(features_VillamarzoAdminBoundary_10);
var lyr_VillamarzoAdminBoundary_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillamarzoAdminBoundary_10, 
                style: style_VillamarzoAdminBoundary_10,
                popuplayertitle: 'Villamarzo Admin Boundary',
                interactive: false,
                title: '<img src="styles/legend/VillamarzoAdminBoundary_10.png" /> Villamarzo Admin Boundary'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_BarangayAdminBoundaries_2.setVisible(true);lyr_CordonMap_3.setVisible(true);lyr_Farmland_4.setVisible(true);lyr_FishPond_5.setVisible(true);lyr_ResidentialArea_6.setVisible(true);lyr_RiverStream_7.setVisible(true);lyr_BarangayRoad_8.setVisible(true);lyr_BuildingFootprints_9.setVisible(true);lyr_VillamarzoAdminBoundary_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_BarangayAdminBoundaries_2,lyr_CordonMap_3,lyr_Farmland_4,lyr_FishPond_5,lyr_ResidentialArea_6,lyr_RiverStream_7,lyr_BarangayRoad_8,lyr_BuildingFootprints_9,lyr_VillamarzoAdminBoundary_10];
lyr_BarangayAdminBoundaries_2.set('fieldAliases', {'adm1_psgc': 'adm1_psgc', 'adm2_psgc': 'adm2_psgc', 'adm3_psgc': 'adm3_psgc', 'adm4_psgc': 'adm4_psgc', 'adm4_en': 'adm4_en', 'geo_level': 'geo_level', 'len_crs': 'len_crs', 'area_crs': 'area_crs', 'len_km': 'len_km', 'area_km2': 'area_km2', 'Pop': 'Pop', 'Area': 'Area', 'P Density': 'P Density', });
lyr_CordonMap_3.set('fieldAliases', {'adm1_psgc': 'adm1_psgc', 'adm2_psgc': 'adm2_psgc', 'adm3_psgc': 'adm3_psgc', 'adm3_en': 'adm3_en', 'geo_level': 'geo_level', 'len_crs': 'len_crs', 'area_crs': 'area_crs', 'len_km': 'len_km', 'area_km2': 'area_km2', });
lyr_Farmland_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', });
lyr_FishPond_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'produce': 'produce', 'water': 'water', 'landuse': 'landuse', 'aquaculture': 'aquaculture', });
lyr_ResidentialArea_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', });
lyr_RiverStream_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'usage': 'usage', 'tunnel': 'tunnel', 'layer': 'layer', 'name': 'name', });
lyr_BarangayRoad_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'service': 'service', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'noref': 'noref', 'noname': 'noname', 'surface': 'surface', });
lyr_BuildingFootprints_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'sport': 'sport', 'leisure': 'leisure', 'layer': 'layer', });
lyr_VillamarzoAdminBoundary_10.set('fieldAliases', {'adm1_psgc': 'adm1_psgc', 'adm2_psgc': 'adm2_psgc', 'adm3_psgc': 'adm3_psgc', 'adm4_psgc': 'adm4_psgc', 'adm4_en': 'adm4_en', 'geo_level': 'geo_level', 'len_crs': 'len_crs', 'area_crs': 'area_crs', 'len_km': 'len_km', 'area_km2': 'area_km2', 'Pop': 'Pop', 'Area': 'Area', 'P Density': 'P Density', });
lyr_BarangayAdminBoundaries_2.set('fieldImages', {'adm1_psgc': 'TextEdit', 'adm2_psgc': 'TextEdit', 'adm3_psgc': 'TextEdit', 'adm4_psgc': 'TextEdit', 'adm4_en': 'TextEdit', 'geo_level': 'TextEdit', 'len_crs': 'TextEdit', 'area_crs': 'TextEdit', 'len_km': 'TextEdit', 'area_km2': 'TextEdit', 'Pop': 'TextEdit', 'Area': 'TextEdit', 'P Density': 'TextEdit', });
lyr_CordonMap_3.set('fieldImages', {'adm1_psgc': 'TextEdit', 'adm2_psgc': 'TextEdit', 'adm3_psgc': 'TextEdit', 'adm3_en': 'TextEdit', 'geo_level': 'TextEdit', 'len_crs': 'TextEdit', 'area_crs': 'TextEdit', 'len_km': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_Farmland_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', });
lyr_FishPond_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'natural': 'TextEdit', 'produce': 'TextEdit', 'water': 'TextEdit', 'landuse': 'TextEdit', 'aquaculture': 'TextEdit', });
lyr_ResidentialArea_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', });
lyr_RiverStream_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'usage': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', 'name': 'TextEdit', });
lyr_BarangayRoad_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'service': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'noref': 'TextEdit', 'noname': 'TextEdit', 'surface': 'TextEdit', });
lyr_BuildingFootprints_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'layer': 'TextEdit', });
lyr_VillamarzoAdminBoundary_10.set('fieldImages', {'adm1_psgc': 'TextEdit', 'adm2_psgc': 'TextEdit', 'adm3_psgc': 'TextEdit', 'adm4_psgc': 'TextEdit', 'adm4_en': 'TextEdit', 'geo_level': 'TextEdit', 'len_crs': 'TextEdit', 'area_crs': 'TextEdit', 'len_km': 'TextEdit', 'area_km2': 'TextEdit', 'Pop': 'TextEdit', 'Area': 'TextEdit', 'P Density': 'TextEdit', });
lyr_BarangayAdminBoundaries_2.set('fieldLabels', {'adm1_psgc': 'inline label - always visible', 'adm2_psgc': 'no label', 'adm3_psgc': 'no label', 'adm4_psgc': 'no label', 'adm4_en': 'no label', 'geo_level': 'no label', 'len_crs': 'no label', 'area_crs': 'no label', 'len_km': 'no label', 'area_km2': 'no label', 'Pop': 'no label', 'Area': 'no label', 'P Density': 'no label', });
lyr_CordonMap_3.set('fieldLabels', {'adm1_psgc': 'no label', 'adm2_psgc': 'no label', 'adm3_psgc': 'no label', 'adm3_en': 'no label', 'geo_level': 'no label', 'len_crs': 'no label', 'area_crs': 'no label', 'len_km': 'no label', 'area_km2': 'no label', });
lyr_Farmland_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', });
lyr_FishPond_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', 'produce': 'no label', 'water': 'no label', 'landuse': 'no label', 'aquaculture': 'no label', });
lyr_ResidentialArea_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', });
lyr_RiverStream_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'usage': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'name': 'no label', });
lyr_BarangayRoad_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'service': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'noref': 'no label', 'noname': 'no label', 'surface': 'no label', });
lyr_BuildingFootprints_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'sport': 'no label', 'leisure': 'no label', 'layer': 'no label', });
lyr_VillamarzoAdminBoundary_10.set('fieldLabels', {'adm1_psgc': 'no label', 'adm2_psgc': 'no label', 'adm3_psgc': 'no label', 'adm4_psgc': 'no label', 'adm4_en': 'no label', 'geo_level': 'no label', 'len_crs': 'no label', 'area_crs': 'no label', 'len_km': 'no label', 'area_km2': 'no label', 'Pop': 'no label', 'Area': 'no label', 'P Density': 'no label', });
lyr_VillamarzoAdminBoundary_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});