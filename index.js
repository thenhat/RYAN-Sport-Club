var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var activitiesController = require("./controller/activities");
var data = require("./models/activities");
var personController = require("./controller/top-person");
var datatop = require("./models/top-person");
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");


app.listen(process.env.PORT || 3000);

app.get("/", function (req, res) {
    res.render("index", {qs: req.query});
});
app.get("/IndoorSports", function (req, res) {
    res.render("IndoorSports");
});
app.get("/OutdoorSports", function (req, res) {
    res.render("OutdoorSports");
});
app.get("/Recreation", function (req, res) {
    res.render("Recreation");
});
app.get("/Ativities", function (request, response) {
    var listActive = activitiesController.getAll();
    response.render("Ativities", {
        listActive: listActive
    })
});
app.get("/Studios", function (req, res) {
    res.render("Studios");
});
app.get("/SuggestionComplaints", function (req, res) {
    res.render("SuggestionComplaints");
});
app.get("/Feedback", function (req, res) {
    res.render("Feedback", {qs: req.query});
});
app.post("/Feedback", urlencodedParser, function (req, res) {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'nguyenthenhat95@gmail.com',
            pass: '29121994'
        }
    });
    var mainOptions = {
        from: 'Customer',
        to: 'nhatntth1809023@fpt.edu.vn',
        subject: 'FeedbackForm',
        text: 'You recieved feedback from ' + req.body.name,
        html: '<p>You have got a new message</p><ul><li>Username:' + req.body.name + '</li><li>Email:' + req.body.email + '</li><li>Studios:' + req.body.studios + '</li><li>Phone:' + req.body.phone + '</li><li>Message:' + req.body.message + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.redirect('/Feedback');
        } else {
            console.log('Feedback sent: ' + info.response);
            res.redirect('/Success');
        }
    });
    // res.render("contact",{qs: req.query});
});
app.get("/SIGNUP", function (req, res) {
    res.render("SIGNUP", {qs: req.query});
});
app.get("/Gym", function (req, res) {
    res.render("Gym");
});
app.get("/KickFit", function (req, res) {
    res.render("KickFit");
});
app.get("/Boxing", function (req, res) {
    res.render("Boxing");
});
app.get("/cycling", function (req, res) {
    res.render("cycling");
});
app.get("/walking", function (req, res) {
    res.render("walking");
});
app.get("/Skateboarding", function (req, res) {
    res.render("Skateboarding");
});
app.get("/chess", function (req, res) {
    res.render("chess");
});
app.get("/LOL", function (req, res) {
    res.render("LOL");
});
app.get("/PILATES", function (req, res) {
    res.render("Pilates");
});
app.get("/WEIGHT-LIFTING", function (req, res) {
    res.render("Weight");
});
app.get("/Kettlebell", function (req, res) {
    res.render("Kettlebell");
});
app.get("/Gallery", function (req, res) {
    res.render("Gallery");
});
app.get("/blogs", function (req, res) {
    res.render("blogs");
});
app.get("/top-person", function (request, response) {
    var listPerson = personController.getAll();
    response.render("top-person", {
        listPerson: listPerson
    })
});
app.get("/about", function (req, res) {
    res.render("about");
});
app.get("/contact", function (req, res) {
    res.render("contact", {qs: req.query});
});
app.post("/contact", urlencodedParser, function (req, res) {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'nguyenthenhat95@gmail.com',
            pass: '29121994'
        }
    });
    var mainOptions = {
        from: 'Customer',
        to: 'nhatntth1809023@fpt.edu.vn',
        subject: 'ContactForm',
        text: 'You recieved contact from ' + req.body.name,
        html: '<p>You have got a new message</p><ul><li>Username:' + req.body.name + '</li><li>Email:' + req.body.email + '</li><li>Subject:' + req.body.subject + '</li><li>Message:' + req.body.message + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.redirect('/contact');
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/Success');
        }
    });
    // res.render("contact",{qs: req.query});
});
app.post("/SIGNUP", urlencodedParser, function (req, res) {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'nguyenthenhat95@gmail.com',
            pass: '29121994'
        }
    });
    var mainOptions = {
        from: 'Customer' + req.body.fullname,
        to: 'nhatntth1809023@fpt.edu.vn',
        subject: 'SIGNUP-FORM',
        text: 'You recieved SIGNUP from ' + req.body.fullname,
        html: '<p>You have got a new message</p><ul><li>Username:' + req.body.fullname + '</li><li>Phone:' + req.body.phone + '</li><li>Studios:' + req.body.studios + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.redirect('/SIGNUP');
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/Success');
        }
    });
    // res.render("contact",{qs: req.query});
});
app.post("/", urlencodedParser, function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'nguyenthenhat95@gmail.com',
            pass: '29121994'
        }
    });
    var mainOptions = {
        from: 'Customer' + req.body.fullname,
        to: 'nhatntth1809023@fpt.edu.vn',
        subject: 'SIGNUP-index-FORM',
        text: 'You recieved SIGNUP from ' + req.body.fullname,
        html: '<p>You have got a new message</p><ul><li>Username:' + req.body.fullname + '</li><li>Phone:' + req.body.phone + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/Success');

        }
    });
    // res.render("contact",{qs: req.query});
});

app.get("/TACTIC", function (req, res) {
    res.render("tactic");
});
app.get("/Success", function (req, res) {
    res.render("Success");
});
