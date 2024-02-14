import React from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Rooms = (props) => {
    const { rooms, setRooms } = props;

    const handleIncrement = (room) => {
        const incrementValue = room === 'bathrooms' ? 0.5 : 1;
        setRooms({...rooms, [room]: rooms[room] + incrementValue});
    };

    const handleDecrement = (room) => {
        const decrementValue = room === 'bathrooms' ? 0.5 : 1;
        if (rooms[room] >= decrementValue) {
            setRooms({...rooms, [room]: rooms[room] - decrementValue});
        }
    };

    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }
        }>
            <h2>How many of these rooms does your home have?{/* pop up hint */}</h2>
            {Object.keys(rooms).map((room, index) => {
                return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <IconButton color="secondary" onClick={() => handleDecrement(room)}>
                            <RemoveIcon />
                        </IconButton>
                        <TextField 
                            label={room} 
                            variant="outlined" 
                            value={rooms[room]} 
                            InputProps={{
                                readOnly: true,
                            }}
                            style={{ 
                                margin: '0 10px',
                                width: '100px',
                            }}
                        />
                        <IconButton color="secondary" onClick={() => handleIncrement(room)}>
                            <AddIcon />
                        </IconButton>
                    </div>
                );
            }
            )}
        </div>
    );
}

export default Rooms;