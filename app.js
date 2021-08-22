// create the function that gets the data and creates the plots for the id 
function buildMetadata(selection) {
    
        // Read the data from the json file
        d3.json("data/samples.json").then((sampleData)=> {

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
                metadata.append("p").text(`${key}: ${value}`);
            });

            console.log("next again");
            console.log(metadata);
        });
    }

    // Call in function that will create charts for the given sample
    function buildCharts(selection) {

        //Read the json data
        d3.json("data/samples.json").then((sampleData)=> {

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

            


        }
    }

            // let sampleValues = samples.sample_values.slice(0, 10).reverse();
            // console.log(sampleValues)
    
            // // get only top 10 otu ids for the plot
            // let idValues = samples.otu_ids.slice(0, 10).reverse();
            // console.log(idValues)
            
            // // get the otu id's to the desired form for the plot
            // let otu_ids = idValues.map(d => "OTU" + d)
    
            // console.log(otu_ids)
    
            // get the top 10 labels for the plot
            let labels = samples.otu_labels.slice(0, 10);
            console.log(labels)
    
            
            // create trace variable for the plot
            let trace = {type: 'bar',
                x: sampleValues.map.tostring(),
                y: otu_ids.map.tostring(),
                text: labels,
                orientation: "h",
            };
    
            // create data variable
            let data = [trace];
    
            // create layout variable to set plots layout
            let layout = {
                title: "Top 10 OTU",
                yaxis:{
                    tickmode:"linear",
                },
                margin: {
                    l: 100,
                    r: 100,
                    t: 30,
                    b: 20
                }
            };
    
            // create the bar plot
            Plotly.newPlot("bar",[trace], layout);
    
            //console.log(`ID: ${samples.otu_ids}`)
            
            // create the trace for the bubble chart
            let trace1 = {
                x: samples.otu_ids,
                y: samples.sample_values,
                mode: "markers",
                marker: {
                    size: samples.sample_values,
                    color: samples.otu_ids
                },
                text: samples.otu_labels
    
            };
    
            // set the layout for the bubble plot
            let layout = {
                xaxis:{title: "OTU ID"},
                height: 600,
                width: 1300
            };
    
            // create the data variable 
            let data1 = [trace1];
    
            // create the bubble plot
            Plotly.newPlot("bubble", data1, layout); 
    
            // create pie chart
            let tracePie = {
                labels: otu_ids,
                values:sampleValues,
                type:"pie",
            }
    
            let data = [tracePie]
            
            
            Plotly.newPlot("gauge", data)
    
        });    
    }
        
    // create the function to get the necessary data
    function getInfo(id) {
        // read the json file to get data
        d3.json("data/samples.json").then((data)=> {
            
            // get the metadata info for the demographic panel
            var metadata = data.metadata;
    
            console.log(metadata)
    
            // filter meta data info by id
            var result = metadata.filter(meta => meta.id.toString() === id)[0];
    
            // select demographic panel to put data
            var demographicInfo = d3.select("#sample-metadata");
            
            // empty the demographic info panel each time before getting new id info
            demographicInfo.html("");
    
            // grab the necessary demographic data data for the id and append the info to the panel
            Object.entries(result).forEach((key) => {   
                    demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
            });
        });
    }
    
    // create the function for the change event
    function optionChanged(id) {
        getPlot(id);
        getInfo(id);
    }
    
    // create the function for the initial data rendering
    function init() {
        // select dropdown menu 
        var dropdown = d3.select("#selDataset");
    
        // read the data 
        d3.json("data/samples.json").then((data)=> {
            console.log(data)
    
            // get the id data to the dropdwown menu
            data.names.forEach(function(name) {
                dropdown.append("option").text(name).property("value");
            });
    
            // call the functions to display the data and the plots to the page
            getPlot(data.names[0]);
            getInfo(data.names[0]);
        });
    }
    
    init();