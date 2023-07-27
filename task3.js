var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    author:{
        user:"kanuparthikasyap95@gmail.com",
        password:""
    }
});
var mailoptions={
    from:"kanuparthikasyap95@gmail.com",
    to:"pravin.consensus@gmail.com",
    subject:"20A21A0576 sending mail from node js",
    text:"i am k k kasyap sending mail from node js with reg no 20A21A0576"
};
transporter.sendMail(mailoptions,function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log('Email sent:'+info.response);
    }
})