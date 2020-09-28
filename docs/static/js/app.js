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
      
      // first id
      let first_id = subjectIds[0];
  
      // call functions
      update_charts(first_id);
      update_metadata(first_id);
    });
  }
  
  // function to update charts
  function update_charts() {
  
  }
  
  // function to update metadata
  function update_metadata() {
    
  }
  // call initialize dashboard function
  init();