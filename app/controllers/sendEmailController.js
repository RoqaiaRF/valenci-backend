const sgMail = require('@sendgrid/mail')

require("dotenv").config();

const fs = require("fs");
const template = require ( "../../public/emailTemplate")

// let attachment1 = fs.readFileSync(`${__dirname}/file1.pdf`).toString("base64");

// let attachment2 = fs.readFileSync(`${__dirname}/file2.pdf`).toString("base64");

// let attachment3 = fs.readFileSync(`${__dirname}/file3.pdf`).toString("base64");

// let attachment4 = fs.readFileSync(`${__dirname}/file4.pdf`).toString("base64");

// let attachment5 = fs.readFileSync(`${__dirname}/file5.pdf`).toString("base64");

// let attachment6 = fs.readFileSync(`${__dirname}/file6.pdf`).toString("base64");

// let attachment7 = fs.readFileSync(`${__dirname}/file7.pdf`).toString("base64");

// let attachment8 = fs.readFileSync(`${__dirname}/file8.pdf`).toString("base64");

// let attachment9 = fs.readFileSync(`${__dirname}/file9.pdf`).toString("base64");

// let attachment10 = fs.readFileSync(`${__dirname}/file10.pdf`).toString("base64");

// let attachment11 = fs.readFileSync(`${__dirname}/file11.pdf`).toString("base64");

// let attachment12 = fs.readFileSync(`${__dirname}/file12.pdf`).toString("base64");

// let attachment13 = fs.readFileSync(`${__dirname}/file13.pdf`).toString("base64");



const sendEmailController = (subject, text, html) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: process.env.RECEVIER_EMAIL, // Change to your recipient
        from: process.env.SENDER_EMAIL, // Change to your verified sender
        subject: subject,// 'Sending with SendGrid is Fun',
        text: text,//'and easy to do anywhere, even with Node.js',
        html: html, //'<strong>and easy to do anywhere, even with Node.js</strong>',
        // attachments: [
        //     {
        //       content: attachment1,
        //       filename: "الوجه الاول للهوية.pdf",
        //       type: "application/pdf",
        //       disposition: "attachment"
        //     },
        //     {
        //         content: attachment2,
        //         filename: "الوجه الخلفي للهوية.pdf",
        //         type: "application/pdf",
        //         disposition: "attachment"
        //     },
        //     {
        //         content: attachment3,
        //         filename: "صورة دفتر العائلة.pdf",
        //         type: "application/pdf",
        //         disposition: "attachment"
        //     },
        //     {
        //         content: attachment4,
        //         filename: "شهادة راتب.pdf",
        //         type: "application/pdf",
        //         disposition: "attachment"
        //     },
        //     {
        //         content: attachment5,
        //         filename: " الضمان الاجتماعي.pdf",
        //         type: "application/pdf",
        //         disposition: "attachment"
        //     },
        //     {
        //         content: attachment6,
        //         filename: "مرفقات أخرى.pdf",
        //         type: "application/pdf",
        //         disposition: "attachment"
        //     },
        //     {
        //         content: attachment7,
        //         filename: " الهوية من الامام للكفيل.pdf",
        //         type: "application/pdf",
        //         disposition: "attachment"
        //     },
        //     {
        //         content: attachment8,
        //         filename: "الهوية من الخلف للكفيل.pdf",
        //         type: "application/pdf",
        //         disposition: "attachment"
        //       },
        //       {
        //           content: attachment9,
        //           filename: "دفتر العائلة للكفيل.pdf",
        //           type: "application/pdf",
        //           disposition: "attachment"
        //       },
        //       {
        //           content: attachment10,
        //           filename: "شهادة راتب للكفيل.pdf",
        //           type: "application/pdf",
        //           disposition: "attachment"
        //       },
        //       {
        //           content: attachment11,
        //           filename: "مرفقات أخرى للكفيل.pdf",
        //           type: "application/pdf",
        //           disposition: "attachment"
        //       },
        //       {
        //           content: attachment12,
        //           filename: "التوقيع.pdf",
        //           type: "application/pdf",
        //           disposition: "attachment"
        //       },
        //       {
        //           content: attachment13,
        //           filename: "ضمان اجتماعي للكفيل.pdf",
        //           type: "application/pdf",
        //           disposition: "attachment"
        //       },


        //   ]
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

sendEmailController ('Valencia Form','مرحبا وصلك فورم جديد بهذه البيانات',template ({first_name: "رقيه", second_name: "بسام", third_name : "نهار", last_name: " الرفوع"}),)
module.exports = sendEmailController