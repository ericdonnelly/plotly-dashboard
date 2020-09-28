// initialize page with visualizations
function init() {
    // select the dropdown element
    var selector = d3.select("#selDataset");
    
    // populate dropdown with samples ids
      d3.json("data/samples.json").then((d) => {
        let subject_ids = d.names;
        subject_ids.forEach((id) => {
          selector
          .append("option")
          .text(id)
          .property("value", id);
        });
      
      // var random_number = Math.floor(Math.random() * 10);
      // first id
      let first_id = subject_ids[0];
  
      // call functions
      update_charts(first_id);
      // update_metadata(first_id);
    });
  }
  
  // function to update charts
  function update_charts(sample) {
    // select data with d3
    d3.json("data/samples.json").then((d) => {
      // data selection
      var samples = d.samples;
      var results = samples.filter(sampleobject => sampleobject.id == sample);
      var result = results[0];
      var values = result.sample_values;
      var otu_ids = result.otu_ids;
      var otu_labels = result.otu_labels;   
      // build bar chart
      var trace1 = {
          x: values.slice(0,10).reverse(),
          y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
          text: otu_labels.slice(0,10).reverse(),
          name: "Bar Chart",
          type: "bar",
          orientation: "h"
      };
      var data = [trace1];
      var layout = {
          title: "Top Ten OTUs for Individual " +sample,
          margin: {l: 100, r: 100, t: 100, b: 100}
      };
      Plotly.newPlot("bar", data, layout);  
      });
    }
  
  // function to update metadata
  // function update_metadata() {
  //   // // // select data with d3
  //   // d3.json("data/samples.json").then((data) => {
  //   // // data selection will go here
  //   // }
  // }


  function optionChanged(select_new) {
    // update based on selection
    update_charts(select_new);
    // update_metadata(select_new);
  }

  // call initialize dashboard function
  init();