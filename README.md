# belly-button-challenge
## Project Overview
This project involves an interactive exploration of microbial data from various individuals. Leveraging the D3.js library, it parses and visualizes information from a comprehensive JSON dataset. At its core, the initiative aims to reveal the top Operational Taxonomic Units (OTUs) present in individuals. To achieve this, dynamic visualizations such as horizontal bar charts and bubble charts represent the complexity and richness of the data. Users can navigate through the dataset using an intuitive interface with dropdown menus and responsive charts, uncovering insights into the microbial communities within each sample. Additionally, demographic metadata is displayed, enriching the context of each explored dataset. The project prioritizes accessibility and is hosted on GitHub Pages, inviting users to engage with the data interactively. Overall, this endeavor showcases the capabilities of web-based data visualization tools and emphasizes the potential for a deeper understanding of microbiological ecosystems through data analytics.
# Deployment
Explore the fascinating world of microbial ecosystems with the interactive dashboard
<img width="896" alt="Dashboard" src="https://github.com/VrindaPtl/belly-button-challenge/assets/155428439/7d535e51-4bba-4524-84e7-7fb228b70254">


## Technologies Used
* D3.js for data manipulation and binding to DOM elements. 
* Plotly.js for creating interactive visualizations (bar chart, bubble chart, and gauge chart).

1. **Horizontal Bar Chart**: Displays the top 10 OTUs found in the individual selected from the dropdown menu. 
	* Values: `sample_values`
	* Labels: `otu_ids`
	* Hovertext: `otu_labels`

2. **Bubble Chart**: Displays each sample.
	* X values: `otu_ids`
	* Y values: `sample_values`
	* Marker size: `sample_values`
	* Text values: `otu_labels`
   
 3. **Demographic Information Panel**: Shows the selected individual's demographic information as key-value pairs.
