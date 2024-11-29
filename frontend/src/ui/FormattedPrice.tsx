import React from "react";

const FormattedPrice = ({ amount }: { amount?: number }) => {
  const formattedAmount = new Number(amount).toLocaleString(["en-GH"], {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 2,
  });
  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
