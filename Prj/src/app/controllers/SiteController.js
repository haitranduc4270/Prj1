


class SiteController {
    home(req, res){

        //[GET] /
        res.render('home');
    };

    search(req, res) {
        //[GET] /search
        res.render('search');
    }

}

module.exports = new SiteController();