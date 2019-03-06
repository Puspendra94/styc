var express = require('express');
var router = express.Router();

// import controllers
const contactController = require('../controller/contact');
const userController = require('../controller/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/internship', function(req, res, next) {
  res.render('internship', { title: 'Express' });
});
router.get('/mentor', function(req, res, next) {
  res.render('mentor', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express', message: '' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});
router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Express' });
});
router.get('/Gallery', function(req, res, next) {
  res.render('Gallery', { title: 'Express' });
});
router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express', message: '' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express', message: '' });
});
router.get('/cs', function(req, res, next) {
  res.render('cs', { title: 'Express' });
});
router.get('/ece', function(req, res, next) {
  res.render('ece', { title: 'Express' });
});
router.get('/civil', function(req, res, next) {
  res.render('civil', { title: 'Express' });
});
router.get('/mec', function(req, res, next) {
  res.render('mec', { title: 'Express' });
});
router.get('/man', function(req, res, next) {
  res.render('man', { title: 'Express' });
});
router.get('/course', function(req, res, next) {
  res.render('course', { title: 'Express' });
});
router.get('/web', function(req, res, next) {
  res.render('web', { title: 'Express' });
});
router.get('/azure', function(req, res, next) {
  res.render('azure', { title: 'Express' });
});
router.get('/vr', function(req, res, next) {
  res.render('vr', { title: 'Express' });
});
router.get('/cb', function(req, res, next) {
  res.render('cb', { title: 'Express' });
});
router.get('/over', function(req, res, next) {
  res.render('over', { title: 'Express' });
});
router.get('/autocad', function(req, res, next) {
  res.render('autocad', { title: 'Express' });
});
router.get('/iot', function(req, res, next) {
  res.render('iot', { title: 'Express' });
});
router.get('/ta', function(req, res, next) {
  res.render('ta', { title: 'Express' });
});
router.get('/survey', function(req, res, next) {
  res.render('survey', { title: 'Express' });
});
router.get('/sa', function(req, res, next) {
  res.render('sa', { title: 'Express' });
});
router.get('/plan', function(req, res, next) {
  res.render('plan', { title: 'Express' });
});
router.get('/hr', function(req, res, next) {
  res.render('hr', { title: 'Express' });
});
router.get('/erp', function(req, res, next) {
  res.render('erp', { title: 'Express' });
});
router.get('/Finance', function(req, res, next) {
  res.render('Finance', { title: 'Express' });
});
router.get('/bitcoin', function(req, res, next) {
  res.render('bitcoin', { title: 'Express' });
});
router.get('/blog_single', function(req, res, next) {
  res.render('blog_single', { title: 'Express' });
});
router.get('/business', function(req, res, next) {
  res.render('business', { title: 'Express' });
});
router.post('/contact-us', async function (req, res, next) {
  try {
    const result = await contactController.submitContactUsForm(req.body);
    result.success ?
    res.render('contact', { title: 'Express', message: `<span style="text-align: center;color: #4CAF50;">${result.message}</span>` }):
    res.render('contact', { title: 'Express', message: `<span style="text-align: center;color: Tomato;">${result.message}</span>` });
  } catch (error) {
    res.render('contact', { title: 'Express', message: 'Failed to send your query\nPlease try again' });
  }
});

router.post('/register', async (req,res,next) => {
  try {
    const result = await userController.signup(req.body);
    // console.log(result);
    result.success ? 
    res.render('login', { title: 'Express', message: '' }) :
    res.render('signup', { title: 'Express', message: result.message }); 
  } catch (error) {
    res.render('signup', { title: 'Express', message: '' });
  }
})

router.post('/signin', async (req, res, next) => {
  try {
    console.log(req.body);
    const loginResult = await userController.login(req.body);
    console.log(loginResult);
    loginResult ? res.render('index',{title: 'Express'}) : 
    res.render('login', {title: 'Express', message: 'Incorrect credentials'});
  } catch (error) {
    res.render('login', { title: 'Express', message: '' });
  }
})
module.exports = router;
