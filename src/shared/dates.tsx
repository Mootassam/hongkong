import moment from "moment";

class Dates {
  static datetime() {
    const formattedDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

    return formattedDateTime;
  }
}

export default Dates;
