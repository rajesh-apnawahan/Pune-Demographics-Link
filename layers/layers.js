var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Temple_1 = new ol.format.GeoJSON();
var features_Temple_1 = format_Temple_1.readFeatures(json_Temple_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_1.addFeatures(features_Temple_1);
var lyr_Temple_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_1, 
                style: style_Temple_1,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_1.png" /> Temple'
            });
var format_Education_2 = new ol.format.GeoJSON();
var features_Education_2 = format_Education_2.readFeatures(json_Education_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_2.addFeatures(features_Education_2);
var lyr_Education_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_2, 
                style: style_Education_2,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_2.png" /> Education'
            });
var format_GovtOff_3 = new ol.format.GeoJSON();
var features_GovtOff_3 = format_GovtOff_3.readFeatures(json_GovtOff_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GovtOff_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovtOff_3.addFeatures(features_GovtOff_3);
var lyr_GovtOff_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GovtOff_3, 
                style: style_GovtOff_3,
                popuplayertitle: "Govt Off",
                interactive: true,
                title: '<img src="styles/legend/GovtOff_3.png" /> Govt Off'
            });
var format_PSU_4 = new ol.format.GeoJSON();
var features_PSU_4 = format_PSU_4.readFeatures(json_PSU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSU_4.addFeatures(features_PSU_4);
var lyr_PSU_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSU_4, 
                style: style_PSU_4,
                popuplayertitle: "PSU",
                interactive: true,
                title: '<img src="styles/legend/PSU_4.png" /> PSU'
            });
var format_Office_5 = new ol.format.GeoJSON();
var features_Office_5 = format_Office_5.readFeatures(json_Office_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Office_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Office_5.addFeatures(features_Office_5);
var lyr_Office_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Office_5, 
                style: style_Office_5,
                popuplayertitle: "Office",
                interactive: true,
                title: '<img src="styles/legend/Office_5.png" /> Office'
            });
var format_Industries_6 = new ol.format.GeoJSON();
var features_Industries_6 = format_Industries_6.readFeatures(json_Industries_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industries_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industries_6.addFeatures(features_Industries_6);
var lyr_Industries_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industries_6, 
                style: style_Industries_6,
                popuplayertitle: "Industries",
                interactive: true,
                title: '<img src="styles/legend/Industries_6.png" /> Industries'
            });
var format_PuneRWI_7 = new ol.format.GeoJSON();
var features_PuneRWI_7 = format_PuneRWI_7.readFeatures(json_PuneRWI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneRWI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneRWI_7.addFeatures(features_PuneRWI_7);
var lyr_PuneRWI_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneRWI_7, 
                style: style_PuneRWI_7,
                popuplayertitle: "Pune RWI",
                interactive: true,
    title: 'Pune RWI<br />\
    <img src="styles/legend/PuneRWI_7_0.png" /> 0.589 - 0.655<br />\
    <img src="styles/legend/PuneRWI_7_1.png" /> 0.655 - 0.722<br />\
    <img src="styles/legend/PuneRWI_7_2.png" /> 0.722 - 0.788<br />\
    <img src="styles/legend/PuneRWI_7_3.png" /> 0.788 - 0.855<br />\
    <img src="styles/legend/PuneRWI_7_4.png" /> 0.855 - 0.921<br />\
    <img src="styles/legend/PuneRWI_7_5.png" /> 0.921 - 0.988<br />\
    <img src="styles/legend/PuneRWI_7_6.png" /> 0.988 - 1.054<br />\
    <img src="styles/legend/PuneRWI_7_7.png" /> 1.054 - 1.121<br />\
    <img src="styles/legend/PuneRWI_7_8.png" /> 1.121 - 1.187<br />\
    <img src="styles/legend/PuneRWI_7_9.png" /> 1.187 - 1.254<br />\
    <img src="styles/legend/PuneRWI_7_10.png" /> 1.254 - 1.32<br />\
    <img src="styles/legend/PuneRWI_7_11.png" /> 1.32 - 1.387<br />\
    <img src="styles/legend/PuneRWI_7_12.png" /> 1.387 - 1.453<br />\
    <img src="styles/legend/PuneRWI_7_13.png" /> 1.453 - 1.52<br />\
    <img src="styles/legend/PuneRWI_7_14.png" /> 1.52 - 1.586<br />'
        });
