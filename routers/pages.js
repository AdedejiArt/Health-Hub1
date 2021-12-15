import express from "express";

const pagesrouter = express.Router();

pagesrouter.get('/', (req, res) => {
    res.render('index');
})
pagesrouter.get('/register', (req, res) => {
    res.render('register');
})
pagesrouter.get('/login', (req, res) => {
    res.render("login")
})
pagesrouter.get('/doctor-profile', (req, res) => {
    res.render("doctor-profile")
})
pagesrouter.get('/booking', (req, res) => {
    res.render("booking")
})
pagesrouter.get('/appointments', (req, res) => {
    res.render("appointments")
})
pagesrouter.get('/doctor-register', (req, res) => {
    res.render("doctor-register")
})
pagesrouter.get('/doctor-dashboard', (req, res) => {
    res.render("doctor-dashboard")
})
pagesrouter.get('/checkout', (req, res) => {
    res.render("checkout")
})
pagesrouter.get('/my-patients', (req, res) => {
    res.render("my-patients")
})

pagesrouter.get('/schedule-timings', (req, res) => {
    res.render("schedule-timings")
})

pagesrouter.get('/available-timings', (req, res) => {
    res.render("available-timings")
})


// pagesrouter.get('/users/register', (req, res) => {
//     res.render("patient-dashboard")
// })
pagesrouter.get('/hospitalusers/doctor-register', (req, res) => {
        res.render("doctor-dashboard")
    })
    // pagesrouter.get('/doctor-login', (req, res) => {
    //     res.render("doctor-dashboard")
    // })
export default pagesrouter;