import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material';
import { convertZipToState, getState } from '../../../helpers/api';

const Zipdata = ({ zipcode }) => {
  const [table, setTable] = useState(null);

  async function emission_breakdown(zipcode) {
    // Ensure you don't parse codes that start with 0 as octal values
    if (!zipcode) {
      return false;
    } else {
      const convertedState = convertZipToState(zipcode);
      return getState(convertedState).then(({ breakdown }) => {
        // get find percentage for each using 'All Fuels'
        const all = breakdown.all_fuels;
        const coal = Math.round((breakdown.coal / all) * 100);
        const petroleum = Math.round((breakdown.petroleum / all) * 100);
        const naturalGas = Math.round((breakdown.natural_gas / all) * 100);
        const nuclear = Math.round((breakdown.nuclear / all) * 100);
        const hydro = Math.round((breakdown.hydro / all) * 100);
        const wind = Math.round((breakdown.wind / all) * 100);
        const solar = Math.round((breakdown.solar / all) * 100);
        const other = Math.round((breakdown.other_renewable / all) * 100);

        return {
          Coal: {
            yourState: isNaN(coal) ? 0 : coal,
            color: 'red',
            nationalAverage: 22
          },
          Petroleum: {
            yourState: isNaN(petroleum) ? 0 : petroleum,
            color: 'orange',
            nationalAverage: 0.8
          },
          'Natural Gas': {
            yourState: isNaN(naturalGas) ? 0 : naturalGas,
            color: 'gold',
            nationalAverage: 38
          },
          Nuclear: {
            yourState: isNaN(nuclear) ? 0 : nuclear,
            color: 'teal',
            nationalAverage: 19
          },
          Hydro: {
            yourState: isNaN(hydro) ? 0 : hydro,
            color: 'teal',
            nationalAverage: 6
          },
          Wind: {
            yourState: isNaN(wind) ? 0 : wind,
            color: 'teal',
            nationalAverage: 9
          },
          Solar: {
            yourState: isNaN(solar) ? 0 : solar,
            color: 'teal',
            nationalAverage: 3
          },
          Other: {
            yourState: isNaN(other) ? 0 : other,
            color: 'teal',
            nationalAverage: 2
          }
        };
      });
    }
  }

  useEffect(() => {
    if (zipcode) {
      emission_breakdown(zipcode).then((data) => {
        console.log("idk", data);
        setTable(data);
      });
    }
  }, [zipcode]);

  return (
    <TableContainer
      component={Paper}
      style={{
        marginTop: '20px',
        overflow: 'auto',
        maxWidth: '80%',
        width: '500px'
      }}
    >
      <Table size="small">
        <caption>
          Carbon Intensity:
          <div
            style={{
              display: 'flex',
              width: '80%',
              paddingTop: '10px',
              margin: 'auto'
            }}
          >
            <div
              style={{
                height: '20px',
                width: '80%',
                background: 'linear-gradient(to right, red, orange, gold)'
              }}
            />
            <div
              style={{
                height: '20px',
                width: '2%'
              }}
            />
            <div
              style={{
                height: '20px',
                width: '18%',
                background: 'teal'
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              width: '80%',
              margin: 'auto',
              justifyContent: 'space-between'
            }}
          >
            <p style={{ flex: '80' }}>High</p>
            <p style={{ flex: '25' }}>Med</p>
            <p style={{ flex: '5' }}>Low</p>
          </div>
          <br />
          Source: "Electricity: Energy Information Administration (EIA), 2021". U.S. Department of
          Energy.
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>Washington's Energy Breakdown</TableCell>
            <TableCell align="right">Your State</TableCell>
            <TableCell align="right">National Average*</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table &&
            Object.entries(table).map(([name, data]) => (
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                  {/* make colored circle */}
                  <span style={{ color: data.color, fontSize: '20px' }}>&#9679; </span>
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
