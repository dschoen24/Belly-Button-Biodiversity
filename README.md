# Plotly-Challenge

**#Belly Button Biodiversity
	(Using Plotly)**
_________________________________________________________________________________

Objective:  Build an interactive dashboard to explore the cataloged microbes that colonize human navels from the Belly Button Biodiversity dataset which can be found here:

__________________________________________________________________________________

##Steps taken to create the interactive dashboard


1.	I used D3 library to read in the dataset to pull the information needed to create the dashboard

2.	I created a horizontal bar chart with a dropdown menu to display the top 10 OTU’s found in the selected individual

- sample_values was created as the values for the bar chart

-out_ids was used as the labels for the bar chart

-out_labels was used as the hovertext for the bar chart

3. A Bubble Chart was created that displays each sample

-out_ids was used as the x values

-sample_values was used for the y values

-sample_values was used for the marker size

-out_ids was used for the marker colors

-out_labels was used for the text values 

4. A sample metadata (i.e., an individual’s demographic information) is displayed

5. Each key-value pair from the metadata JSON is displayed on the page

6. All the interactive plots are updated when a new sample is selected from the dropdown menu

7. A Gage Chart was created to plot weekly washing frequency for each selected individual

	-The Gage Chart accounts for values ranging from 0 through 9 and is updated when a new sample is selected
