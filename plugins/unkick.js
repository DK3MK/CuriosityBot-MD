let handler = async (m, { conn, participants, usedPrefix, command }) => {
let kicktext = `*⚠️ ETIQUTE A LA PERSONA O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE QUE REVIVA*\n\n💡 EJEMPLO:\n*${usedPrefix + command} @${global.owner[0][0]}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'add')}
handler.tags = ['group']
handler.command = /^(unkick|revivir)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
