A small and handy simplification layer for the <a href='http://code.google.com/apis/visualization/'>Google Visualization API</a>. Using this 1.7kb library it's possible to implement an interactive chart in a website with just 3 lines of code.

If preferred, this library also takes care of the creation of appropriate columns and column-types (such as boolean, string, number, ...) for the specific inputs. Both the <a href='http://code.google.com/apis/visualization/documentation/reference.html#DataTable'>datatable</a> and the google-visualization object are stored public, and can be accessed via <b>.data</b> and <b>.chart</b>

  * <a href='http://code.google.com/p/gvis/source/browse/trunk/lib/gvis.js'>gvis.js Source Code</a>
  * <a href='http://gvis.linuxuser.at/index.html'>Demonstration</a> (Generates HTML Source)

Update: Now also proper detection of all column types (incl. date, datetime and timeofday)

### Chart Types ###
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/table.html'>table</a>
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/piechart.html'>piechart</a>
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/barchart.html'>barchart</a>
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/columnchart.html'>columnchart</a>
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/areachart.html'>areachart</a>
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/linechart.html'>linechart</a>
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/imagesparkline.html'>imagesparkline</a>
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/scatterchart.html'>scatterchart</a>
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/intensitymap.html'>intensitymap</a>
  * <a href='http://code.google.com/apis/visualization/documentation/gallery/geomap.html'>geomap</a>

You can pass the same parameter to GVis.draw() as to the drawing method any of the above objects (listed on the sites under "Configuration Options"). They will be passed on to the respective object.

### Functional Structure ###
```
    GVis(div_id, chart_type) ....... Main Object. Both parameters as strings
    GVis.data ...................... Google Visualization Data Table [1]
    GVis.chart ..................... Google Visualization Rendering Module [2]
    GVis.setType(chart_type) ....... sets a new chart type [3]
    GVis.addRow(row) ............... adds a new row. format: ["a", 1, 2, ..., n]
    GVis.addRows(rows) ............. adds many new rows. format [row1, row2, ...]
    GVis.setRows(rows) ............. same as addRows, but removes any existing rows before
    GVis.draw(params) .............. draws the chart on the surface. param format: { 'width':100, 'height':200, ... }
    GVis.addColumns(columns) ....... instead of auto-adding columns, this function can be used. columns format: { 'text': 'type' } eg { 'Task': 'string', 'Hours': 'number' }
    GVis.setColumnLabels(arr) ...... sets labels for the columns. is deleted on clear(). arr = Array of strings
    GVis.clear() ................... removes all rows and columns from the datatable, deletes column_labels

    [1] http://code.google.com/apis/visualization/documentation/reference.html#DataTable
    [2] The object is different for every chart type. Follow the links of the chart types above to read more
    [3] Chart type as string (one of the above mentioned)
```

### Usage Example ###
For a typical chart, these are the three lines we need:
```
    var chart = new GVis("chart_div", "table");
    chart.setRows([["Work", 11], ["Eat", 11], ["Commute", 2], ["Watch TV", 2], ["Sleep", 7]]);
    chart.draw({width: 400, height: 240, is3D: true, title: 'My Daily Activities'});
```

The following is the code to do the same by hand without GVis:
```
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task');
    data.addColumn('number', 'Hours per Day');
    data.addRows(5);
    data.setValue(0, 0, 'Work');
    data.setValue(0, 1, 11);
    data.setValue(1, 0, 'Eat');


    data.setValue(1, 1, 2);
    data.setValue(2, 0, 'Commute');
    data.setValue(2, 1, 2);

    data.setValue(3, 0, 'Watch TV');
    data.setValue(3, 1, 2);
    data.setValue(4, 0, 'Sleep');
    data.setValue(4, 1, 7);
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, {width: 400, height: 240, is3D: true, title: 'My Daily Activities'});
```

### Full Example HTML ###

```
<html>
  <head>
    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript" src="gvis.js"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["geomap"]});
      google.setOnLoadCallback(drawChart);
      
      function drawChart() {
          var chart = new GVis("chart_div", "geomap");
          chart.setRows([["CN", 1000], ["US", 5000], ["IN", 2500], ["DE", 4000], ["FR", 2200]]);
          chart.draw({ width:600, height:360 });      
      }
    </script>
  </head>

  <body>
    <div id="chart_div"></div>
  </body>
</html>
```


### Screenshots ###
<img src='http://gvis.linuxuser.at/images/Screenshot-2.png' />
<img src='http://gvis.linuxuser.at/images/Screenshot-1.png' />
<img src='http://gvis.linuxuser.at/images/Screenshot-3.png' />