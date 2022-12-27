import { format } from "date-fns";

import moment from "moment";

export const LOCAL_DATE_FORMAT = "YYYY-MM-DD'T'HH:mm";

export const DATE_FORMAT_DDMMYYYY_HHMM = "DD/MM/YYYY HH:mm";
export const DATE_FORMAT_DDMMYYYY = "DD/MM/YYYY";
export const DATE_FORMAT_DD = "DD";

// Input format
export const INPUT_DATE_FORMAT = "YYYY-MM-DD";
export const INPUT_INPUT_DATE_RANGE_FORMAT = "YYYY-MM-DD HH:mm:ss";

// Birth day
export const BIRTH_DATE_FORMAT = "YYYY-MM-DD";

// Date range picker
export const DATE_PICKER_DATE_FORMAT = "DD-MM-YYYY";
export const DATE_FORMAT = "DD/MM/YYYY";
export const DATE_TIME_FORMAT = "YYYY/MM/DD HH:mm";
export const DATE_TIME_FORMAT_BELGA = "DD/MM/YYYY HH:mm";
export const TIME_FORMAT_BELGA = "HH:mm";

export const TO_DAY = {
  startDate: new Date().setHours(0, 0, 0, 0),
  endDate: new Date().setHours(23, 59, 59, 999),
};

export function addDays(added, days, format) {
  let instance = moment(added, format);
  return instance.isValid() ? instance.add(days, "days").toDate() : null;
}
export function addMonths(added, months, format) {
  let instance = moment(added, format);
  return instance.isValid() ? instance.add(months, "months").toDate() : null;
}
export function addYears(added, years, format) {
  let instance = moment(added, format);
  return instance.isValid() ? instance.add(years, "years").toDate() : null;
}

export function subtractDays(subtract, days, format) {
  let instance = moment(subtract, format);
  return instance.isValid() ? instance.subtract(days, "days").toDate() : null;
}

export function currentWeekFirstDate(current, format) {
  let instance = moment(current, format);
  return instance.isValid() ? instance.startOf("isoWeek").toDate() : null;
}

export function currentWeekLastDate(current, format) {
  let instance = moment(current, format);
  return instance.isValid()
    ? instance
        .endOf("isoWeek")
        .startOf("day")
        .toDate()
    : null;
}

export function lastWeekFirstDate(current, format) {
  let instance = moment(current, format);
  if (!instance.isValid()) {
    return null;
  }
  let lastWeekDate = instance.subtract(1, "weeks");

  return lastWeekDate.startOf("isoWeek").toDate();
}

export function lastWeekLastDate(current, format) {
  let instance = moment(current, format);
  if (!instance.isValid()) {
    return null;
  }
  let lastWeekDate = instance.subtract(1, "weeks");

  return lastWeekDate
    .endOf("isoWeek")
    .startOf("day")
    .toDate();
}

export function currentMonthFirstDate(current, format) {
  let instance = moment(current, format);
  return instance.isValid() ? instance.startOf("month").toDate() : null;
}

export function currentMonthLastDate(current, format) {
  let instance = moment(current, format);
  return instance.isValid()
    ? instance
        .endOf("month")
        .startOf("day")
        .toDate()
    : null;
}

export function lastMonthStartDate(current, format) {
  let instance = moment(current, format);
  if (!instance.isValid()) {
    return null;
  }
  let lastMonthDate = instance.subtract(1, "months");

  return lastMonthDate.startOf("month").toDate();
}

export function lastMonthEndDate(current, format) {
  let instance = moment(current, format);
  if (!instance.isValid()) {
    return null;
  }
  let lastMonthDate = instance.subtract(1, "months");

  return lastMonthDate.endOf("month").toDate();
}

export function currentYearFirstDate(current, format) {
  let instance = moment(current, format);
  return instance.isValid() ? instance.startOf("year").toDate() : null;
}

export function currentYearLastDate(current, format) {
  let instance = moment(current, format);
  return instance.isValid()
    ? instance
        .endOf("year")
        .startOf("day")
        .toDate()
    : null;
}

export function equal(first, second, format, granularity = "date") {
  let compared = moment(first, format);
  let compare = moment(second, format);
  return (
    compared.isValid() &&
    compare.isValid() &&
    compared.isSame(compare, granularity)
  );
}

export function isBefore(first, second, format, granularity = "date") {
  return !isAfterOrEqual(first, second, format, granularity);
}

export function isAfterOrEqual(first, second, format, granularity = "date") {
  let compared = moment(first, format);
  let compare = moment(second, format);
  return (
    compared.isValid() &&
    compare.isValid() &&
    compared.isSameOrAfter(second, granularity)
  );
}

export function formatValue(input, format) {
  const momentValue = moment(input);

  if (!momentValue.isValid()) throw new Error("Invalid input");

  if (!format) return input;

  return momentValue.format(format);
}

export function covertMillisecondToDate(millisecond, format) {
  return moment(millisecond).format(format);
}

export function coverDateToYesterdayOrToDayString(dateInput, originalFormat) {
  // Yesterday with without time
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  // Today with without time
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  //  Process dateInput
  let dateInputFormat = new Date(moment(dateInput, originalFormat));
  let timeOfDateInput = moment(dateInput, originalFormat).format(
    TIME_FORMAT_BELGA
  );
  dateInputFormat.setHours(0, 0, 0, 0);

  switch (dateInputFormat.getTime()) {
    case today.getTime():
      return "TODAY " + timeOfDateInput;
    case yesterday.getTime():
      return "YESTERDAY " + timeOfDateInput;
    default:
      return dateInput;
  }
}

export function dateRangeString(
  from,
  to,
  inputFormat = null,
  outputFormat = DATE_FORMAT,
  deleminator = "-"
) {
  let f = moment(from, inputFormat);
  let t = moment(to, inputFormat);

  if (!f.isValid() || !t.isValid()) throw new Error("Invalid input");

  return `${formatValue(f, outputFormat)} ${deleminator} ${formatValue(
    t,
    outputFormat
  )}`;
}

export function difference(first, second, format = null, unitOfTime = "days") {
  var f = moment(first, format);
  var s = moment(second, format);
  return f.diff(s, unitOfTime);
}

export function formatDateDDMMYYYYHHMM(date) {
  return date ? moment(date).format(DATE_FORMAT_DDMMYYYY_HHMM) : "";
}

export function formatDateDDMMYYYY(date) {
  return date ? moment(date).format(DATE_FORMAT_DDMMYYYY) : "";
}

export function formatDateDD(date) {
  return date ? moment(date).format(DATE_FORMAT_DD) : "";
}

export function formatDDMMYYYYToDate(date) {
  return date ? moment(date, DATE_FORMAT).toDate() : "";
}

export function formatDateYYYYMMDD(date) {
  return date ? moment(date).format(INPUT_DATE_FORMAT) : "";
}

export function formatDateYYYYMMDDHHMMSS(date) {
  return date ? moment(date).format(INPUT_INPUT_DATE_RANGE_FORMAT) : "";
}

export function formatToLocalDate(date) {
  return date
    ? new Date(date.toString().split("GMT")[0] + " UTC")
        .toISOString()
        .split(".")[0]
    : "";
}

export function getUTCTime(d) {
  return new Date(d).toISOString().slice(0, 10);
}

export const millisecondToDate = (millisecond) => {
  const date = new Date(millisecond);

  const dateString =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return dateString;
};

export const millisecondToDateTimeLocal = (millisecond) => {
  return format(new Date(millisecond), "yyyy-MM-dd'T'HH:mm:ss");
};
