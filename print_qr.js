var QRCode = require('qrcode')

QRCode.toString('I am a pony!', { type: 'terminal' }, function (err, url) {
    console.log(url)
})

QRCode.toFile('./public/resume/qr_resume_2025.jpg', 'Some text', {
    color: {
        dark: '#000',  // black dots
        light: '#0000' // Transparent background
    },
    type: 'jpg',
}, function (err) {
    if (err) throw err
    console.log('done')
})