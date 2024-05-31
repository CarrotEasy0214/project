const userinfoElem = document.getElementById("user-info");
const makeElem = document.getElementById("makeBtn");
(async () => {
  const user = (
    await axios.post(
      "http://localhost:3000/user/info", //url
      {}, //body
      {
        //options
        withCredentials: true,
      }
    )
  ).data;

  console.log(user.user);
  if (user.user) {
    userinfoElem.innerHTML = `<ul>
    <li>
      <a href="./index.html" class="">홈</a>
    </li>
    <li>
      <a href="" class="">고객지원</a>
    </li>
    <li>
      <a href="" class="">Contact Us</a>
    </li>
    <li>
      <a href="" class="">마이페이지</a>
    </li>
    <li>
        <a href="" class="">${user.user}님</a>
    </li>
    <li>
      <a href=".login/login.html" class="">로그아웃</a>
    </li>
  </ul>`;
  }
  if (user.user) {
    makeElem.innerHTML = `
    <input type="submit" class="makeBtn" value="채팅방 생성"/>`;
  }
})();