var format_PuneBoundaryMergedMtrs_8 = new ol.format.GeoJSON();
var features_PuneBoundaryMergedMtrs_8 = format_PuneBoundaryMergedMtrs_8.readFeatures(json_PuneBoundaryMergedMtrs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneBoundaryMergedMtrs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneBoundaryMergedMtrs_8.addFeatures(features_PuneBoundaryMergedMtrs_8);
var lyr_PuneBoundaryMergedMtrs_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneBoundaryMergedMtrs_8, 
                style: style_PuneBoundaryMergedMtrs_8,
                popuplayertitle: "Pune Boundary Merged Mtrs",
                interactive: true,
    title: 'Pune Boundary Merged Mtrs<br />\
    <img src="styles/legend/PuneBoundaryMergedMtrs_8_0.png" /> Kirkee (CB)<br />\
    <img src="styles/legend/PuneBoundaryMergedMtrs_8_1.png" /> Lahagaon  (N.V.)<br />\
    <img src="styles/legend/PuneBoundaryMergedMtrs_8_2.png" /> Pune (M Corp.)<br />\
    <img src="styles/legend/PuneBoundaryMergedMtrs_8_3.png" /> Yavatmal<br />\
    <img src="styles/legend/PuneBoundaryMergedMtrs_8_4.png" /> <br />'
        });
var format_PMPMLStops_9 = new ol.format.GeoJSON();
var features_PMPMLStops_9 = format_PMPMLStops_9.readFeatures(json_PMPMLStops_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMPMLStops_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMPMLStops_9.addFeatures(features_PMPMLStops_9);
var lyr_PMPMLStops_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PMPMLStops_9, 
                style: style_PMPMLStops_9,
                popuplayertitle: "PMPML Stops",
                interactive: true,
                title: '<img src="styles/legend/PMPMLStops_9.png" /> PMPML Stops'
            });
var format_PunePopulation_10 = new ol.format.GeoJSON();
var features_PunePopulation_10 = format_PunePopulation_10.readFeatures(json_PunePopulation_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PunePopulation_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PunePopulation_10.addFeatures(features_PunePopulation_10);
var lyr_PunePopulation_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PunePopulation_10, 
                style: style_PunePopulation_10,
                popuplayertitle: "Pune Population",
                interactive: true,
                title: '<img src="styles/legend/PunePopulation_10.png" /> Pune Population'
            });
var format_StopPopPuneDissolved250mtr_11 = new ol.format.GeoJSON();
var features_StopPopPuneDissolved250mtr_11 = format_StopPopPuneDissolved250mtr_11.readFeatures(json_StopPopPuneDissolved250mtr_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopPopPuneDissolved250mtr_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopPopPuneDissolved250mtr_11.addFeatures(features_StopPopPuneDissolved250mtr_11);
var lyr_StopPopPuneDissolved250mtr_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopPopPuneDissolved250mtr_11, 
                style: style_StopPopPuneDissolved250mtr_11,
                popuplayertitle: "Stop Pop Pune Dissolved 250 mtr",
                interactive: true,
                title: '<img src="styles/legend/StopPopPuneDissolved250mtr_11.png" /> Stop Pop Pune Dissolved 250 mtr'
            });
var format_StopsinsidePuneBoundary_12 = new ol.format.GeoJSON();
var features_StopsinsidePuneBoundary_12 = format_StopsinsidePuneBoundary_12.readFeatures(json_StopsinsidePuneBoundary_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsidePuneBoundary_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsidePuneBoundary_12.addFeatures(features_StopsinsidePuneBoundary_12);
var lyr_StopsinsidePuneBoundary_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsinsidePuneBoundary_12, 
                style: style_StopsinsidePuneBoundary_12,
                popuplayertitle: "Stops inside Pune Boundary",
                interactive: true,
                title: '<img src="styles/legend/StopsinsidePuneBoundary_12.png" /> Stops inside Pune Boundary'
            });
var format_PopUncoveredPune_13 = new ol.format.GeoJSON();
var features_PopUncoveredPune_13 = format_PopUncoveredPune_13.readFeatures(json_PopUncoveredPune_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopUncoveredPune_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopUncoveredPune_13.addFeatures(features_PopUncoveredPune_13);
var lyr_PopUncoveredPune_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopUncoveredPune_13, 
                style: style_PopUncoveredPune_13,
                popuplayertitle: "Pop Uncovered Pune",
                interactive: true,
                title: '<img src="styles/legend/PopUncoveredPune_13.png" /> Pop Uncovered Pune'
            });
