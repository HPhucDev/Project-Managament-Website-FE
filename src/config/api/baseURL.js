export const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

// Authentication
export const SIGN_IN = BASE_URL + "authenticate/login";
export const SIGN_OUT = BASE_URL + "authenticate/logout";
export const REFRESH_TOKEN = BASE_URL + "authenticate/refreshtoken";
export const REGISTER = BASE_URL + "authenticate/register";

// Lecture
export const LECTURER = BASE_URL + "lecture";

//Student
export const STUDENT = BASE_URL + "student";

//Subject
export const SUBJECT = BASE_URL + "subject";

//Progress
export const PROGRESS = BASE_URL + "progress";
