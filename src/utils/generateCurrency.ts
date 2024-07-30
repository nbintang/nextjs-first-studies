
export   const generateCurrency = (price :number) =>
    price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
