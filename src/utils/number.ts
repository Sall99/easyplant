export const totalFormatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
