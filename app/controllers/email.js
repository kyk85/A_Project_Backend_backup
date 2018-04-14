var nodemailer = require('nodemailer');

exports.inquiryReply = function(req, res) {
    // let response = res
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // to change
        port: '587', // to change
        secure: false,
        auth: {
            user: 'USER',
            pass: 'PASS'
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
        }
        // console.log(response)
        res.json({message: "sending email to " + name + " at " + email})
    });
}
