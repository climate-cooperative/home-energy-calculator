import SelectQuestion from '../../SelectQuestion';

const Siding = (props) => {
  const { siding, setSiding } = props;

  return (
    <SelectQuestion
      question="What is the majority type of siding on your home?"
      subtext="If you have multiple siding materials, specify the majority siding type."
      label="Siding Material"
      popup={`Some siding choices are obvious like brick, stucco, stone, and metal, while other siding options are a bit more difficult to classify like wood, vinyl, or fiber cement siding.\nWood siding has been used for decades and will tend to have more imperfections like knots. Overtime wood siding may show signs of rotting, swelling, or paint peeling off.\nVinyl siding became popular starting in the 1950s and is light and durable. Try pushing on the surface and if it flexes or if it resists dents and scratches you likely have vinyl siding.\nFiber cement siding began being used in the mid-1980s and has some of the characteristics of wood siding because it contains wood fibers. If the siding has a similar feel to that of wood siding, but doesn’t rot or warp throughout the year, you likely have fiber cement siding.`}
      value={siding}
      setValue={setSiding}
      options={[
        'Vinyl',
        'Wood',
        'Fiber Cement',
        'Brick',
        'Stucco',
        'Concrete',
        'Stone',
        'Metal',
        'Other',
        "I don't know"
      ]}
    />
  );
};

export default Siding;