var format_PunePopGridUncovered_14 = new ol.format.GeoJSON();
var features_PunePopGridUncovered_14 = format_PunePopGridUncovered_14.readFeatures(json_PunePopGridUncovered_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PunePopGridUncovered_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PunePopGridUncovered_14.addFeatures(features_PunePopGridUncovered_14);
var lyr_PunePopGridUncovered_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PunePopGridUncovered_14, 
                style: style_PunePopGridUncovered_14,
                popuplayertitle: "Pune Pop Grid Uncovered",
                interactive: true,
    title: 'Pune Pop Grid Uncovered<br />\
    <img src="styles/legend/PunePopGridUncovered_14_0.png" /> 14 - 2135<br />\
    <img src="styles/legend/PunePopGridUncovered_14_1.png" /> 2135 - 4256<br />\
    <img src="styles/legend/PunePopGridUncovered_14_2.png" /> 4256 - 6377<br />\
    <img src="styles/legend/PunePopGridUncovered_14_3.png" /> 6377 - 8497<br />\
    <img src="styles/legend/PunePopGridUncovered_14_4.png" /> 8497 - 10618<br />\
    <img src="styles/legend/PunePopGridUncovered_14_5.png" /> 10618 - 12739<br />\
    <img src="styles/legend/PunePopGridUncovered_14_6.png" /> 12739 - 14860<br />\
    <img src="styles/legend/PunePopGridUncovered_14_7.png" /> 14860 - 16981<br />\
    <img src="styles/legend/PunePopGridUncovered_14_8.png" /> 16981 - 19102<br />\
    <img src="styles/legend/PunePopGridUncovered_14_9.png" /> 19102 - 21223<br />\
    <img src="styles/legend/PunePopGridUncovered_14_10.png" /> 21223 - 23344<br />\
    <img src="styles/legend/PunePopGridUncovered_14_11.png" /> 23344 - 25464<br />\
    <img src="styles/legend/PunePopGridUncovered_14_12.png" /> 25464 - 27585<br />\
    <img src="styles/legend/PunePopGridUncovered_14_13.png" /> 27585 - 29706<br />\
    <img src="styles/legend/PunePopGridUncovered_14_14.png" /> 29706 - 31827<br />'
        });
var format_PimpriBoundaryMergedMtrs_15 = new ol.format.GeoJSON();
var features_PimpriBoundaryMergedMtrs_15 = format_PimpriBoundaryMergedMtrs_15.readFeatures(json_PimpriBoundaryMergedMtrs_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpriBoundaryMergedMtrs_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpriBoundaryMergedMtrs_15.addFeatures(features_PimpriBoundaryMergedMtrs_15);
var lyr_PimpriBoundaryMergedMtrs_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpriBoundaryMergedMtrs_15, 
                style: style_PimpriBoundaryMergedMtrs_15,
                popuplayertitle: "Pimpri Boundary Merged Mtrs",
                interactive: true,
    title: 'Pimpri Boundary Merged Mtrs<br />\
    <img src="styles/legend/PimpriBoundaryMergedMtrs_15_0.png" /> Pimpale Gurav<br />\
    <img src="styles/legend/PimpriBoundaryMergedMtrs_15_1.png" /> Pimpale Saudagar<br />\
    <img src="styles/legend/PimpriBoundaryMergedMtrs_15_2.png" /> Pimpri Chinchwad (M Corp.)<br />\
    <img src="styles/legend/PimpriBoundaryMergedMtrs_15_3.png" /> <br />'
        });
var format_StopPopPimpriDissolved250Mtr_16 = new ol.format.GeoJSON();
var features_StopPopPimpriDissolved250Mtr_16 = format_StopPopPimpriDissolved250Mtr_16.readFeatures(json_StopPopPimpriDissolved250Mtr_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopPopPimpriDissolved250Mtr_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopPopPimpriDissolved250Mtr_16.addFeatures(features_StopPopPimpriDissolved250Mtr_16);
var lyr_StopPopPimpriDissolved250Mtr_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopPopPimpriDissolved250Mtr_16, 
                style: style_StopPopPimpriDissolved250Mtr_16,
                popuplayertitle: "Stop Pop Pimpri Dissolved 250 Mtr",
                interactive: true,
                title: '<img src="styles/legend/StopPopPimpriDissolved250Mtr_16.png" /> Stop Pop Pimpri Dissolved 250 Mtr'
            });
var format_StopsinsidePimpryBoundary_17 = new ol.format.GeoJSON();
var features_StopsinsidePimpryBoundary_17 = format_StopsinsidePimpryBoundary_17.readFeatures(json_StopsinsidePimpryBoundary_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsidePimpryBoundary_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsidePimpryBoundary_17.addFeatures(features_StopsinsidePimpryBoundary_17);
var lyr_StopsinsidePimpryBoundary_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsinsidePimpryBoundary_17, 
                style: style_StopsinsidePimpryBoundary_17,
                popuplayertitle: "Stops inside Pimpry Boundary",
                interactive: true,
                title: '<img src="styles/legend/StopsinsidePimpryBoundary_17.png" /> Stops inside Pimpry Boundary'
            });
