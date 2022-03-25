var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_20220325_1020tracks_1 = new ol.format.GeoJSON();
var features_20220325_1020tracks_1 = format_20220325_1020tracks_1.readFeatures(json_20220325_1020tracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20220325_1020tracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20220325_1020tracks_1.addFeatures(features_20220325_1020tracks_1);
var lyr_20220325_1020tracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20220325_1020tracks_1, 
                style: style_20220325_1020tracks_1,
                interactive: true,
                title: '<img src="styles/legend/20220325_1020tracks_1.png" /> 2022-03-25_10-20 — tracks'
            });
var format_Recensementoiseau_2 = new ol.format.GeoJSON();
var features_Recensementoiseau_2 = format_Recensementoiseau_2.readFeatures(json_Recensementoiseau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recensementoiseau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recensementoiseau_2.addFeatures(features_Recensementoiseau_2);
var lyr_Recensementoiseau_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recensementoiseau_2, 
                style: style_Recensementoiseau_2,
                interactive: true,
                title: '<img src="styles/legend/Recensementoiseau_2.png" /> Recensement  oiseau'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_20220325_1020tracks_1.setVisible(true);lyr_Recensementoiseau_2.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_20220325_1020tracks_1,lyr_Recensementoiseau_2];
lyr_20220325_1020tracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', 'locus_activity': 'locus_activity', });
lyr_Recensementoiseau_2.set('fieldAliases', {'Nom oiseau': 'Nom oiseau', 'Nombre': 'Nombre', 'Contact': 'Contact', });
lyr_20220325_1020tracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'line': 'TextEdit', 'locus_activity': 'TextEdit', });
lyr_Recensementoiseau_2.set('fieldImages', {'Nom oiseau': 'TextEdit', 'Nombre': 'Range', 'Contact': 'TextEdit', });
lyr_20220325_1020tracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', 'locus_activity': 'no label', });
lyr_Recensementoiseau_2.set('fieldLabels', {'Nom oiseau': 'inline label', 'Nombre': 'inline label', 'Contact': 'inline label', });
lyr_Recensementoiseau_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});