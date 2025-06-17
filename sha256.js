const input = document.getElementById("shaInput");

let originalText = "";
let hashText = "";
// Update originalText and hash whenever input changes
input.addEventListener("input", async () => {
  originalText = input.value.trim();
  if (originalText) {
    hashText = await sha256(originalText);
  } else {
    hashText = "";
  }
});

// On mouse enter: fade in hash
input.addEventListener("mouseenter", async () => {
  if (!originalText) return;

  input.style.opacity = 0;
  setTimeout(() => {
    input.value = hashText;
    input.classList.add("hashed");
    input.style.opacity = 1;
  }, 200);
});

// On mouse leave: fade back to original
input.addEventListener("mouseleave", () => {
  input.style.opacity = 0;
  setTimeout(() => {
    input.value = originalText;
    input.classList.remove("hashed");
    input.style.opacity = 1;
  }, 200);
});

// SHA-256 hash function
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
