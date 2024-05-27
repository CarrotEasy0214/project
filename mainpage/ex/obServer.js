// let roomData = axios
let roomData = [
  { roomId: 1, title: "HI32", tag: 1 },
  { roomId: 2, title: "HI34", tag: 2 },
  { roomId: 3, title: "HI35", tag: 3 },
];

//클릭 이벤트
const tag1 = document.getElementById("tab01");
const tag2 = document.getElementById("tab02");
const tag3 = document.getElementById("tab03");
const tag4 = document.getElementById("tab04");

tag1.onclick = (e) => {
  console.log("전체 태그 클릭", e);
};
tag2.onclick = (e) => {
  console.log("찬반토론 태그 클릭", e);
  const roombox = document.getElementById("roomShower");

  while (roombox.children[1]) {
    roombox.removeChild(roombox.firstChild);
  }

  roomData.forEach((obj) => {
    let i = 1;
    if (obj.tag != 1) {
      roomData.splice(i);
    }
    i++;

    console.log(obj);
    console.log(roomData);
  });
};
tag3.onclick = (e) => {
  console.log("정보공유 태그 클릭", e);
};
tag4.onclick = (e) => {
  console.log("친목수다 태그 클릭1", e);
};

hamburger = document.querySelector(".hamburger");
hamburger.onclick = () => {
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
  roomData.forEach((element) => {
    loadNewRoom(element);
  });
  lastroomObserver.unobserve(lastroom.target);
  lastroomObserver.observe(document.querySelector(".room:last-child"));
}, {});

lastroomObserver.observe(document.querySelector(".room:last-child"));

rooms.forEach((room) => {
  observer.observe(room);
});

const roomContainer = document.querySelector(".room-container");

const loadNewRoom = (data) => {
  const { roomId, title, tag } = data;

  let tagName;

  if (tag == "1") tagName = "찬반토론";
  if (tag == "2") tagName = "정보공유";
  if (tag == "3") tagName = "친목수다";

  const room = `<a href="../room/?roomId=${roomId}" class="room"><div class="title">${title}</div><div class="tag">${tagName}</div></a>`;

  roomContainer.innerHTML += room;
};
