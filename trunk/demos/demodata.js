// For each map-dype: data + param
function DefaultData(data, params, source) {
    this.data = data;
    this.params = params;
    this.source = source;
}

var DefaultDataTypes = {
    "table": new DefaultData('["CN", 1000, true], ["US", 5000, false], ["IN", 2500, true], ["DE", 4000, true], ["FR", 2200, true]', '{ width:600, height:360 }', ''),
    "piechart": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ is3D: true, width:600, height:360 }', ''),
    "barchart": new DefaultData('["CN", 2000, 1100], ["US", 3500, 2000], ["IN", 2500, 1500], ["DE", 4000, 3000], ["FR", 2200, 1900]', '{ width:600, height:360 }', ''),
    "areachart": new DefaultData('["CN", 2000, 1100], ["US", 3500, 2000], ["IN", 2500, 1500], ["DE", 4000, 3000], ["FR", 2200, 1900]', '{ width:600, height:360 }', ''),
    "linechart": new DefaultData('["CN", 2000, 1100], ["US", 3500, 2000], ["IN", 2500, 1500], ["DE", 4000, 3000], ["FR", 2200, 1900]', '{ width:600, height:360 }', ''),
    "scatterchart": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', ''),
    "imagesparkline": new DefaultData('[2000, 1100], [3500, 2000], [2500, 1500], [4000, 3000], [2200, 1900]', '{ width: 320, height: 60, showAxisLines: false,  showValueLabels: false, labelPosition: "left" }', ''),
    "intensitymap": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', ''),
    "geomap": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', '')
}

SOURCE_BASE = "";
