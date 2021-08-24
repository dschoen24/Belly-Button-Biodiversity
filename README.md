# Plotly-Challenge

# Belly Button Biodiversity
	## (Using Plotly)
_________________________________________________________________________________

Objective:  Build an interactive dashboard to explore the cataloged microbes that colonize human navels from the Belly Button Biodiversity dataset which can be found here:

https://github.com/dschoen24/Plotly-Challenge/tree/main/data/sample.json
__________________________________________________________________________________

The code used to create the dashboard can be found here:

https://github.com/dschoen24/Plotly-Challenge/app.js

https://github.com/dschoen24/Plotly-Challenge/index.html

________________________________________________________________________________

You can see the interactive dashboard by clickling this link:

https://dschoen24.github.io/Plotly-Challenge/

_______________________________________________________________________________

## Steps taken to create the interactive dashboard


1.	I used D3 library to read in the dataset to pull the information needed to create the dashboard

2.	I created a horizontal bar chart with a dropdown menu to display the top 10 OTU’s found in the selected individual

- sample_values was created as the values for the bar chart

- out_ids was used as the labels for the bar chart

- out_labels was used as the hovertext for the bar chart

![barchart](https://user-images.githubusercontent.com/82673788/130501914-36f833fe-428a-4a40-9fb4-e7e381b23f0a.PNG)


3.	A Bubble Chart was created that displays each sample

- out_ids was used as the x values

- sample_values was used for the y values

- sample_values was used for the marker size

- out_ids was used for the marker colors

- out_labels was used for the text values 

![bubble chart](https://user-images.githubusercontent.com/82673788/130501875-ef0bc731-9302-4424-ae54-81abd59e9403.PNG)


4. 	A sample metadata (i.e., an individual’s demographic information) is displayed

![demographic info dropdown](https://user-images.githubusercontent.com/82673788/130502032-4b405ba6-48bd-4723-9c9a-72d820e9842d.PNG)


5. 	Each key-value pair from the metadata JSON is displayed on the page

6.	All the interactive plots are updated when a new sample is selected from the dropdown menu

7.	A Gage Chart was created to plot weekly washing frequency for each selected individual

	- The Gage Chart accounts for values ranging from 0 through 9 and is updated when a new sample is selected

![gauge chart](https://user-images.githubusercontent.com/82673788/130501787-572441b1-9f3e-4711-ba86-4ac097077505.PNG)

