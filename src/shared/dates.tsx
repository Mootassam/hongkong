import moment from "moment-timezone";

class Dates {
  static datetime() {
    const currentDateTime = moment()
      .tz("Asia/Hong_Kong")
      .format("YYYY-MM-DD HH:mm:ss");
    return currentDateTime;
  }
}

export default Dates;
