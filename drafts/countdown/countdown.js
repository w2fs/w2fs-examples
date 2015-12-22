var cd = function (input) {
  //format: y d h m s
  var dvalue = parseInt(new Date(input) - new Date(), 10) / 1000;
  var result = {
    sign: dvalue > 0 ? 1 : -1
  };
  dvalue = dvalue > 0 ? dvalue : -dvalue;

  result.seconds = parseInt(dvalue % 60, 10);
  result.minutes = parseInt(dvalue / 60 % 60, 10);
  result.hours = parseInt(dvalue / 3600 % 24, 10);
  result.totalDays = parseInt(dvalue / 86400, 10);
  result.years = parseInt(result.totalDays / 365, 10);
  result.days = parseInt(result.totalDays % 365, 10);

  return result;
};