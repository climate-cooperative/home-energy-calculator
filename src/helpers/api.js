/*
https://api.zwellhome.com/api/state_table/state/Washington
https://api.zwellhome.com/api/zip_table/zipcode/98059
https://api.zwellhome.com/api/appliances
etc...

/appliances
/hvac_appliances
/home_decades
/home_type

/state_table
/state_table/state/:state:

/zip_table
/zip_table/zipcode/:zipcode:
/zip_table/state/:state:

/wood_table
*/

const states = [
  { min: 35000, max: 36999, code: 'AL', long: 'Alabama' },
  { min: 99500, max: 99999, code: 'AK', long: 'Alaska' },
  { min: 85000, max: 86999, code: 'AZ', long: 'Arizona' },
  { min: 71600, max: 72999, code: 'AR', long: 'Arkansas' },
  { min: 90000, max: 96699, code: 'CA', long: 'California' },
  { min: 80000, max: 81999, code: 'CO', long: 'Colorado' },
  { min: 6000, max: 6999, code: 'CT', long: 'Connecticut' },
  { min: 19700, max: 19999, code: 'DE', long: 'Deleware' },
  { min: 32000, max: 34999, code: 'FL', long: 'Florida' },
  { min: 30000, max: 31999, code: 'GA', long: 'Georgia' },
  { min: 96700, max: 96999, code: 'HI', long: 'Hawaii' },
  { min: 83200, max: 83999, code: 'ID', long: 'Idaho' },
  { min: 60000, max: 62999, code: 'IL', long: 'Illinois' },
  { min: 46000, max: 47999, code: 'IN', long: 'Indiana' },
  { min: 50000, max: 52999, code: 'IA', long: 'Iowa' },
  { min: 66000, max: 67999, code: 'KS', long: 'Kansas' },
  { min: 40000, max: 42999, code: 'KY', long: 'Kentucky' },
  { min: 70000, max: 71599, code: 'LA', long: 'Louisiana' },
  { min: 3900, max: 4999, code: 'ME', long: 'Maine' },
  { min: 20600, max: 21999, code: 'MD', long: 'Maryland' },
  { min: 1000, max: 2799, code: 'MA', long: 'Massachusetts' },
  { min: 48000, max: 49999, code: 'MI', long: 'Michigan' },
  { min: 55000, max: 56999, code: 'MN', long: 'Minnesota' },
  { min: 38600, max: 39999, code: 'MS', long: 'Mississippi' },
  { min: 63000, max: 65999, code: 'MO', long: 'Missouri' },
  { min: 59000, max: 59999, code: 'MT', long: 'Montana' },
  { min: 27000, max: 28999, code: 'NC', long: 'North Carolina' },
  { min: 58000, max: 58999, code: 'ND', long: 'North Dakota' },
  { min: 68000, max: 69999, code: 'NE', long: 'Nebraska' },
  { min: 88900, max: 89999, code: 'NV', long: 'Nevada' },
  { min: 3000, max: 3899, code: 'NH', long: 'New Hampshire' },
  { min: 7000, max: 8999, code: 'NJ', long: 'New Jersey' },
  { min: 87000, max: 88499, code: 'NM', long: 'New Mexico' },
  { min: 10000, max: 14999, code: 'NY', long: 'New York' },
  { min: 43000, max: 45999, code: 'OH', long: 'Ohio' },
  { min: 73000, max: 74999, code: 'OK', long: 'Oklahoma' },
  { min: 97000, max: 97999, code: 'OR', long: 'Oregon' },
  { min: 15000, max: 19699, code: 'PA', long: 'Pennsylvania' },
  { min: 300, max: 999, code: 'PR', long: 'Puerto Rico' },
  { min: 2800, max: 2999, code: 'RI', long: 'Rhode Island' },
  { min: 29000, max: 29999, code: 'SC', long: 'South Carolina' },
  { min: 57000, max: 57999, code: 'SD', long: 'South Dakota' },
  { min: 37000, max: 38599, code: 'TN', long: 'Tennessee' },
  { min: 75000, max: 79999, code: 'TX', long: 'Texas' },
  { min: 88500, max: 88599, code: 'TX', long: 'Texas' },
  { min: 84000, max: 84999, code: 'UT', long: 'Utah' },
  { min: 5000, max: 5999, code: 'VT', long: 'Vermont' },
  { min: 22000, max: 24699, code: 'VA', long: 'Virgina' },
  { min: 20000, max: 20599, code: 'DC', long: 'Washington DC' },
  { min: 98000, max: 99499, code: 'WA', long: 'Washington' },
  { min: 24700, max: 26999, code: 'WV', long: 'West Virginia' },
  { min: 53000, max: 54999, code: 'WI', long: 'Wisconsin' },
  { min: 82000, max: 83199, code: 'WY', long: 'Wyoming' }
];

const convertZipToState = (zipcode) => {
  const state = states.find(function (s) {
    return s.min <= zipcode && s.max >= zipcode;
  });
  return state;
};

const getState = async (state) => {
    const url = `https://api.zwellhome.com/api/state_table/state/${state.long}`;
    const response = await fetch(url);
    const data = await response.json();

    const emissions = data['State Emissions'][0];
    const costs = data['State Energy Costs'][0];
    const breakdown = data['State Energy Breakdown'][0];
    return {
        emissions,
        costs,
        breakdown
    };
};

