const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const fs = require("fs");
const template = require("../../public/emailTemplate");
const getInfoController = require("../controllers/getInfoController");

const attachmentHelper = async (id) => {
  let info = await getInfoController(id);
  let front_id_image = info.front_id_image;
  let back_id_image = info.back_id_image;
  let family_book_image = info.family_book_image;
  let income_certificate = info.income_certificate;
  let daman_image = info.daman_image;
  let another_attachments = info.another_attachments;
  let signiture = info.signiture;
  let front_id_image_kafeel = info.front_id_image_kafeel;
  let back_id_image_kafeel = info.back_id_image_kafeel;
  let family_book_image_kafeel = info.family_book_image_kafeel;
  let income_certificate_kafeel = info.income_certificate_kafeel;
  let daman_image_kafeel = info.daman_image_kafeel;
  let another_attachments_kafeel = info.another_attachments_kafeel;

  let attachments = [
    front_id_image,
    back_id_image,
    family_book_image,
    income_certificate,
    daman_image,
    another_attachments,
    front_id_image_kafeel,
    back_id_image_kafeel,
    family_book_image_kafeel,
    income_certificate_kafeel,
    daman_image_kafeel,
    another_attachments_kafeel,
    signiture,
  ].filter((n) => n);

  let result = [];
  for (let i = 0; i < attachments.length - 1; i++) {
  
    result.push({
      content: fs
        .readFileSync(
          `${`C:\/Users\/HP\/Desktop\/Github Project\/valenci-backend\/upload`}\/${
            attachments[i]
          }`
        )
        .toString("base64"),
      filename: `attachment${i}.pdf`,
      type: "application/pdf",
      disposition: "attachment",
    });
  }
  result.push({
    content: fs
      .readFileSync(
        `${`C:\/Users\/HP\/Desktop\/Github Project\/valenci-backend\/upload`}\/${
            attachments[attachments.length - 1] 
        }`
      )
      .toString("base64"),
    filename: `attachment${attachments.length - 1}.png`,
    type: "image/png",
    disposition: "attachment",
  });

  return result;
};

const sendEmailController = async (id) => {
  let html = template(await getInfoController(id));
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.RECEVIER_EMAIL, // Change to your recipient
    from: process.env.SENDER_EMAIL, // Change to your verified sender
    subject: "Valencia Form",
    text: "معلومات جديدة قادمة من الفورم",
    html: html,
    attachments: await attachmentHelper(id),
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendEmailController;
