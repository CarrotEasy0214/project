hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

const rooms = document.querySelectorAll(".room");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

const lastroomObserver = new IntersectionObserver((entries) => {
  const lastroom = entries[0];
  if (!lastroom.isIntersecting) return;
  loadNewRoom();
  lastroomObserver.unobserve(lastroom.target);
  lastroomObserver.observe(document.querySelector(".room:last-child"));
}, {});

lastroomObserver.observe(document.querySelector(".room:last-child"));

rooms.forEach((room) => {
  observer.observe(room);
});

const roomContainer = document.querySelector(".room-container");
function loadNewRoom() {
  for (let i = 0; i < 10; i++) {
    const room = document.createElement("a");
    room.href = "../login/login.html";
    room.classList.add("room");
    observer.observe(room);
    roomContainer.append(room);
  }
}