var format_PimpriPopUncovered_18 = new ol.format.GeoJSON();
var features_PimpriPopUncovered_18 = format_PimpriPopUncovered_18.readFeatures(json_PimpriPopUncovered_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpriPopUncovered_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpriPopUncovered_18.addFeatures(features_PimpriPopUncovered_18);
var lyr_PimpriPopUncovered_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpriPopUncovered_18, 
                style: style_PimpriPopUncovered_18,
                popuplayertitle: "Pimpri Pop Uncovered",
                interactive: true,
                title: '<img src="styles/legend/PimpriPopUncovered_18.png" /> Pimpri Pop Uncovered'
            });
var format_PimpriPopGridUncovered_19 = new ol.format.GeoJSON();
var features_PimpriPopGridUncovered_19 = format_PimpriPopGridUncovered_19.readFeatures(json_PimpriPopGridUncovered_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpriPopGridUncovered_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpriPopGridUncovered_19.addFeatures(features_PimpriPopGridUncovered_19);
var lyr_PimpriPopGridUncovered_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpriPopGridUncovered_19, 
                style: style_PimpriPopGridUncovered_19,
                popuplayertitle: "Pimpri Pop Grid Uncovered",
                interactive: true,
    title: 'Pimpri Pop Grid Uncovered<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_0.png" /> 1 - 828<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_1.png" /> 828 - 1656<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_2.png" /> 1656 - 2483<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_3.png" /> 2483 - 3311<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_4.png" /> 3311 - 4138<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_5.png" /> 4138 - 4966<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_6.png" /> 4966 - 5793<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_7.png" /> 5793 - 6621<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_8.png" /> 6621 - 7448<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_9.png" /> 7448 - 8276<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_10.png" /> 8276 - 9103<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_11.png" /> 9103 - 9931<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_12.png" /> 9931 - 10758<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_13.png" /> 10758 - 11586<br />\
    <img src="styles/legend/PimpriPopGridUncovered_19_14.png" /> 11586 - 12413<br />'
        });
var format_PimpriRWI_20 = new ol.format.GeoJSON();
var features_PimpriRWI_20 = format_PimpriRWI_20.readFeatures(json_PimpriRWI_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpriRWI_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpriRWI_20.addFeatures(features_PimpriRWI_20);
var lyr_PimpriRWI_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpriRWI_20, 
                style: style_PimpriRWI_20,
                popuplayertitle: "Pimpri RWI",
                interactive: true,
    title: 'Pimpri RWI<br />\
    <img src="styles/legend/PimpriRWI_20_0.png" /> 0.557 - 0.647<br />\
    <img src="styles/legend/PimpriRWI_20_1.png" /> 0.647 - 0.738<br />\
    <img src="styles/legend/PimpriRWI_20_2.png" /> 0.738 - 0.828<br />\
    <img src="styles/legend/PimpriRWI_20_3.png" /> 0.828 - 0.918<br />\
    <img src="styles/legend/PimpriRWI_20_4.png" /> 0.918 - 1.009<br />\
    <img src="styles/legend/PimpriRWI_20_5.png" /> 1.009 - 1.099<br />\
    <img src="styles/legend/PimpriRWI_20_6.png" /> 1.099 - 1.189<br />\
    <img src="styles/legend/PimpriRWI_20_7.png" /> 1.189 - 1.28<br />\
    <img src="styles/legend/PimpriRWI_20_8.png" /> 1.28 - 1.37<br />\
    <img src="styles/legend/PimpriRWI_20_9.png" /> 1.37 - 1.46<br />\
    <img src="styles/legend/PimpriRWI_20_10.png" /> 1.46 - 1.551<br />\
    <img src="styles/legend/PimpriRWI_20_11.png" /> 1.551 - 1.641<br />\
    <img src="styles/legend/PimpriRWI_20_12.png" /> 1.641 - 1.731<br />\
    <img src="styles/legend/PimpriRWI_20_13.png" /> 1.731 - 1.822<br />\
    <img src="styles/legend/PimpriRWI_20_14.png" /> 1.822 - 1.912<br />'
        });
var format_Rt64Distance_21 = new ol.format.GeoJSON();
var features_Rt64Distance_21 = format_Rt64Distance_21.readFeatures(json_Rt64Distance_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Distance_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Distance_21.addFeatures(features_Rt64Distance_21);
var lyr_Rt64Distance_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Distance_21, 
                style: style_Rt64Distance_21,
                popuplayertitle: "Rt 64 Distance",
                interactive: true,
                title: '<img src="styles/legend/Rt64Distance_21.png" /> Rt 64 Distance'
            });
var format_Rt64RecomMtrs_22 = new ol.format.GeoJSON();
var features_Rt64RecomMtrs_22 = format_Rt64RecomMtrs_22.readFeatures(json_Rt64RecomMtrs_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64RecomMtrs_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64RecomMtrs_22.addFeatures(features_Rt64RecomMtrs_22);
var lyr_Rt64RecomMtrs_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64RecomMtrs_22, 
                style: style_Rt64RecomMtrs_22,
                popuplayertitle: "Rt 64 Recom Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt64RecomMtrs_22.png" /> Rt 64 Recom Mtrs'
            });
