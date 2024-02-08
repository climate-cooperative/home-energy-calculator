import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const CrawlSpace = (props) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '70%',
        }}>
            <h2>
                Does your home have a crawl space under the first floor?
            </h2>
            <div>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => props.setCrawlspace('yes')}
                    style={{ margin: '10px' }}
                >
                    Yes
                </Button>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => props.setCrawlspace('no')}
                    style={{ margin: '10px' }}
                >
                    No
                </Button>
            </div>
            <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.setCrawlspace('not sure')}
                    style={{ margin: '10px' }}
                >
                    Not Sure
            </Button>
        </div>
    );
}

export default CrawlSpace;