import jwt_decode from "jwt-decode";

export const checkExpToken = (_token) => {
  if (_token) {
    let date = new Date().getTime() / 1000;
    let expToken = jwt_decode(_token).exp;
    if (expToken > date) {
      return true;
    }
    return false;
  }
  return false;
};
