import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { IonIcon } from '@ionic/react';
import { documentText, bulb } from 'ionicons/icons';

const ScoreDialog = ({ open, handleClose, icon, title, grade, gradeColors, content, current, recommended, rows }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                <Box display="flex" alignItems="center">
                    <IonIcon icon={icon} style={{ fontSize: '30px', marginRight: '10px' }} />
                    <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    {/* vertical line */}
                    <div
                        style={{
                            borderLeft: '2px solid lightgray',
                            height: '20px',
                            marginRight: '10px',
                            marginLeft: '10px'
                        }}
                    />
                    <Typography
                        variant="h5"
                        component="div"
                        style={{ fontWeight: 'bold', color: gradeColors[grade] }}
                    >
                        Grade: {grade}
                    </Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
                <hr style={{ color: 'lightgray' }} />
                <Typography variant="h2" marginTop={2}>
                    <IonIcon icon={documentText} style={{ marginRight: '10px' }}/> System Report Card
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {content.map((item, index) => (
                        <Typography key={index} variant="body1" style={{ marginRight: '10px' }}>
                            <IonIcon icon={item.icon}/> {item.title}
                        </Typography>
                    ))}
                </div>
                <Typography variant="h2" marginTop={2}>
                    <IonIcon icon={bulb} style={{ marginRight: '10px' }}/> Recommendations
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="Recommend table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Appliance(s)</TableCell>
                                <TableCell align="right">Your {current}</TableCell>
                                <TableCell align="right">{recommended}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.userValue}</TableCell>
                                    <TableCell align="right">{row.recommendedValue}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
        </Dialog>
    );
};

export default ScoreDialog;