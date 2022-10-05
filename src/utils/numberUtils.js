export const isInt = (value) => {
  const er = /^-?[0-9]+$/;
  return er.test(value);
};

export const formatMoney = (number, currency) => {
  return `${number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} ${
    currency || ""
  }`;
};

export const formatMoneyVND = (number) => {
  return `${new Intl.NumberFormat("vi-VN", {
    // style: "currency",
    // currency: "VND",
  }).format(number)}`;
};
