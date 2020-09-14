<a href="url"><img src="https://github.com/tashakim/my-risk-cluster/blob/master/views/images/Original_crop_easyy.png" align="left" height="230" width="350" ></a>
<a href="url"><img src="https://github.com/tashakim/my-risk-cluster/blob/master/views/images/Dark_mode.png" align="center" height="230" width="290" ></a>


# MyRiskCluster
![GitHub repo size](https://img.shields.io/github/repo-size/tashakim/MyRiskCluster)
![GitHub last commit](https://img.shields.io/github/last-commit/tashakim/MyRiskCluster)
![GitHub](https://img.shields.io/github/license/tashakim/MyRiskCluster)
![GitHub followers](https://img.shields.io/github/followers/tashakim?label=Followers&style=social)


A full stack application built using Firebase, and Google Cloud Platform to detect high mental-health risk clusters affected by the Covid-19 Pandemic.
![alt text](https://github.com/tashakim/my-risk-cluster/blob/master/views/images/preview.png?raw=true)


## Inspiration

### Motivation: 
=> Covid-19 takes a toll on mental health; When people experience traumatic and often unexpected events, the reaction is usually a combination of fear and distress.

=> Many resources focus on detection of physical well-being, but not on mental well-being. E.g. The impact of Covid-19 is often measured by the number of fatalities, number affected, and recovered; But how do we measure the mental toll?


### What do we do about this problem?
=> We can detect suicide / depression clusters; clusters of population that are most susceptible to suicidality or depression.


### Why are suicide / depression clusters important to identify?
*All of these clusters lead to risk of sudden loss in population, panic, and pain:

=> Point clusters (same geographic location within the same time period)

=> Mass clusters (across different geographic locations but within same time period)

=> Echo clusters (same geographic location, at a later time period)



### How do we detect clusters?
=> Certain factors increase the risks of suicide;

- Age: older people are particularly vulnerable during this pandemic, and already suffer from high rates of loneliness, which is strongly associated with greater symptoms of depression, and mortality
- Physical morbidities: evidence shows inadequate physical healthcare can lead to greater risk of mental illness
- Number of deaths by Covid-19 confirmed in the area: exposure to another person’s suicide, be it acquaintances, family, or person in local viscinity - can drastically increase risk of suicide clusters.
- Number of active cases of Covid-19 in the area: large no. of cases leads to increased anxiety and fear, and due to people feeling ‘unsafe’ about going outside, staying indoors leads to increased loneliness / isolation. These all lead to increased risk of suicide/depression.

### So. How do we retrieve this data?
=> We gather data using the Google Cloud BigQuery Public Dataset: Covid-19 Open Data, using BigQuery!

=> The dataset provides access to critical information quickly, easily & is automatically retrieved.

The structure of this list is as follows:
Previous dataset column name : COVID-19 Open Data column name
province_state : subregion1_name
country_region : country_name
date : date
latitude: latitude
longitude : longitude
location_geom : location_geometry
confirmed : cumulative_confirmed
deaths : cumulative_deceased
recovered : cumulative_recovered
active : current_cases (NOTE: Calculated as [cumulative_confirmed-cumulative_recovered-cumulative_deceased] where none of these values are NULL)
fips : subregion2_code
admin_2 : subregion2_name
combined_key : location_key

### Where does our App fit in?
By mapping out high-risk clusters using metrics provided by the automatically retrieved Covid-19 open data, we can:
1. Reallocate scarce medical resources,
2. Optimize the stationing of first-responders and police for injury / emergencies.

*Our application will act as a virtual ‘cluster response group’; it helps to effectively identify and respond to mental high-risk clusters.

### Implementation
Web application 


## What it does
Effectively relays information about 'high mental-health risk clusters' to first responders and police dispatchers.
Shows active alerts for areas that exceed a risk threshold.

## How we built it
Express Framework using Node.js, Google Maps API, Firebase to configure realtime database, Bigquery using the Google Cloud platform

# View Prototype 
![alt text](https://github.com/tashakim/my-risk-cluster/blob/master/views/images/prototype.png?raw=true)

