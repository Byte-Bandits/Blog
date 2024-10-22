// select input section
let blogUsername = document.querySelector("#blog-username");
let blogTitle = document.querySelector("#blog-title");
let blogDescription = document.querySelector("#blog-description");
let fileInput = document.querySelector("#file-input");
let submitSignup = document.querySelector("#submit-signup");

// select main blog section
let secBlog = document.querySelector("#blog");

// show time function
function getTime() {
  let toDay = new Date();
  let hours = toDay.getHours();
  let min = toDay.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  let time = hours + ":" + min;

  return time;
}

// create a random ID number
function createID() {
  let dateNow = Date.now();
  let randomNum = (Math.random() * 1000).toFixed();
  let uniqueID = dateNow + randomNum;
  return uniqueID;
}

// event click for submit blog BTN
submitSignup.addEventListener("click", submitBlog);

// function of submit event
function submitBlog() {
  // select value of username input create blog
  blogUsernameValue = blogUsername.value;
  blogTitleValue = blogTitle.value;
  blogDescriptionValue = blogDescription.value;
  fileInputValue = fileInput.value;

  //   inner values to html page
  secBlog.innerHTML += `
  <div class="mainBlog">
          <img class="img-title" src=" ${fileInputValue} " alt="" />

          <div>
            <p class="title"> ${blogTitleValue} </p>
            <p class="description">
              ${blogDescriptionValue}
            </p>
            <p class="user-info-font"> username: @${blogUsernameValue}  </p>
            <p class="user-info-font"> post at: ${getTime()}  </p>
            <p class="user-info-font"> ID: ${createID()}  </p>
          </div>
          <div>
            <h3>Comments</h3>
            <input placeholder="Username" type="text" id="comment-username" />
            <input
              placeholder="Comment"
              type="text"
              id="user-comment"
            />
            <input type="submit"  id="submit-comment" />
            <ul id="comments"></ul>
            <p>------------------</p>
          </div>
        </div>
  `;
}

// // select comment section
// let commentUsername = document.querySelector("#comment-username");
// let userComment = document.querySelector("#user-comment");
// let submitComment = document.querySelector("#submit-comment");
// let comment = document.querySelector("#comments");

// // get value

// // create a constructor to get a comment and username
// function GetComment(comment, username) {
//   this.comment = comment;
//   this.username = username;
// }

// // create a event for submit BTN
// submitComment.addEventListener("click", postCommentBTN);

// function postCommentBTN() {
//   let commentUsernameValue = commentUsername.value;
//   let userCommentValue = userComment.value;
//   // get a value of comment section input
//   let newComment = new GetComment(userCommentValue, commentUsernameValue);
//   console.log(newComment.comment);
//   console.log(newComment.username);
// }
// postCommentBTN();
