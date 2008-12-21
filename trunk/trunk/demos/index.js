google.load('visualization', '1', {packages: ['table', 'gauge', 'intensitymap', 'barchart', 'piechart', 'geomap', 'imagesparkline', 'scatterchart', 'areachart', 'linechart']});
google.setOnLoadCallback(start);

var chart;
var params;

var data = "";
var currentType = "geomap";
var src_orig = "";

function $$(e) { return document.getElementById(e); }

function start() {
    chart = new GVis("chart", currentType);
    src_orig = $$("source").innerHTML;

    // Auto Refresh Now
    updateUI();
    refreshData();
}

function updateUI() {
    // Fill Out Textareas with Demo Code
    $$("id_data").value = DefaultDataTypes[currentType].data;
    $$("id_params").value = DefaultDataTypes[currentType].params;
}

function refreshData() {
    eval("data = [" + $$("id_data").value + "];");
    eval("params = " + $$("id_params").value + ";");
    chart.setRows(data);    
    chart.draw(params);

    // Show Source Code
    src = src_orig;
    src = src.replace(/__METAPKG__/g, currentType);
    src = src.replace("__META1__", "");
    src = src.replace("__METADATA__", $$("id_data").value);
    src = src.replace("__METAPARAMS__", $$("id_params").value);
    $$("source").innerHTML = src; 
}

function changeType(type) {
    DefaultDataTypes[currentType].data = $$("id_data").value;
    DefaultDataTypes[currentType].params = $$("id_params").value;
     
    currentType = type;
    updateUI();

    chart.setType(type);
    refreshData();
}