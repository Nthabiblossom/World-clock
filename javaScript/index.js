function updateTime() {
  // cairo
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");

    cairoDateElement.innerHTML = moment().format("MMMM Do, YYYY");

    let cairoTime = document.querySelector("#cairoTime");
    let cairoTimeElement = cairoTime.querySelector(".time");
    let cairoTimeNow = moment().tz("Africa/Cairo");
    cairoTimeElement.innerHTML = `${cairoTimeNow.format(
      "h:mm:ss"
    )} <small>${cairoTimeNow.format("A")}</small>`;
  }
  // sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");

    sydneyDateElement.innerHTML = moment().format("MMMM Do, YYYY");

    let sydneyTime = document.querySelector("#sydneyTime");
    let sydneyTimeElement = sydneyTime.querySelector(".time");
    let sydneyTimeNow = moment().tz("Australia/Sydney");
    sydneyTimeElement.innerHTML = `${sydneyTimeNow.format(
      "h:mm:ss"
    )} <small>${sydneyTimeNow.format("A")}</small>`;
  }
  // qatar
  let qatarElement = document.querySelector("#qatar");
  if (qatarElement) {
    let qatarDateElement = qatarElement.querySelector(".date");

    qatarDateElement.innerHTML = moment().format("MMMM Do, YYYY");

    let qatarTime = document.querySelector("#qatarTime");
    let qatarTimeElement = qatarTime.querySelector(".time");
    let qatarTimeNow = moment().tz("Asia/Qatar");
    qatarTimeElement.innerHTML = `${qatarTimeNow.format(
      "h:mm:ss"
    )} <small>${qatarTimeNow.format("A")}</small>`;
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#allCities");
  citiesElement.innerHTML = `
  <div class="cities" id="sydneyTime">
          <div id="sydney">
            <div class="city">${cityName}</div>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>

          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
