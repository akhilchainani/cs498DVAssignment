var cityBarChart={
  display: function () {
        var margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 100
            };
        var width = 960 - margin.left - margin.right;
        var height = 600 - margin.top - margin.bottom;
    
        const data = d3.csv("https://raw.githubusercontent.com/akhilchainani/cs498DVAssignment/master/Preprocessed_Rent.csv"),
                            function(d) {
                              return {
                                Location: d.Location,
                                Location_Type: d.Location_Type,
                                State: d.State,
                                Bedroom_Size: d.Bedroom_Size,
                                Price_2014_AVG: +d.Price_2014_AVG,
                                Price_2015_AVG: +d.Price_2015_AVG,
                                Price_2016_AVG: +d.Price_2016_AVG,
                                Price_2017_AVG: +d.Price_2017_AVG,
                                Price_2018_AVG: +d.Price_2018_AVG,
                                Price_2019_AVG: +d.Price_2019_AVG
                              };
                            });
        var studioData = data.filter(function(d) {
                                      return d.Bedroom_Side === "Studio";
                                     });
        var OneBrData = data.filter(function(d) {
                                      return d.Bedroom_Side === "1br";
                                    });
        var TwoBrData = data.filter(function(d) {
                                      return d.Bedroom_Side === "2br";
                                    });
        var ThreeBrData = data.filter(function(d) {
                                      return d.Bedroom_Side === "3br";
                                      });
        var FourBrData = data.filter(function(d) {
                                      return d.Bedroom_Side === "4br";
                                     });
        d3.select('body')
        .selectAll('p')
        .data(studioData)
        .enter()
        .append('p')
        .html(function(d,i) { return d.Location + " " + d.Price_2019_AVG; });
  }
};
