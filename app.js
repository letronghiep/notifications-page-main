var notification = document.querySelector("#notifications");
var unread = document.querySelectorAll(".unread");
function removeNotification() {
  unread.length =
    unread.length > 0
      ? (notification.innerHTML = unread.length)
      : notification.remove();
}
var length = unread.length;
removeNotification();
var notifiCard = document.querySelectorAll(".notif_card");
[...notifiCard].forEach((item) => {
    if(!item.querySelector('.user_activity').matches('.unread')){
        item.style.backgroundColor = 'white';
    }
  item.addEventListener("click", function (e) {
    item.querySelector(".user_activity").classList.remove("unread");
    length--;
    notification.innerHTML = length;
            item.style.backgroundColor = "white";
    if (length == 0) {
      notification.remove();
    }
  });
});
var markAll = document.querySelector(".mark_all");
markAll.addEventListener("click", function (e) {
  notifiCard.forEach((item) => {
    item.querySelector(".user_activity").classList.remove("unread");
    item.style.backgroundColor = "white";
    notification.remove();
  });
});
