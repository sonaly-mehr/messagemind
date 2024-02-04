import { Button } from "@material-tailwind/react";
import React from "react";

const SubmitButton = (props) => {
  return (
    <Button type={props.type} className="mt-5 text-sm md:text-base capitalize mb-5 md:mb-8 gradient_bg w-full py-3 md:py-3.5 text-white font-poppins font-semibold rounded-lg">
      {props.text}
    </Button>
  );
};

export default SubmitButton;
