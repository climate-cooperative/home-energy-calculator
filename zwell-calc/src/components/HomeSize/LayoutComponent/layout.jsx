import React from 'react';
import ImageQuestion from '../../ImageQuestion/imagequestion';
import { House, Cottage } from '@mui/icons-material';

const Layout = (props) => {
    const { layout, setLayout } = props;
    const homeLayouts = [
        { values: { stories: 1, basements: 0 }, label: '1 Story', icon: House },
        { values: { stories: 1, basements: 1/2 }, label: '1 Story + 1/2 Basement', icon: Cottage },
        { values: { stories: 1, basements: 1 }, label: '1 Story + 1 Basement', icon: Cottage },
        { values: { stories: 2, basements: 0 }, label: '2 Story', icon: House },
        { values: { stories: 2, basements: 1 }, label: '2 Story + 1 Basement', icon: Cottage },
    ];

    return (
        <ImageQuestion 
            question="Which layout is most similar to your home?"
            content={homeLayouts} 
            state={layout} 
            setState={setLayout} 
        />
    );
}

export default Layout;