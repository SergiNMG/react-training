import { useState } from "react";

export const useValue = () => {
    const [value, setValue] = useState(0);

    const addValue = () => {
      return setValue(value + 1);
    };
  
    const substractValue = () => {
      return setValue(value - 1);
    };

    const resetValue = () => {
        return setValue(0);
    }

    return { value, addValue, substractValue, resetValue }
}