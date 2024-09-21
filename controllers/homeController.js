class HomeController {
    homeView(req, res) {
        res.render('home.ejs', { layout: false })
    }
    loginView(req, res) {
        res.render('login.ejs', { layout: false })
    }
}

module.exports = HomeController