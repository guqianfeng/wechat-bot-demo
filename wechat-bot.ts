import {
    Contact,
    Message,
    ScanStatus,
    WechatyBuilder,
    log,
} from 'wechaty'

const qrcode = require('qrcode-terminal');

require('dotenv').config()

function onScan(qr: string, status: ScanStatus) {
    if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
        qrcode.generate(qr, { small: true })  // show qrcode on console
        

        const qrcodeImageUrl = [
            'https://wechaty.js.org/qrcode/',
            encodeURIComponent(qr),
        ].join('')

        log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)
    } else {
        log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
    }
}

function onLogin(user: Contact) {
    log.info('StarterBot', '%s login', user)
}

async function onMessage(msg: Message) {
    // log.info('StarterBot', msg.toString())

    const room = msg.room();
    const talker = msg.talker();
    const text = msg.text();

    // console.log(msg);

    console.log({
        roomTopic: room?.payload?.topic,
        talkerName: talker.payload?.name,
        text
    });

    if (text === 'ding') {
        await msg.say('dong')
    }

}

function onLogout(user: Contact) {
    log.info('StarterBot', '%s logout', user)
}

const bot = WechatyBuilder.build() 

bot.on('scan', onScan)
bot.on('login', onLogin)
bot.on('logout', onLogout)
bot.on('message', onMessage)

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch((e: any) => log.error('StarterBot', e))