import { useState } from "react";
import { Kitchen, Laundry } from "../components/Appliances";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/Submit";

const Appliances = (props) => {
    const [kitchen, setKitchen] = useState(props.kitchen || {
        'Natural Gas Cooktop': 0,
        'Electric Cooktop': 0,
        'Induction Cooktop': 0,
        'Natural Gas Oven': 0,
        'Electric Oven': 0,
        'Dishwasher': 0
    });
    const [laundry, setLaundry] = useState(props.laundry || {
        'Washers': 0,
        'Natural Gas Dryer': 0,
        'Electric Dryer': 0,
        'Heat Pump Dryer': 0
    
    });

    const validateAndProceed = () => {
            props.handleNext();
            return { };
    };

    return (
        <div className="page">
            <BackButton pageName={"Lighting"} route={"/lighting"}/>
            <Kitchen kitchen={kitchen} setKitchen={setKitchen}/>
            <Laundry laundry={laundry} setLaundry={setLaundry}/>
            <SubmitButton handleNext={validateAndProceed}/>
        </div>
    );
}

export default Appliances;