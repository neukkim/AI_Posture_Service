const express = require('express');
const app = express();

const passport          = require('passport');
const passportConfig    = require('./passport');
const session           = require('express-session');
const flash             = require('connect-flash');

passportConfig()

//세션 설정
app.use(
    session({
       resave: false,
       saveUninitialized: false,
       secret: "sessionsecretsessionsecret",
    }),
);
//passport 초기화
app.use(passport.initialize()); //req에 passport 설정 추가
app.use(passport.session());    //req.session에 passport 데이터 추가
app.use(flash());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//라우트 객체 생성
const mainRouter    = require('./routes/index');
const userRouter    = require('./routes/user');
const mypageRouter    = require('./routes/mypage');
const postureRouter = require('./routes/posture');
const posture2Router = require('./routes/posture2');
const posture3Router = require('./routes/posture3');
const posture4Router = require('./routes/posture4');
const posture5Router = require('./routes/posture5');
const posture6Router = require('./routes/posture6');
const posture7Router = require('./routes/posture7');
const webcamtestRouter = require('./routes/webcamtest');
const testRouter = require('./routes/test');

//라우트 설정
app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/mypage', mypageRouter);
app.use('/posture', postureRouter);
app.use('/posture2', posture2Router);
app.use('/posture3', posture3Router);
app.use('/posture4', posture4Router);
app.use('/posture5', posture5Router);
app.use('/posture6', posture6Router);
app.use('/posture7', posture7Router);
app.use('/test', testRouter);

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});