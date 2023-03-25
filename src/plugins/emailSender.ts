import nodemailer from 'nodemailer';

export function useEmailSender(email: string, subject: string, message: string, emailService: string) {
    const mailTransport = nodemailer.createTransport({
        service: emailService,
        secure: false,
        port: 25,
        auth: {
            user: process.env.EMAIL,
            password: process.env.EMAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    mailTransport.sendMail({
        from: process.env.COMPANY_NAME,
        to: email,
        subject: subject,
        text: message,
    }, (err, info) => {
        if (!err) {
            return true;
        }
        return err;
    });
};
