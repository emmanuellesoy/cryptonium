import moment from "moment";

export const formatDate = (date) => {
  try {
    return moment(date).format("YYYY/MM/DD - HH:mm");
  } catch (error) {
    return "";
  }
};

export const formatPrice = (price) => {
  return Math.round(price * 10000) / 10000;
};
