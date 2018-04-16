var nodemailer = require('nodemailer');

exports.inquiryReply = function(req, res) {
    // let response = res
    var transporter = nodemailer.createTransport({
        host: process.env.EHOST,
        port: process.env.EPORT,
        secure: false,
        auth: {
            user: process.env.EUSER,
            pass: process.env.EPASS
        }
    });
    
    let mailOptions = {
        from: '"YK" <kay2kay1@gmail.com>',
        to: req.body.contactEmail,
        subject: 'Thank you for your inquiry ' + req.body.contactName + ' !',
        text: 'Hello',
        html: 'Your inquiry:<br>' + req.body.inquiry
    };

    // res.json({message:"asd"})

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json(error);
        } else {
        // console.log(response)
        res.json({message: "sending email to " + name + " at " + email})
        }
    });
}
