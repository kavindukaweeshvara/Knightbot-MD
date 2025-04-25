async function aliveCommand(sock, chatId) {
    try {
        const message = `*🤖 ꧁༺silͥent bͣoͫt༻꧂༒⁶⁶⁶ is Active!*\n\n` +
                       `*Version:* 1.0.0\n` +
                       `*Status:* Online\n` +
                       `*Mode:* Public\n\n` +
                       `*🌟 Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun Commands\n` +
                       `• And more!\n\n` +
                       `_*𝙸𝙵 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚂𝙴𝙴 𝙼𝚈 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃, 𝚃𝚈𝙿𝙴 *.𝙼𝙴𝙽𝚄* 📖*_`;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '12036316151368599@newsletter',
                    newsletterName: '꧁༺silͥent bͣoͫt༻꧂༒⁶⁶⁶',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
    }
}

module.exports = aliveCommand;
