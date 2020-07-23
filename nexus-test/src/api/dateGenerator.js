import moment from "moment";

export function dateGenerator() {
  const d = new Date();
  const miliseconds = `.` + d.getMilliseconds();
  const date = moment().format();
  return date.substring(0, 19).concat(miliseconds).concat(date.substring(19));
}
