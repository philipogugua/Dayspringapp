const users = [
      { username: "dsa_user1", password: "da_lg234" },
      { username: "dsa_user2", password: "da_lg235" },
      { username: "philipwillson", password: "07061277506P" }
    ];

    function login() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("message");

      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        message.style.color = "green";
        message.textContent = "✅ Login successful! Redirecting...";
        setTimeout(() => {
          window.location.href = "main.html";
        }, 1500);
      } else {
        message.style.color = "red";
        message.textContent = "❌ Invalid username or password!";
      }
    }
