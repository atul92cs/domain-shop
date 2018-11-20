const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const session=require('express-session');
const passport=require('passport');
const cookieParser=require('cookie-parser');
const route=require('./routes');
const app=express();
const port=process.env.PORT||8080;
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
 app.use(session({ secret: "cats",saveUninitialized: true,
resave: true }));
app.get('/',route.home);
app.listen(port,()=>{
    console.log('server started on' +' ' +port);
});
