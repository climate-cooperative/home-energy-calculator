import ImageQuestion from "../../ImageQuestion";
import { Window } from '@mui/icons-material';

const Panes = (props) => {
    const { panes, setPanes } = props;

    return (
        <ImageQuestion 
            question="What is the number of panes in your windows?"
            popup="An easy way to tell whether or not you have single, double or triple pane windows is to shine a flashlight through the window.  If you see 1 one reflection back you have single pane windows, if you see 2 reflections back you have double pane windows and if you see 3 reflections back you have triple pane windows."
            content={[
                { values: {panes: 1}, label: 'Single', icon: Window },
                { values: {panes: 2}, label: 'Double', icon: Window },
                { values: {panes: 3}, label: 'Triple', icon: Window },
            ]}
            state={panes}
            setState={setPanes}
        />
    );
}

export default Panes;