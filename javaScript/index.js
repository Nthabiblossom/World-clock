function updateTime() {
  // cairo
  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");

  cairoDateElement.innerHTML = moment().format("MMMM Do, YYYY");

  let cairoTime = document.querySelector("#cairoTime");
  let cairoTimeElement = cairoTime.querySelector(".time");
  let cairoTimeNow = moment().tz("Africa/Cairo");
  cairoTimeElement.innerHTML = `${cairoTimeNow.format(
    "h:mm:ss"
  )} <small>${cairoTimeNow.format("A")}</small>`;
  // sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");

  sydneyDateElement.innerHTML = moment().format("MMMM Do, YYYY");

  let sydneyTime = document.querySelector("#sydneyTime");
  let sydneyTimeElement = sydneyTime.querySelector(".time");
  let sydneyTimeNow = moment().tz("Australia/Sydney");
  sydneyTimeElement.innerHTML = `${sydneyTimeNow.format(
    "h:mm:ss"
  )} <small>${sydneyTimeNow.format("A")}</small>`;

  // qatar
  let qatarElement = document.querySelector("#qatar");
  let qatarDateElement = qatarElement.querySelector(".date");

  qatarDateElement.innerHTML = moment().format("MMMM Do, YYYY");

  let qatarTime = document.querySelector("#qatarTime");
  let qatarTimeElement = qatarTime.querySelector(".time");
  let qatarTimeNow = moment().tz("Asia/Qatar");
  qatarTimeElement.innerHTML = `${qatarTimeNow.format(
    "h:mm:ss"
  )} <small>${qatarTimeNow.format("A")}</small>`;
}
updateTime();
setInterval(updateTime, 1000);