const getZip = async (zipcode) => {
    const url = `https://api.zwellhome.com/api/zip_table/zipcode/${zipcode}`;
    const response = await fetch(url);
    const data = await response.json();
    
    const latitude = data["Latitude"];
    const longitude = data["Longitude"];
    const degree_days = data["Degree Days"];
    const water_temp = data["Water Temperature Data"];
    return {
        latitude,
        longitude,
        degree_days,
        water_temp
    };
}

const getAppliances = async () => {
  const url = `https://api.zwellhome.com/api/appliances`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getHvacAppliances = async () => {
  const url = `https://api.zwellhome.com/api/hvac_appliances`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getHomeDecades = async () => {
  const url = `https://api.zwellhome.com/api/home_decades`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getHomeType = async () => {
  const url = `https://api.zwellhome.com/api/home_type`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

async function getAPIData(state, zipcode, rooms, kitchen, laundry, home_decade, heating_appliance, cooling_appliance, water_heating_appliance) {
    // API lookups
    // get state table 
    const { emissions } = await getState(state);
    const grid_carbon_intesity = emissions["CO2 lbs/BTU"];

    // get zip table
    const { latitude, longitude, degree_days, water_temp } = await getZip(zipcode);
    const region_hdd = degree_days["HDD"];
    const region_cdd = degree_days["CDD"];
    const region_water_temp = water_temp["Water Temperature"];

    const home = await getHomeDecades().then(data => data.filter(home => home["Decade"] === home_decade)[0]);
    const ach = home["ACH"];
    const r_probability_insulation = home["Probability of Insulation"];
    const r_attic_roof = home["Attic R"];
    const r_attic_joist = home["Joist"];
    const r_attic_insulation = home["Attic Insulation R"];
    const r_wall_construction = home["Wall Construction"];
    const r_wall_insulation = home["Wall Insulation R"];
    // hard coded value
    const r_wall_siding = 0.5;

    // hvac appliances
    const hvac_appliances = await getHvacAppliances();
    const hvac_heating_efficiency = hvac_appliances.filter(hvac => hvac.System === heating_appliance)[0];
    console.log(hvac_heating_efficiency);
    const hvac_cooling_efficiency = hvac_appliances.filter(hvac => hvac.System === cooling_appliance)[0].Efficiency;
    const hvac_water_heating_efficiency = hvac_appliances.filter(hvac => hvac.System === water_heating_appliance)[0].Efficiency;

    const appliances = getAppliances();
    // go through the appliances and get the efficiency
    /*
    "kitchen":{
        "Natural Gas Cooktop":1,
        "Electric Cooktop":0,
        "Induction Cooktop":1,
        "Natural Gas Oven":0,
        "Electric Oven":0,
        "Dishwasher":0
    },
    "laundry":{
        "Washers":0,
        "Natural Gas Dryer":1,
        "Electric Dryer":0,
        "Heat Pump Dryer":0
    },
    */
    const btu_gas_appliances = 
        appliances.filter(appliance => appliance["fuel type"] === "natural gas" && appliance.appliance === "stove")['per year'] * kitchen['Natural Gas Cooktop'] + 
        appliances.filter(appliance => appliance["fuel type"] === "natural gas" && appliance.appliance === "oven")['per year'] * kitchen['Natural Gas Oven'] + 
        appliances.filter(appliance => appliance["fuel type"] === "natural gas" && appliance.appliance === "dryer")['per year'] * laundry['Natural Gas Dryer'] + 
        appliances.filter(appliance => appliance["fuel type"] === "electric" && appliance.appliance === "stove")['per year'] * kitchen['Electric Cooktop'] +
        appliances.filter(appliance => appliance["fuel type"] === "electric" && appliance.appliance === "oven")['per year'] * kitchen['Electric Oven'] +
        appliances.filter(appliance => appliance["fuel type"] === "electric" && appliance.appliance === "dryer")['per year'] * laundry['Electric Dryer'] +
        appliances.filter(appliance => appliance["fuel type"] === "electric" && appliance.appliance === "dishwasher")['per year'] * kitchen['Dishwasher'] + 
        appliances.filter(appliance => appliance["fuel type"] === "electric" && appliance.appliance === "washing machine")['per year'] * laundry['Washers'] +
        appliances.filter(appliance => appliance["fuel type"] === "electric" && appliance.appliance === "heat pump dryer")['per year'] * laundry['Heat Pump Dryer'] + 
        appliances.filter(appliance => appliance["fuel type"] === "electric" && appliance.appliance === "induction stove")['per year'] * laundry['Induction Cooktop'] + 
        appliances.filter(appliance => appliance.appliance === "refrigerator/freezer")['per year'] * rooms.Kitchens;

    const home_decades = getHomeDecades();

    return {
        grid_carbon_intesity,
        latitude,
        longitude,
        region_hdd,
        region_cdd,
        region_water_temp,
        ach,
        r_probability_insulation,
        r_attic_roof,
        r_attic_joist,
        r_attic_insulation,
        r_wall_construction,
        r_wall_insulation,
        r_wall_siding,
        hvac_heating_efficiency,
        hvac_cooling_efficiency,
        hvac_water_heating_efficiency,
        btu_gas_appliances,
        home_decades
    }
}

export { convertZipToState, getState, getZip, getAppliances, getHvacAppliances, getHomeDecades, getHomeType, getAPIData }
