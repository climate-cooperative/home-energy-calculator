import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { convertZipToState, getState } from '../../../helpers/api';

const Zipdata = ({ zipcode }) => {
    const [table, setTable] = useState(null);

    async function emission_breakdown(zipcode) {    
        // Ensure you don't parse codes that start with 0 as octal values
        if (!zipcode){
            return false;
        } else {
            const convertedState = convertZipToState(zipcode);
            return getState(convertedState.long).then(({ breakdown }) => {

                // get find percentage for each using 'All Fuels'
                const all = breakdown["All Fuels"];
                const coal = Math.round(breakdown["Coal"] / all * 100);
                const petroleum = Math.round(breakdown["Petroleum"] / all * 100);
                const naturalGas = Math.round(breakdown["Natural Gas"] / all * 100);
                const nuclear = Math.round(breakdown["Nuclear"] / all * 100);
                const hydro = Math.round(breakdown["Hydro"] / all * 100);
                const wind = Math.round(breakdown["Wind"] / all * 100);
                const solar = Math.round(breakdown["Solar"] / all * 100);
                const other = Math.round(breakdown["Other Renewable"] / all * 100);

                return {
                    "Coal": {
                        "yourState": coal,
                        "color": "red",
                        "nationalAverage": 22
                    },
                    "Petroleum": {
                        "yourState": petroleum,
                        "color": "orange",
                        "nationalAverage": 0.8
                    },
                    "Natural Gas": {
                        "yourState": naturalGas,
                        "color": "gold",
                        "nationalAverage": 38
                    },
                    "Nuclear": {
                        "yourState": nuclear,
                        "color": "teal",
                        "nationalAverage": 19
                    },
                    "Hydro": {
                        "yourState": hydro,
                        "color": "teal",
                        "nationalAverage": 6
                    },
                    "Wind": {
                        "yourState": wind,
                        "color": "teal",
                        "nationalAverage": 9
                    },
                    "Solar": {
                        "yourState": solar,
                        "color": "teal",
                        "nationalAverage": 3
                    },
                    "Other": {
                        "yourState": other,
                        "color": "teal",
                        "nationalAverage": 2
                    }
                }
            });
        }
    }

    useEffect(() => {
        if (zipcode) {
            emission_breakdown(zipcode).then(data => {
                setTable(data);
            });
        }
    }, [zipcode]);

    return (
            <TableContainer component={Paper} style={{
                marginTop: '20px',
                overflow: 'auto', 
                maxWidth: '80%',
                width: '500px'
            }}>
            <Table size="small">
            <caption>
                Carbon Intensity:
                <div style={{
                    display: 'flex',
                    width: '80%',
                    paddingTop: '10px',
                    margin: 'auto',
                }}>
                    <div style={{
                        height: '20px',
                        width: '80%',
                        background: 'linear-gradient(to right, red, orange, gold)'
                    }} />
                    <div style={{
                        height: '20px',
                        width: '2%',
                    }} />
                    <div style={{
                        height: '20px',
                        width: '18%',
                        background: 'teal'
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    width: '80%',
                    margin: 'auto',
                    justifyContent: 'space-between'
                }}>
                    <p style={{flex: '80'}}>High</p>
                    <p style={{flex: '25'}}>Med</p>
                    <p style={{flex: '5'}}>Low</p>
                </div>
                <br/>
                Source: "Electricity: Energy Information Administration (EIA), 2021". U.S. Department of Energy.
            </caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Washington's Energy Breakdown</TableCell>
                        <TableCell align="right">Your State</TableCell>
                        <TableCell align="right">National Average*</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {table && Object.entries(table).map(([name, data]) => (
                        <TableRow key={name}>
                            <TableCell component="th" scope="row">
                                {/* make colored circle */}
                                <span style={{color: data.color, fontSize: '20px'}}>&#9679; </span>
                                {name}
                            </TableCell>
                            <TableCell align="right">{data.yourState}</TableCell>
                            <TableCell align="right">{data.nationalAverage}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Zipdata;