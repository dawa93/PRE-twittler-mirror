// your code here
for (let i = 0; i < DATA.length; i++) {
  const feed = document.querySelector("#feed");
  let newfeed = document.createElement("div");
  let nickname = document.createElement("span");
  let date = document.createElement("span");
  let usercomment = document.createElement("div");
  let line = document.createElement("div");

  line.classList.add("line");
  newfeed.classList.add("newfeed");
  nickname.classList.add("nickname");
  date.classList.add("date");
  usercomment.classList.add("user_comment");

  feed.append(newfeed);
  nickname.textContent = DATA[i].user;
  date.textContent = DATA[i].created_at;
  usercomment.textContent = DATA[i].message;

  newfeed.append(nickname);
  newfeed.append(date);
  newfeed.append(usercomment);
  newfeed.append(line);
}

// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA);

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());

// document.getElementById("test").innerHTML =
("hello twittler, check developer console!");
