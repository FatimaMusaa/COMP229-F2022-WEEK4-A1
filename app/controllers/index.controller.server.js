// Index controller

export function helloWorld(req, res, next){
    res.render('index.ejs', {title: 'Home'});
};