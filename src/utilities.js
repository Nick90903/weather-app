import fromUnixTime from "date-fns/fromUnixTime";

function retrieveDate(unix, offset) {
  console.log(`Unix: ${unix}, Offset: ${offset}`);
  let date = fromUnixTime(unix + offset).toUTCString();
  return date;
}

function convert3Day(short) {
  console.log(short + " Short");
  switch (short.slice(0, 3)) {
    case "Mon":
      return "Monday";
      break;

    case "Tue":
      return "Tuesday";
      break;

    case "Wed":
      return "Wednesday";
      break;

    case "Thu":
      return "Thursday";
      break;

    case "Fri":
      return "Friday";
      break;

    case "Sat":
      return "Saturday";
      break;

    case "Sun":
      return "Sunday";
      break;
  }
}

function capitalize(toFix) {
  return toFix[0].toUpperCase() + toFix.substring(1);
}

export { retrieveDate, convert3Day, capitalize };
