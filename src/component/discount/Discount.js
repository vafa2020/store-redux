import { Button } from "@mui/material";
import { useState } from "react";
import classes from "./Discount.module.scss";

const Discount = () => {
  const [input, setInput] = useState("");
  return (
    <div className={classes.discount}>
      <input
        className={classes.input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={() => console.log(input)}
      >
        اعمال تخفیف
      </Button>
    </div>
  );
};

export default Discount;