var format_Rt64Overlay_23 = new ol.format.GeoJSON();
var features_Rt64Overlay_23 = format_Rt64Overlay_23.readFeatures(json_Rt64Overlay_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Overlay_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Overlay_23.addFeatures(features_Rt64Overlay_23);
var lyr_Rt64Overlay_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Overlay_23, 
                style: style_Rt64Overlay_23,
                popuplayertitle: "Rt 64 Overlay",
                interactive: true,
                title: '<img src="styles/legend/Rt64Overlay_23.png" /> Rt 64 Overlay'
            });
var format_Rt64Overlay2_24 = new ol.format.GeoJSON();
var features_Rt64Overlay2_24 = format_Rt64Overlay2_24.readFeatures(json_Rt64Overlay2_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt64Overlay2_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt64Overlay2_24.addFeatures(features_Rt64Overlay2_24);
var lyr_Rt64Overlay2_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt64Overlay2_24, 
                style: style_Rt64Overlay2_24,
                popuplayertitle: "Rt 64 Overlay 2",
                interactive: true,
                title: '<img src="styles/legend/Rt64Overlay2_24.png" /> Rt 64 Overlay 2'
            });
var format_Rt233UMtrs_25 = new ol.format.GeoJSON();
var features_Rt233UMtrs_25 = format_Rt233UMtrs_25.readFeatures(json_Rt233UMtrs_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233UMtrs_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233UMtrs_25.addFeatures(features_Rt233UMtrs_25);
var lyr_Rt233UMtrs_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233UMtrs_25, 
                style: style_Rt233UMtrs_25,
                popuplayertitle: "Rt 233U Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt233UMtrs_25.png" /> Rt 233U Mtrs'
            });
var format_Rt233Overlay_26 = new ol.format.GeoJSON();
var features_Rt233Overlay_26 = format_Rt233Overlay_26.readFeatures(json_Rt233Overlay_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Overlay_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Overlay_26.addFeatures(features_Rt233Overlay_26);
var lyr_Rt233Overlay_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Overlay_26, 
                style: style_Rt233Overlay_26,
                popuplayertitle: "Rt 233 Overlay",
                interactive: true,
                title: '<img src="styles/legend/Rt233Overlay_26.png" /> Rt 233 Overlay'
            });
var format_Rt233Recom_27 = new ol.format.GeoJSON();
var features_Rt233Recom_27 = format_Rt233Recom_27.readFeatures(json_Rt233Recom_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt233Recom_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt233Recom_27.addFeatures(features_Rt233Recom_27);
var lyr_Rt233Recom_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt233Recom_27, 
                style: style_Rt233Recom_27,
                popuplayertitle: "Rt 233 Recom",
                interactive: true,
                title: '<img src="styles/legend/Rt233Recom_27.png" /> Rt 233 Recom'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Temple_1.setVisible(true);lyr_Education_2.setVisible(true);lyr_GovtOff_3.setVisible(true);lyr_PSU_4.setVisible(true);lyr_Office_5.setVisible(true);lyr_Industries_6.setVisible(true);lyr_PuneRWI_7.setVisible(true);lyr_PuneBoundaryMergedMtrs_8.setVisible(true);lyr_PMPMLStops_9.setVisible(true);lyr_PunePopulation_10.setVisible(true);lyr_StopPopPuneDissolved250mtr_11.setVisible(true);lyr_StopsinsidePuneBoundary_12.setVisible(true);lyr_PopUncoveredPune_13.setVisible(true);lyr_PunePopGridUncovered_14.setVisible(true);lyr_PimpriBoundaryMergedMtrs_15.setVisible(true);lyr_StopPopPimpriDissolved250Mtr_16.setVisible(true);lyr_StopsinsidePimpryBoundary_17.setVisible(true);lyr_PimpriPopUncovered_18.setVisible(true);lyr_PimpriPopGridUncovered_19.setVisible(true);lyr_PimpriRWI_20.setVisible(true);lyr_Rt64Distance_21.setVisible(true);lyr_Rt64RecomMtrs_22.setVisible(true);lyr_Rt64Overlay_23.setVisible(true);lyr_Rt64Overlay2_24.setVisible(true);lyr_Rt233UMtrs_25.setVisible(true);lyr_Rt233Overlay_26.setVisible(true);lyr_Rt233Recom_27.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Temple_1,lyr_Education_2,lyr_GovtOff_3,lyr_PSU_4,lyr_Office_5,lyr_Industries_6,lyr_PuneRWI_7,lyr_PuneBoundaryMergedMtrs_8,lyr_PMPMLStops_9,lyr_PunePopulation_10,lyr_StopPopPuneDissolved250mtr_11,lyr_StopsinsidePuneBoundary_12,lyr_PopUncoveredPune_13,lyr_PunePopGridUncovered_14,lyr_PimpriBoundaryMergedMtrs_15,lyr_StopPopPimpriDissolved250Mtr_16,lyr_StopsinsidePimpryBoundary_17,lyr_PimpriPopUncovered_18,lyr_PimpriPopGridUncovered_19,lyr_PimpriRWI_20,lyr_Rt64Distance_21,lyr_Rt64RecomMtrs_22,lyr_Rt64Overlay_23,lyr_Rt64Overlay2_24,lyr_Rt233UMtrs_25,lyr_Rt233Overlay_26,lyr_Rt233Recom_27];
