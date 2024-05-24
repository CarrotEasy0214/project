hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

const room = [
  { tag: 1 },
  { tag: 2 },
  { tag: 2 },
  { tag: 3 },
  { tag: 3 },
  { tag: 3 },
  { tag: 3 },
];

const roomMaker = (obj) => {
  const { title } = obj;
};

roomMaker({ roomId: 1, title: "room", tag: 3 });
