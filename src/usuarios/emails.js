const nodemailer = require('nodemailer');

async function enviaEmail(usuario){
    const contaTeste = await nodemailer.createTestAccount();
    const transportador = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        auth: contaTeste,
    })

    const info = await transportador.sendMail({
        from: '"Fred Foo 👻" + <fred@mail.com>',
        to: usuario.email,
        subject: 'Bem vindo ao sistema de emails',
        text: 'Olá, este é um email de teste',
        html: '<h1>Olá!<h1> <p>Este é um email de teste.</p>',
    })

    console.log('URL: ' + nodemailer.getTestMessageUrl(info))

}