lyr_Temple_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', 'Name_2': 'Name_2', 'descript_1': 'descript_1', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Education_2.set('fieldAliases', {'amenity': 'amenity', 'phone': 'phone', 'addr_stree': 'addr_stree', 'name_mr': 'name_mr', 'name': 'name', });
lyr_GovtOff_3.set('fieldAliases', {'name_mr': 'name_mr', 'name': 'name', 'addr_stree': 'addr_stree', });
lyr_PSU_4.set('fieldAliases', {'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'name_en': 'name_en', 'name_mr': 'name_mr', 'name': 'name', });
lyr_Office_5.set('fieldAliases', {'office': 'office', 'addr_house': 'addr_house', 'addr_unit': 'addr_unit', 'addr_hou_1': 'addr_hou_1', 'name_mr': 'name_mr', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'name': 'name', });
lyr_Industries_6.set('fieldAliases', {'building': 'building', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_hou_1': 'addr_hou_1', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', });
lyr_PuneRWI_7.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'Pop': 'Pop', });
lyr_PuneBoundaryMergedMtrs_8.set('fieldAliases', {'shapeName': 'shapeName', 'Area KM2': 'Area KM2', 'Peri Km': 'Peri Km', });
lyr_PMPMLStops_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Stop_Name_': 'Stop_Name_', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'layer': 'layer', 'path': 'path', });
lyr_PunePopulation_10.set('fieldAliases', {'shapeName': 'shapeName', 'Pop': 'Pop', });
lyr_StopPopPuneDissolved250mtr_11.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', 'Pune Pop': 'Pune Pop', 'Coverage': 'Coverage', });
lyr_StopsinsidePuneBoundary_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Stop_Name_': 'Stop_Name_', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'layer': 'layer', 'path': 'path', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer_2': 'layer_2', 'path_2': 'path_2', });
lyr_PopUncoveredPune_13.set('fieldAliases', {'shapeName': 'shapeName', 'Pop': 'Pop', 'Pop Uncov': 'Pop Uncov', });
lyr_PunePopGridUncovered_14.set('fieldAliases', {'fid': 'fid', 'h3': 'h3', 'population': 'population', 'shapeName': 'shapeName', 'Pop': 'Pop', 'Pop Uncov': 'Pop Uncov', });
lyr_PimpriBoundaryMergedMtrs_15.set('fieldAliases', {'shapeName': 'shapeName', 'Area Km2': 'Area Km2', 'Peri Km': 'Peri Km', });
lyr_StopPopPimpriDissolved250Mtr_16.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', 'Pimpri Pop': 'Pimpri Pop', 'Coverage': 'Coverage', });
lyr_StopsinsidePimpryBoundary_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Stop_Name_': 'Stop_Name_', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'layer': 'layer', 'path': 'path', 'shapeName': 'shapeName', 'Area Km2': 'Area Km2', 'Peri Km': 'Peri Km', });
lyr_PimpriPopUncovered_18.set('fieldAliases', {'shapeName': 'shapeName', 'Area Km2': 'Area Km2', 'Peri Km': 'Peri Km', 'Pop': 'Pop', 'Pop Uncov': 'Pop Uncov', });
lyr_PimpriPopGridUncovered_19.set('fieldAliases', {'shapeName': 'shapeName', 'Area Km2': 'Area Km2', 'Peri Km': 'Peri Km', 'Pop': 'Pop', 'Pop Uncov': 'Pop Uncov', 'fid': 'fid', 'h3': 'h3', 'population': 'population', });
lyr_PimpriRWI_20.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'Area Km2': 'Area Km2', 'Peri Km': 'Peri Km', 'Pop': 'Pop', });
lyr_Rt64Distance_21.set('fieldAliases', {'Name': 'Name', 'length': 'length', 'Distance': 'Distance', });
lyr_Rt64RecomMtrs_22.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'length': 'length', });
lyr_Rt64Overlay_23.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Rt64Overlay2_24.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'Name': 'Name', });
lyr_Rt233UMtrs_25.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Rt233Overlay_26.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Rt233Recom_27.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', });
lyr_Temple_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': '', 'barrier': '', 'man_made': '', 'flag_type': '', 'addr_neigh': '', 'pincode': '', 'addr_subur': '', 'layer': '', 'polling_st': '', 'payment_de': '', 'payment_cr': '', 'payment_ca': '', 'internet_a': '', 'baby_feedi': '', 'air_condit': '', 'entrance': '', 'wheelchair': '', 'shop': '', 'payment_up': '', 'level': '', 'addr_floor': '', 'service_ti': '', 'website': '', 'phone': '', 'access': '', 'check_date': '', 'name_en': '', 'place_of_w': '', 'descriptio': '', 'name_hi': '', 'alt_name': '', 'building': '', 'addr_house': '', 'addr_hou_1': '', 'wikipedia': '', 'wikimedia_': '', 'wikidata': '', 'opening_ho': '', 'addr_state': '', 'addr_count': '', 'denominati': '', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': '', 'tourism': '', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'Name_2': '', 'descript_1': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', '_count': '', '_sum': '', '_mean': '', 'Pop': '', });
lyr_Education_2.set('fieldImages', {'amenity': 'TextEdit', 'phone': 'TextEdit', 'addr_stree': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', });
lyr_GovtOff_3.set('fieldImages', {'name_mr': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', });
lyr_PSU_4.set('fieldImages', {'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'name_en': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', });
lyr_Office_5.set('fieldImages', {'office': 'TextEdit', 'addr_house': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_hou_1': 'TextEdit', 'name_mr': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'name': 'TextEdit', });
lyr_Industries_6.set('fieldImages', {'building': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_PuneRWI_7.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'Pop': 'TextEdit', });
lyr_PuneBoundaryMergedMtrs_8.set('fieldImages', {'shapeName': 'TextEdit', 'Area KM2': 'Range', 'Peri Km': 'Range', });
lyr_PMPMLStops_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Stop_Name_': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PunePopulation_10.set('fieldImages', {'shapeName': 'TextEdit', 'Pop': 'Range', });
lyr_StopPopPuneDissolved250mtr_11.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'TextEdit', 'Pune Pop': 'Range', 'Coverage': 'Range', });
lyr_StopsinsidePuneBoundary_12.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Stop_Name_': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer_2': 'TextEdit', 'path_2': 'TextEdit', });
lyr_PopUncoveredPune_13.set('fieldImages', {'shapeName': 'TextEdit', 'Pop': 'TextEdit', 'Pop Uncov': 'TextEdit', });
lyr_PunePopGridUncovered_14.set('fieldImages', {'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'shapeName': 'TextEdit', 'Pop': 'TextEdit', 'Pop Uncov': 'TextEdit', });
lyr_PimpriBoundaryMergedMtrs_15.set('fieldImages', {'shapeName': 'TextEdit', 'Area Km2': 'Range', 'Peri Km': 'Range', });
lyr_StopPopPimpriDissolved250Mtr_16.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'TextEdit', 'Pimpri Pop': 'TextEdit', 'Coverage': 'TextEdit', });
lyr_StopsinsidePimpryBoundary_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Stop_Name_': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'shapeName': 'TextEdit', 'Area Km2': 'TextEdit', 'Peri Km': 'TextEdit', });
lyr_PimpriPopUncovered_18.set('fieldImages', {'shapeName': 'TextEdit', 'Area Km2': 'TextEdit', 'Peri Km': 'TextEdit', 'Pop': 'TextEdit', 'Pop Uncov': 'TextEdit', });
lyr_PimpriPopGridUncovered_19.set('fieldImages', {'shapeName': 'TextEdit', 'Area Km2': 'TextEdit', 'Peri Km': 'TextEdit', 'Pop': 'TextEdit', 'Pop Uncov': 'TextEdit', 'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', });
lyr_PimpriRWI_20.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'Area Km2': 'TextEdit', 'Peri Km': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt64Distance_21.set('fieldImages', {'Name': 'TextEdit', 'length': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Rt64RecomMtrs_22.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'length': 'TextEdit', });
lyr_Rt64Overlay_23.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Rt64Overlay2_24.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'Name': 'TextEdit', });
lyr_Rt233UMtrs_25.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Rt233Overlay_26.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Rt233Recom_27.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': '', });
lyr_Temple_1.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'descript_1': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'hidden field', });
lyr_Education_2.set('fieldLabels', {'amenity': 'inline label - visible with data', 'phone': 'inline label - always visible', 'addr_stree': 'inline label - always visible', 'name_mr': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_GovtOff_3.set('fieldLabels', {'name_mr': 'inline label - visible with data', 'name': 'header label - visible with data', 'addr_stree': 'inline label - visible with data', });
lyr_PSU_4.set('fieldLabels', {'addr_stree': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', 'name_en': 'inline label - visible with data', 'name_mr': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_Office_5.set('fieldLabels', {'office': 'inline label - visible with data', 'addr_house': 'inline label - visible with data', 'addr_unit': 'inline label - visible with data', 'addr_hou_1': 'inline label - visible with data', 'name_mr': 'inline label - visible with data', 'addr_stree': 'inline label - visible with data', 'addr_postc': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_Industries_6.set('fieldLabels', {'building': 'inline label - visible with data', 'name': 'header label - visible with data', 'addr_stree': 'inline label - visible with data', 'addr_postc': 'inline label - visible with data', 'addr_hou_1': 'inline label - visible with data', 'addr_distr': 'inline label - visible with data', 'addr_city': 'inline label - visible with data', });
lyr_PuneRWI_7.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'inline label - visible with data', 'error': 'inline label - visible with data', 'shapeName': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_PuneBoundaryMergedMtrs_8.set('fieldLabels', {'shapeName': 'header label - visible with data', 'Area KM2': 'inline label - visible with data', 'Peri Km': 'inline label - visible with data', });
lyr_PMPMLStops_9.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Stop_Name_': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'Key': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_PunePopulation_10.set('fieldLabels', {'shapeName': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_StopPopPuneDissolved250mtr_11.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'Pune Pop': 'inline label - visible with data', 'Coverage': 'inline label - visible with data', });
lyr_StopsinsidePuneBoundary_12.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Stop_Name_': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'Key': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', 'shapeName': 'inline label - visible with data', 'shapeISO': 'inline label - visible with data', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'inline label - visible with data', 'layer_2': 'inline label - visible with data', 'path_2': 'inline label - visible with data', });
lyr_PopUncoveredPune_13.set('fieldLabels', {'shapeName': 'hidden field', 'Pop': 'hidden field', 'Pop Uncov': 'hidden field', });
lyr_PunePopGridUncovered_14.set('fieldLabels', {'fid': 'hidden field', 'h3': 'hidden field', 'population': 'hidden field', 'shapeName': 'hidden field', 'Pop': 'hidden field', 'Pop Uncov': 'hidden field', });
lyr_PimpriBoundaryMergedMtrs_15.set('fieldLabels', {'shapeName': 'hidden field', 'Area Km2': 'hidden field', 'Peri Km': 'hidden field', });
lyr_StopPopPimpriDissolved250Mtr_16.set('fieldLabels', {'Name': 'hidden field', 'Pop': 'hidden field', 'Pimpri Pop': 'hidden field', 'Coverage': 'hidden field', });
lyr_StopsinsidePimpryBoundary_17.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Stop_Name_': 'hidden field', 'Direction': 'hidden field', 'Key': 'hidden field', 'K__M_': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'shapeName': 'hidden field', 'Area Km2': 'hidden field', 'Peri Km': 'hidden field', });
lyr_PimpriPopUncovered_18.set('fieldLabels', {'shapeName': 'hidden field', 'Area Km2': 'hidden field', 'Peri Km': 'hidden field', 'Pop': 'hidden field', 'Pop Uncov': 'hidden field', });
lyr_PimpriPopGridUncovered_19.set('fieldLabels', {'shapeName': 'hidden field', 'Area Km2': 'hidden field', 'Peri Km': 'hidden field', 'Pop': 'hidden field', 'Pop Uncov': 'hidden field', 'fid': 'hidden field', 'h3': 'hidden field', 'population': 'hidden field', });
lyr_PimpriRWI_20.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'rwi': 'hidden field', 'error': 'hidden field', 'shapeName': 'hidden field', 'Area Km2': 'hidden field', 'Peri Km': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt64Distance_21.set('fieldLabels', {'Name': 'hidden field', 'length': 'hidden field', 'Distance': 'hidden field', });
lyr_Rt64RecomMtrs_22.set('fieldLabels', {'DIST_KM': 'hidden field', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'length': 'hidden field', });
lyr_Rt64Overlay_23.set('fieldLabels', {'DIST_KM': 'hidden field', 'DURATION_H': 'hidden field', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_Rt64Overlay2_24.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'OPTIONS': 'inline label - visible with data', 'FROM_ID': 'inline label - visible with data', 'TO_ID': 'inline label - visible with data', 'Name': 'header label - visible with data', });
lyr_Rt233UMtrs_25.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'inline label - visible with data', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Rt233Overlay_26.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_Rt233Recom_27.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'Time': 'inline label - visible with data', });
lyr_Rt233Recom_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});