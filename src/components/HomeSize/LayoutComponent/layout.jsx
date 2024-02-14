import Button from '@mui/material/Button';
import House from '@mui/icons-material/House';
import Cottage from '@mui/icons-material/Cottage';

const HouseButton = (props) => {
  const isSelected = JSON.stringify(props.selected) === JSON.stringify(props.homeType.values);

  return (
    <Button
      variant="contained"
      color={isSelected ? 'secondary' : 'primary'}
      onClick={() => props.setSelected(props.homeType.values)}
      style={{ margin: '10px' }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        '&:hover': {
          backgroundColor: isSelected ? 'lightcoral' : 'lightblue'
        }
      }}
    >
      <props.homeType.icon style={{ fontSize: '50px' }} />
      <div>{props.homeType.label}</div>
    </Button>
  );
};

const Layout = (props) => {
  const { layout, setLayout } = props;
  const homeLayouts = [
    {
      values: {
        stories: 1,
        basements: 0
      },
      name: '1 Story',
      label: '1 Story',
      icon: House
    },
    {
      values: {
        stories: 1,
        basements: 1 / 2
      },
      name: '1 Story + 1/2 Basement',
      label: '1 Story + 1/2 Basement',
      icon: Cottage
    },
    {
      values: {
        stories: 1,
        basements: 1
      },
      name: '1 Story + 1 Basement',
      label: '1 Story + 1 Basement',
      icon: Cottage
    },
    {
      values: {
        stories: 2,
        basements: 0
      },
      name: '2 Story',
      label: '2 Story',
      icon: House
    },
    {
      values: {
        stories: 2,
        basements: 1
      },
      name: '2 Story + 1 Basement',
      label: '2 Story + 1 Basement',
      icon: Cottage
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%'
      }}
    >
      <h2>Which layout is most similar to your home?</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {homeLayouts.map((homeType, index) => {
          return (
            <HouseButton
              key={index}
              homeType={homeType}
              selected={layout}
              setSelected={setLayout}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
