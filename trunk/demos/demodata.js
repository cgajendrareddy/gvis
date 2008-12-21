// For each map-dype: data + param
function DefaultData(data, params, source) {
    this.data = data;
    this.params = params;
    this.source = source;
}

var DefaultDataTypes = {
    "table": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', ''),
    "piechart": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ is3D: true, width:600, height:360 }', ''),
    "barchart": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', ''),
    "areachart": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', ''),
    "linechart": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', ''),
    "scatterchart": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', ''),
    "imagesparkline": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', ''),
    "intensitymap": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', ''),
    "geomap": new DefaultData('["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]', '{ width:600, height:360 }', '')
}

SOURCE_BASE = "";
