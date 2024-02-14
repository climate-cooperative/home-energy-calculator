import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import {
    Cottage,
    Apartment,
    HolidayVillage,
    Gite,
    Bungalow,
} from '@mui/icons-material';

const ImageButton = styled(Button)(({ theme }) => ({
  ...theme.components.MuiButton.styleOverrides.imageButton,
}));

function ManufacturedHomeIcon(props) {
    return (
        <img src="//s3.amazonaws.com/appforest_uf/f1658986700983x355747656802685160/Icons_ManufacturedHome_Grey.svg" {...props} />
    );
}

const HomeTypeButton = ({ homeType, selected, setSelected }) => {
    const iconStyle = { 
        fontSize: 50, 
        color: selected === homeType.name ? 'white' : 'gray',
    };
    const Icon = homeType.icon;

    return (
        <ImageButton
            color={selected === homeType.name ? 'secondary' : 'primary'}
            onClick={() => setSelected(homeType.name)}
        >
            <Icon style={iconStyle} />
            {homeType.label}
        </ImageButton>
    );
};

const HomeSize = (props) => {
    const { homeSize, setHomeSize } = props;
    const homeTypes = [
        { name: 'Single', label: 'Single Family House', icon: Cottage },
        { name: 'Apartment', label: 'Apartment or Condo', icon: Apartment },
        { name: 'Manufactured', label: 'Manufactured Home', icon: ManufacturedHomeIcon },
        { name: 'Townhouse', label: 'Townhouse', icon: HolidayVillage },
        { name: 'Multi', label: 'Multi-Family', icon: Gite },
        { name: 'Tiny', label: 'Tiny Home', icon: Bungalow },
    ];

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '40%',
            }}
        >
            <h2>What type of home do you have?</h2>
            <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {homeTypes.map(homeType => (
                    <div style={{ flex: '0 0 20%', margin: '1%' }} key={homeType.name}>
                        <HomeTypeButton
                            homeType={homeType}
                            selected={homeSize}
                            setSelected={setHomeSize}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeSize;