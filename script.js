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
            <p> @${blogUsernameValue} ${getTime} </p>
          </div>
          <div>
            <h3>Comments</h3>
            <input placeholder="Username" type="text" id="comment-username" />
            <input
              placeholder="Comment"
              type="text"
              id="comment-username"
            />
            <input type="submit" id="submit" />
            <ul id="comments"></ul>
          </div>
        </div>
  `;
}
