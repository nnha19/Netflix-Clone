import { useState, useEffect } from "react";

export const useCheckAllValid = (obj) => {
  const [allValid, setAllValid] = useState(false);
  useEffect(() => {
    const overAllValid = [];
    for (let key in obj) {
      overAllValid.push(obj[key].isValid);
    }
    setAllValid(overAllValid.every((v) => v));
  }, [obj]);
  return [allValid];
};
