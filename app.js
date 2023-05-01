const express=require('express');
const app=express();
const path=require('path');
const {I18n}=require('i18n');

const i18n=new I18n({
    locales:['en','hi','guj'],
    directory:path.join(__dirname,'translation'),
    defaultLocale:  'en'
})
app.use(i18n.init)
app.get('/test',async (req,res)=>{
    res.send({Message:res.__('Message'),Home:res.__('Home')})

})
app.listen(8000,()=>{
    console.log("app is listiening on port 8000");
})