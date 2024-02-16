import ImageQuestion from "../../ImageQuestion";
import { Window } from '@mui/icons-material';

const WindowConverage = (props) => {
    const { windows, setWindows } = props;

    return (
        <ImageQuestion
            question="What is the window coverage of your home?"
            label="Most homes have medium window coverage.  Select Low if your home has very few windows.  Select High if your home has a lot of windows."
            content={[
                { values: 'Low', label: 'Low', icon: Window },
                { values: 'Medium', label: 'Medium', icon: Window },
                { values: 'High', label: 'High', icon: Window },
            ]}
            state={windows}
            setState={setWindows}
        />
    );
}

export default WindowConverage;