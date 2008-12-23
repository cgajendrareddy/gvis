/*
    GVis -- A Google Visualization Simplification Layer
    
    Author: Chris Hager (chris [at] linuxuser.at)
      Date: December 2008
   License: GPLv3
      Home: http://code.google.com/p/gvis/
      
   Possible Column Types:
   * boolean
   * number
   * string
   * date = new Date (yyyy, mm, dd)
   * datetime = new Date (yyyy, mm, dd, hh, mm, ss)
   * timeofday = new Array (hour, minute, second, millisecond)      
*/
       
function GVis(div_id, chart_type) {    
    this.get_gChart = function(type) {
        if (type == "table")          return google.visualization.Table;
        if (type == "piechart")       return google.visualization.PieChart;
        if (type == "barchart")       return google.visualization.BarChart;
        if (type == "columnchart")    return google.visualization.ColumnChart;
        if (type == "areachart")      return google.visualization.AreaChart;
        if (type == "linechart")      return google.visualization.LineChart;
        if (type == "scatterchart")   return google.visualization.ScatterChart;
        if (type == "imagesparkline") return google.visualization.ImageSparkLine;
        if (type == "intensitymap")   return google.visualization.IntensityMap;
        if (type == "geomap")         return google.visualization.GeoMap;
    }

    this.data = new google.visualization.DataTable();    
    this.currentRow = 0;   

    // Optional, columns can have preset labels
    this.column_labels = new Array();

    // Set the type of the chart. type == String(chart_type)
    this.setType = function(type) {
        obj = this.get_gChart(type);
        this.chart = new obj(document.getElementById(this.div_id));
        this.chart_type = type;
        document.getElementById(this.div_id).innerHTML = "";
    }

    // Auto-Set Parameters
    if (div_id)     { this.div_id = div_id;     } else { return alert("No Container-Object Specified!"); }
    if (chart_type) { this.setType(chart_type); } else { this.setType("piechart") }
        
    // Remove all Rows and Columns as well as preset Column Labels
    this.clear = function() {
        this.column_labels = new Array();
        this.data.removeRows(0, this.data.getNumberOfRows());
        this.data.removeColumns(0, this.data.getNumberOfColumns());    
    }

    // Preset Column Labels. Will be deleted on clear().    
    this.setColumnLabels = function(arr) {
        this.column_labels = arr;
    }

    // Add a set of columns to the dataset
    this.addColumns = function(params) {
        // params Format: { 'text': 'type', ... } eg { 'Task': 'string', 'Hours': 'number' }
        for (param in params) {
            this.data.addColumn(params[param], param);        
        }
    }

    // Removes all rows, then adds the new ones
    this.setRows = function(rows) {
        this.data.removeRows(0, this.data.getNumberOfRows());
        this.currentRow = 0;
        this.addRows(rows);
    }    

    // Add a set of new rows
    this.addRows = function(rows) {
        // rows Format: [item1, item2, item3]
        // item Format: [col1, col2, ...]
        for (var i=0; i<rows.length; i++) {
            this.addRow(rows[i]);
        }
    }
    
    // Add a single row | Eg. guess column format
    this.addRow = function(items) {
        // items Format: ['a', 3] ...
        if (items.length == 0) return ;
        
        // 1. Check if Columns Exists (if not, try to guess and create them
        if (this.data.getNumberOfColumns() < items.length) {
            // Too Few Columns. Try to guess and create each of the new ones
            for (var i=this.data.getNumberOfColumns(); i<items.length; i++) {
                // Check for a preset Column Label
                if (this.column_labels[i]) {
                    l = this.column_labels[i];
                } else {
                    l = "";
                }

                // Guess Column-type
                t = typeof(items[i])

                if (t == "boolean") {
                    this.data.addColumn("boolean", l);       
                } else if (t == "number") {
                    this.data.addColumn("number", l);
                } else if (t == "string") {
                    this.data.addColumn("string", l);                
                } else if (t == "object") {
                    // Timeofday?
                    if (items[i].length == 4) {
                        this.data.addColumn("timeofday", l);                
                    } else {
                        // Date or Datetime?
                        try {
                            if (items[i].getHours() > 0) {
                                this.data.addColumn("datetime", l);                            
                            } else {
                                this.data.addColumn("date", l);                            
                            }
                        } catch (e) {
                            // Error: None of the above...
                            // Let's simply add it as string...
                            this.data.addColumn("string", l);                
                        } // EOF try
                    } /// EOF if items[i].length == 4
                } // EOF: if t == object
            } // EOF: for (...)
        } // EOF: not enough columns
        
        // 2. Add One Row
        this.data.addRows(1);
        for (var column=0; column<items.length; column++) {
            this.data.setValue(this.currentRow, column, items[column]);
        }
        this.currentRow++;
    }

    // Call the respective draw function with all given parameters
    this.draw = function(extraParams) {
        if (!(extraParams)) { extraParams={}; }
        if (!("height" in extraParams)) { extraParams["height"] = 360; }
        if (!("width" in extraParams))  { extraParams["width"] = 600; }
        this.chart.draw(this.data, extraParams);
    }
}
