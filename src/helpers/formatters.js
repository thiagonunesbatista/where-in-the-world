export const formatNumberWithDots = number =>
  Number(number).toLocaleString('en-US').replace(/,/g, '.')
