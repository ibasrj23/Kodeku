const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, DisconnectReason } = require("@whiskeysockets/baileys")
const { Boom } = require("@hapi/boom")
const Pino = require("pino")
const fs = require("fs")
const qrcode = require("qrcode-terminal")

const startBot = async () => {
    const { state, saveCreds } = await useMultiFileAuthState("auth_info")
    const { version } = await fetchLatestBaileysVersion()

    const sock = makeWASocket({
        version,
        auth: state,
        logger: Pino({ level: "silent" })
    })

    sock.ev.on("creds.update", saveCreds)

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect, qr } = update

        if (qr) {
            console.log("🔑 QR tersedia, scan sekarang...")
            qrcode.generate(qr, { small: true })
        }

        if (connection === "close") {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut
            console.log("🔌 Terputus. Reconnect?", shouldReconnect)
            if (shouldReconnect) startBot()
        } else if (connection === "open") {
            console.log("yoo bang", sock.user.name || sock.user.id, "Selamat datang di Bot OTP WhatsApp!")
            console.log("📡 Bot siap menerima pesan!")
    }
    })

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0]
        if (!msg.message || msg.key.fromMe) return

        const sender = msg.key.remoteJid
        const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text

        console.log(`📩 Pesan dari ${sender}: ${text}`)

        const otp = text?.match(/\b\d{4,8}\b/)
        if (otp) {
            console.log("🔐 OTP Ditemukan:", otp[0])
            fs.appendFileSync("otp-log.txt", `${new Date().toISOString()} - ${sender} - ${otp[0]}\n`)
        }
    })
}

startBot()
