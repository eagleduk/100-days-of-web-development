console.log("comments.js");

const loadCommectButton = document.getElementById("load-comment");
const commetsContainer = document.getElementById("comments");
const saveCommentForm = document.getElementById("save-comment-form");

function appendCommects(comments) {
  const ol = commetsContainer.querySelector("ol");

  comments.forEach(({ title, text }) => {
    const article = document.createElement("article");
    article.classList.add("comment-item");

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    article.appendChild(h2);
    article.appendChild(p);

    const li = document.createElement("li");
    li.appendChild(article);

    ol.appendChild(li);
  });
}

loadCommectButton.addEventListener("click", async function (e) {
  const postId = e.target.dataset.postId;
  const result = await fetch(`/posts/${postId}/comments`);
  const comments = await result.json();
  console.log(comments);
  appendCommects(comments.result);
});

saveCommentForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const { method, action } = e.target;
  const formData = new FormData(e.target);
  const result = await fetch(action, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      text: formData.get("text"),
    }),
  });
  console.log(result);
});
