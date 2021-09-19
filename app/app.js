function setBindings() {
  $("nav a").click(function (e) {
    let btnID = e.currentTarget.id;
    MODEL.getPageInfo(btnID);
  });
}

$(document).ready(function () {
  console.log("ready");
  setBindings();
});
