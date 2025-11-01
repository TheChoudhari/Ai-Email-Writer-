
# 📬 AI Email Reply Assistant

**Write smarter. Reply faster.**
An intelligent Chrome extension that integrates directly with Gmail to generate context-aware email replies using **Google Gemini AI**. Powered by a scalable **Spring Boot backend** and a sleek **React frontend**, it helps you respond to emails in seconds with the right tone and clarity.

---

## ✨ What it Does

🚀 Reads your email context and auto-writes a meaningful reply
⚡ One-click insertion of AI-generated responses inside Gmail
🧠 Multiple tone options — Professional, Friendly, Concise, etc.
🔐 Secure communication using Axios → Spring Boot REST API
🎨 Smooth UI animations with gradient reply button
🧩 Works seamlessly with Gmail layout
💡 Improves everyday productivity for students and professionals

---

## 🖥️ How It Works

```
Gmail → Chrome Extension UI → Axios → Spring Boot API 
→ Gemini AI → Generated Response → Auto Reply Suggestion
```

---

## 🛠️ Tech Stack

| Layer               | Technology                     |
| ------------------- | ------------------------------ |
| Frontend            | React.js, Axios                |
| Backend             | Spring Boot, Java              |
| AI                  | Google Gemini Model            |
| Browser Integration | Chrome Extension (Manifest V3) |

---

## 📦 Setup Instructions

### ✅ Backend — Spring Boot

```bash
cd backend
mvn spring-boot:run
```

Add your Gemini API Key in `application.properties`.

### ✅ Frontend — React

```bash
cd frontend
npm install
npm start
```

### ✅ Chrome Extension

1️⃣ Open `chrome://extensions/`
2️⃣ Enable **Developer Mode**
3️⃣ Click **Load unpacked**
4️⃣ Select the `extension/` folder

Done ✅ Your AI reply button appears in Gmail!

---

## 📸 Preview



<img width="1919" height="928" alt="image" src="https://github.com/user-attachments/assets/37cb7151-8a93-436c-87a2-2aafa3ea3adb" />





---

## 🧑‍💻 Future Enhancements

* ✅ Custom reply templates
* ✅ Sentiment style selector
* ✅ Multi-language support
* ✅ Email signature auto-injection
* ✅ Chrome sync settings

---

## 🌟 Why This Project?

Because we all waste too much time typing repetitive emails.
This project solves a **real productivity problem** using cutting-edge AI and modern web technology — ideal for showcasing full-stack engineering skills.

---

## 💖 Support

⭐ If you enjoy this project — **star the repo**!
Contributions and ideas are always welcome 🤝

