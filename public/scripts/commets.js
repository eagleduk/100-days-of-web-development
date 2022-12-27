console.log("comments.js");

const loadCommectButton = document.getElementById("load-comment");
const commetsContainer = document.getElementById("comments");
const saveCommentForm = document.getElementById("save-comment-form");

function appendCommects(comments) {
  const ol = commetsContainer.querySelector("ol");
  ol.innerHTML = "";

  comments.forEach(({ title, text }) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <article class="comment-item">
        <h2>${title}</h2>
        <p>${text}</p>
    </article>
  `;
    ol.appendChild(li);
  });
}

async function loadComments(e) {
  try {
    const postId = loadCommectButton.dataset.postId;
    const result = await fetch(`/posts/${postId}/comments`);

    if (!result.ok) {
      alert(result.message);
    }
    const comments = await result.json();
    if (comments && comments.length > 0) appendCommects(comments);
    else commetsContainer.querySelector("p").textContent = "No have Comments";
  } catch (error) {
    alert("Client Error");
  }
}

loadCommectButton.addEventListener("click", loadComments);

saveCommentForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
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
    if (result.ok) {
      loadComments();
    } else {
      alert("Server Error");
    }
  } catch (error) {
    alert("Client Error");
  }
});
