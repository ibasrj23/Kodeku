# 🤖 BOT OTP WhatsApp - IbasRj

Bot ini dibuat dengan tujuan utama untuk **menerima kode OTP (One-Time Password)** dari pesan WhatsApp secara otomatis dan mencatatnya ke dalam file log. Dibangun menggunakan `@whiskeysockets/baileys`, bot ini cocok untuk proyek verifikasi atau testing sistem OTP berbasis WhatsApp.

---

## ✨ Fitur

- Menampilkan QR untuk login WhatsApp
- Mendeteksi pesan masuk secara real-time
- Mengekstrak kode OTP dari pesan (angka 4-8 digit)
- Menyimpan log OTP ke file `otp-log.txt`

---

## 🚀 Cara Menjalankan

1. **Clone repo / download project**
   ```bash
   git clone https://github.com/ibasrj23/Kodeku.git
   cd Kodeku
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan bot**
   ```bash
   node index.js
   ```

4. **Scan QR Code**
   Gunakan aplikasi WhatsApp di HP kamu untuk memindai QR dan menghubungkan bot.

---

## 📦 Struktur File

```
.
├── auth_info/         # Tempat penyimpanan session login WhatsApp
├── index.js           # File utama bot
├── otp-log.txt        # Log OTP yang diterima
├── package.json
└── README.md
```

---

## 🛠️ Teknologi

- Node.js
- Baileys (`@whiskeysockets/baileys`)
- Pino logger
- Native FS untuk penyimpanan log

---

## ⚠️ Catatan

- **QR Code** hanya muncul di terminal saat awal login. Setelah terhubung, bot akan otomatis reconnect bila koneksi terputus (kecuali logout manual).
- OTP hanya akan dicatat jika sesuai pola angka **4–8 digit**.
- Jangan gunakan bot ini untuk tujuan yang melanggar kebijakan WhatsApp.
- Bot ini menggunakan library [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys) versi terbaru.
- Setelah scan QR berhasil, bot akan mendeteksi OTP yang masuk ke akun WhatsApp Anda.


---

## 👤 Pembuat

> Bot Pengembang **IbasRj**  
> [GitHub](https://github.com/ibasrj23) 
> [Instagram](https://instagram.com/kyy_rj)
> [Dibantu](https://chatgpt.com/)
---

## 📜 Lisensi

Proyek ini menggunakan lisensi MIT — bebas digunakan, diubah, dan disebarluaskan dengan tetap mencantumkan atribusi.
