// create the function that gets the data and creates the plots for the id 
function buildMetadata(selection) {

    // Read the data from the json file
    d3.json("data/samples.json").then((sampleData) => {

        console.log(sampleData)

        // Parse and filter data to get metadata
        let parsedData = sampleData.metadata;
        console.log("parsed data inside buildMetadata function")
        console.log(parsedData);

        let samples = parsedData.filter(item => item.id === selection);
        console.log("showing sample[0]:");
        console.log(sample[0]);

        // Get location of metadata & update it
        let metadata = d3.select("sample-metadata").html("");

        Object.entries(sample[0].foreach(([key, value]) => {
            metadata.append("p").text(`${key}: ${value}`)
        }),

        console.log("next again"));
        console.log(metadata);
    },

// Call in function that will create charts for the given sample
function buildCharts(selection) {

            //Read the json data
            d3.json("data/samples.json").then((sampleData) => {

                // Parse & filter the data to get the sample's OTU data
                let parsedData = sampleData.samples;
                console.log("parsed data inside buildCharts function")
                console.log(parsedData);

                let sampleDict = parsedData.filter(item => item.id == selection)[0];
                console.log("sampleDict")
                console.log(sampleDict);

                let sampleValues = sampleDict.sample_values;
                let barChartValues = sampleValues.slice(0, 10).reverse();
                console.log("sample_values")
                console.log(barChartValues);

                let idValues = sampleDict.otu_ids;
                let barChartLabels = idValues.slice(0, 10).reverse();
                console.log("otu_ids");
                console.log(barChartLabels);

                let reformattedLabels = [];
                barChartLabels.forEach((label) => {
                    reformattedLabels.push("OTU" + label);
                });

                console.log("reformatted");
                console.log(reformattedLabels);

                let hovertext = sampleDict.otu_labels;
                let barCharthovertext = hovertext.slice(0, 10).reverse();
                console.log("otu_labels");
                console.log(barCharthovertext);

                // Create Bar Chart
                let barChartTrace = {
                    type: "bar",
                    y: reformattedLabels,
                    x: barChartValues,
                    text: barCharthovertext,
                    orientation: "h"
                };

                let barChartData = [barChartTrace];

                Plotly.newPlot("bar", barChartTrace);

                //Create the Bubble Chart

                let bubbleChartTrace = {
                    x: idValues,
                    y: sampleValues,
                    text: hovertext,
                    mode: "markers",
                    marker: {
                        color: idValues,
                        size: sampleValues
                    }
                };

                let bubbleChartData = [bubbleChartTrace];

                let layout = {
                    showlegend: false,
                    height: 600,
                    width: 1000,
                    xaxis: {
                        title: "OTU ID"
                    }
                };

                Plotly.newPlot("bubble", bubbleChartData, layout);

            });

// Define function that will run on page load
function init() {
            //Read json data
            d3.json("data/samples.json").then((sampleData) => {

                // Parse & Filter data to get sample names
                let parsedData = sampleData.names;
                console.log("parsed data inside init function")
                console.log(parsedData);

                //Add Dropdown option for each sample
                let dropdownMenu = d3.select("#selDataset");

                parsedData.forEach((name) => {
                    dropdownMenu.append("option").property("value", name).text(name);
            })

            // Use sample to build metadata & initial plots
            buildMetadata(parsedData[0]);

            buildCharts(parsedData[0]);

        });
}

function optionChanged(newSelection) {

    //Update metadata with newly selected sample
    buildMetadata(newSelection);
    //Update charts with newly selected sample
    buildCharts(newSelection);
}

//Initialize dashboard on page load
init()})}