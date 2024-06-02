const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

const dataPromise = d3.json(url);
console.log("Data promise:", dataPromise);

// Fetch the data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Fetch the data and console log it
d3.json("https://static.bc-edx.com/data/dla-1-2/m14/lms/starter/samples.json").then((data) => {
    // Populate the dropdown menu with the sample names
    var dropdownMenu = d3.select("#selDataset");
    data.names.forEach((name) => {
        dropdownMenu.append("option").text(name);
    });

    // Display the metadata and charts for the first sample
    var firstSample = data.names[0];
    displayMetadata(firstSample, data);
    displayCharts(firstSample, data);
});
// Function to display the metadata
function displayMetadata(sample, data) {
  var metadata = data.metadata.filter(obj => obj.id == sample)[0];
  var panel = d3.select("#sample-metadata");
  panel.html("");
  Object.entries(metadata).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
  });
}
// Function to display the charts
function displayCharts(sample, data) {
  var sampleData = data.samples.filter(obj => obj.id == sample)[0];
  var otuIds = sampleData.otu_ids;
  var otuLabels = sampleData.otu_labels;
  var sampleValues = sampleData.sample_values;

  // Bar chart
  var barData = [{
      x: sampleValues.slice(0, 10).reverse(),
      y: otuIds.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse(),
      text: otuLabels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
  }];
  var barLayout = { 
    title: "Top 10 Bacteria Cultures Found", 
    yaxis: sampleValues,
    xaxis: { title: "Number of Bacteria" }
  };
  Plotly.newPlot("bar", barData, barLayout);

  // Bubble chart
  var bubbleData = [{
    x: otuIds,
    y: sampleValues,
    text: otuLabels,
    mode: "markers",
    marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: "Earth"
    }
  }];
  var bubbleLayout = { 
    title: "Bacteria Cultures per Sample", 
    hovermode: "closest", 
    xaxis: { title: "OTU ID" },
    yaxis: { title: "Number of Bacteria" }
  };
  Plotly.newPlot("bubble", bubbleData, bubbleLayout);
}

// Function to handle changes in the dropdown menu
function optionChanged(newSample) {
    d3.json("https://static.bc-edx.com/data/dla-1-2/m14/lms/starter/samples.json").then((data) => {
        displayMetadata(newSample, data);
        displayCharts(newSample, data);
    });
}