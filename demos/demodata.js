// For each map-dype: data + param
function DefaultData(data, params, url1, url2) {
    this.data = data;
    this.params = params;
    this.data_url = url1;
    this.params_url = url2;
}

var DefaultDataTypes = {
    "table": new DefaultData('["CN", 1000, true], ["US", 5000, false], ["IN", 2500, true], ["DE", 4000, true], ["FR", 2200, true]', '{ width:400, height:220 }', 'http://code.google.com/apis/visualization/documentation/gallery/table.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/table.html#Configuration_Options'),
    "piechart": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ is3D: true, width:600, height:360 }', 'http://code.google.com/apis/visualization/documentation/gallery/piechart.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/piechart.html#Configuration_Options'),
    "barchart": new DefaultData('["CN", 2000, 1100], ["US", 3500, 2000], ["IN", 2500, 1500], ["DE", 4000, 3000], ["FR", 2200, 1900]', '{ is3D:true, width:600, height:360, legend: "none" }', 'http://code.google.com/apis/visualization/documentation/gallery/barchart.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/barchart.html#Configuration_Options'),
    "columnchart": new DefaultData('["CN", 2000, 1100], ["US", 3500, 2000], ["IN", 2500, 1500], ["DE", 4000, 3000], ["FR", 2200, 1900]', '{ is3D:true, width:600, height:360, legend: "none" }', 'http://code.google.com/apis/visualization/documentation/gallery/columnchart.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/columnchart.html#Configuration_Options'),
    "areachart": new DefaultData('["CN", 2000, 1100], ["US", 3500, 2000], ["IN", 2500, 1500], ["DE", 4000, 3000], ["FR", 2200, 1900]', '{ width:600, height:360 }', 'http://code.google.com/apis/visualization/documentation/gallery/areachart.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/areachart.html#Configuration_Options'),
    "linechart": new DefaultData('["CN", 2000, 1100], ["US", 3500, 2000], ["IN", 2500, 1500], ["DE", 4000, 3000], ["FR", 2200, 1900]', '{ width:600, height:360 }', 'http://code.google.com/apis/visualization/documentation/gallery/linechart.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/linechart.html#Configuration_Options'),
    "scatterchart": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', 'http://code.google.com/apis/visualization/documentation/gallery/scatterchart.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/scatterchart.html#Configuration_Options'),
    "imagesparkline": new DefaultData('[2000, 1100], [3500, 2000], [2500, 1500], [4000, 3000], [2200, 1900]', '{ width: 320, height: 60, showAxisLines: false,  showValueLabels: false, labelPosition: "left" }', 'http://code.google.com/apis/visualization/documentation/gallery/imagesparkline.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/imagesparkline.html#Configuration_Options'),
    "intensitymap": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', 'http://code.google.com/apis/visualization/documentation/gallery/intensitymap.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/intensitymap.html#Configuration_Options'),
    "geomap": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', 'http://code.google.com/apis/visualization/documentation/gallery/geomap.html#Data_Format', 'http://code.google.com/apis/visualization/documentation/gallery/geomap.html#Configuration_Options')
}

SOURCE_BASE = "";
