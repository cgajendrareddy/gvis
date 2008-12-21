google.load('visualization', '1', {packages: ['table', 'gauge', 'intensitymap', 'barchart', 'piechart', 'geomap', 'imagesparkline', 'scatterchart', 'areachart', 'linechart', 'columnchart']});
google.setOnLoadCallback(start);

var chart;
var params;

var data = "";
var currentType = "geomap";
var src_orig = "";
var LASTAUTOVAL = "";
var COLORS = ["008000"];
var COLOR_DEFAULT = "3e79ad";
var COLOR_BUTTONS = 0;
var CURRENT_COLOR = 0;

function $$(e) { return document.getElementById(e); }

function start() {       
    $$("id_select_geomap").selected = true;
 
    $("#autocomplete").autocomplete({
        data: ISOCODES,
        width:200,
        height:400        
    });
    $("#autocomplete").bind("result", function(e, ui) { 
        // Reset input field
        $$("autocomplete").value =LASTAUTOVAL;

        s = String(ui);        
        short = s.substr(s.indexOf("(")+1, 2);
        
        // Check if item is already in list
        data = $$("id_data").value;
        preset = "";
        if (data.indexOf(short) != -1) {
            preset = data.substr(data.indexOf(short)+4);
            preset = preset.substr(0, preset.indexOf("]"));
            while (preset.substr(0, 1) == " ") { preset = preset.substr(1); }
        }
        
        v = prompt("Value for " + ui + ":", preset);
        if ((v) && (v.length > 0)) {
            if (preset.length == 0) {
                $$("id_data").value += ', ["' + short + '", ' + v + ']';
            } else {
                new_value = data.substr(0, data.indexOf(short)+4);
                data = data.substr(new_value.length);
                data = data.substr(data.indexOf("]"));
                new_value += " " + v + data;
                $$("id_data").value = new_value;
            }                    
        }
        
        refreshData();
    });

    $("#colorpicker").colorpicker({
        color: COLORS[0],
        flat: true,
        submit: function(e, ui) { 
            $$("colorpicker").style.display = "none";
            setColor(CURRENT_COLOR, ui.hex);
        } 
    });
    
    chart = new GVis("chart", currentType);
    src_orig = $$("source").innerHTML;

    // Auto Refresh Now
    updateUI();
    refreshData();
}

function updateUI() {
    // Fill Out Textareas with Demo Code
    $$("id_data").value = DefaultDataTypes[currentType].data;
    $$("id_dataInfo").innerHTML = "<a href='" + DefaultDataTypes[currentType].data_url + "' target='_blank'>data format</a>";
    $$("id_params").value = DefaultDataTypes[currentType].params;
    $$("id_paramsInfo").innerHTML = "<a href='" + DefaultDataTypes[currentType].params_url + "' target='_blank'>options</a>";
}

function refreshData() {
    eval("data = [" + $$("id_data").value + "];");
    eval("params = " + $$("id_params").value + ";");
    
    chart.clear();
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

function colorButton_add() {
    if ($$("cb" + COLOR_BUTTONS)) {
        $$("cb" + COLOR_BUTTONS).style.display = "block";    
    } else {
        html = "<div class='colorbutton' id='cb" + COLOR_BUTTONS + "' onclick='showColorPicker(" + COLOR_BUTTONS + ")'></div>";
        $$("colorbuttons").innerHTML += html;
        if (COLORS[COLOR_BUTTONS]) {
        } else {
            COLORS[COLOR_BUTTONS] = COLOR_DEFAULT;
        }
        $$("cb" + COLOR_BUTTONS).style.background = "#" + COLORS[COLOR_BUTTONS];
    }
    COLOR_BUTTONS += 1;
    updateColorTag();    
}

function colorButton_del() {
    if (COLOR_BUTTONS > 0) {
        $$("cb" + parseInt(COLOR_BUTTONS-1)).style.display = "none";
        COLOR_BUTTONS -= 1;
    }
    updateColorTag();
}

function showColorPicker(colorbutton_id) {
    if (($$("colorpicker").style.display == "block") && (CURRENT_COLOR == colorbutton_id)) {
        $$("colorpicker").style.display = "none";
        return ;    
    }
    CURRENT_COLOR = colorbutton_id;
    $("#colorpicker").colorpicker("setColor", COLORS[CURRENT_COLOR]);    
    $$("colorpicker").style.display = "block";
}

function setColor(color_id, color) {
    // After clicking on done on the colorpicker
    $$("cb" + color_id).style.background = "#" + color;
    COLORS[color_id] = color;
    updateColorTag();
}

function removeColorTag() {
    v = $$("id_params").value;
    if (v.indexOf("colors") > -1) {
        v1 = v.substr(0, v.indexOf("colors"));
        v2 = v.substr(v.indexOf("colors"));
        v2 = v2.substr(v2.indexOf("],")+2);
        while((v2.length>0) && (v2.substr(0,1) == " ")) { v2 = v2.substr(1); }
        vr = v1 + v2;
        $$("id_params").value = vr;
    }
}

function addColorTag(c) {
    removeColorTag();
    v = $$("id_params").value;
    v = "{ colors:" + c + "," + v.substr(v.indexOf("{")+1);
    $$("id_params").value = v;
}

function updateColorTag() {
    // Update Color HTML Tag
    if (COLOR_BUTTONS == 0) {
        // Remove any tag
        removeColorTag();
    } else {
        o = "[";
        for (var i=0; i<COLOR_BUTTONS; i++) {
            o += "0x" + COLORS[i] + ", ";
        }
        o = o.substr(0, o.length-2) + "]";
        addColorTag(o);
    }
    
    refreshData();
}