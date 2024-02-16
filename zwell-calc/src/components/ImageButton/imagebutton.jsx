import React from 'react';
import Button from '@mui/material/Button';

const ImageButton = ({key, content, selected, setSelected}) => {
    const isSelected = Array.isArray(selected) 
        ? selected.map(JSON.stringify).includes(JSON.stringify(content.values)) 
        : JSON.stringify(selected) === JSON.stringify(content.values);

    return (
        <Button
            variant="contained"
            color={isSelected ? "secondary" : "primary"}
            onClick={setSelected}
            style={{ margin: '10px' }}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '150px',
                height: '150px',
                borderRadius: '10px',
                '&:hover': {
                    backgroundColor: isSelected ? 'lightcoral' : 'lightblue',
                }
            }}
        >
            <content.icon style={{ fontSize: '50px' }}/>
            <div>{content.label}</div>
        </Button>
    );
};

export default ImageButton;