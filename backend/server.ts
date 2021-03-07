import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './model/user';
import predmet from './model/predmet';
import obavestenje from './model/obavestenje';
import projekat from './model/projekat';
import naucniProjekat from './model/naucni-projekat';
import vest from './model/vest';


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/pia');

const conn = mongoose.connection;


conn.once('open', ()=>{
    console.log('mongo open');
})

const router = express.Router();

const upload = require('express-fileupload')

app.use(upload())


router.route('/login').post((req, res)=>{
    let username = req.body.username;
    let password = req.body.password;

    user.findOne({'username':username, 'password':password}, (err, user)=>{
        if(err) console.log(err);
        else res.json(user);
    })
});

router.route('/register').post((req,res)=>{
    let u = new user(req.body);
    u.save().then(u=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=>{
        res.status(400).json({'user':'no'});
    })
});

router.route('/dodaj-predmet').post((req,res)=>{
    let u = new predmet(req.body);
    u.save().then(u=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=>{
        res.status(400).json({'user':'no'});
    })
});

router.route('/predmet').get((req, res)=>{
    predmet.find({}, (err, predmet)=>{
        if(err) console.log(err);
        else {
            res.json(predmet);
            console.log(predmet);
        }
    })
})

router.route('/user').get((req, res)=>{
    user.find({}, (err, user)=>{
        if(err) console.log(err);
        else {
            res.json(user);
        }
    })
})

router.route('/obavestenje').get((req, res)=>{
    //console.log("hadfsdafsds");
    
    obavestenje.find({}, (err, obavestenje)=>{
        if(err) console.log(err);
        else {
            res.json(obavestenje);
        }
    })
})

router.route('/projekat').get((req, res)=>{
    projekat.find({}, (err, projekat)=>{
        if(err) console.log(err);
        else {
            res.json(projekat);
        }
    })
})

router.route('/vesti').get((req,res)=>{
    vest.find({},(err,vest)=>{
        if(err) console.log(err);
        else {
            res.json(vest);
        }
    })
})

router.route('/naucni-projekat').get((req, res)=>{
    //console.log("naucni-projekat");
    naucniProjekat.find({}, (err, naucniProjekat)=>{
       
        if(err) console.log(err);
        else {
            res.json(naucniProjekat);
        }
    })

         /*predmet.findOne({'naziv':'Programiranje internet aplikacija'}, (err,predmet)=>{
             if(err){
                 console.log(err);

            }
             else {
                 console.log(predmet);
                
             }
         });*/
       /* predmet.find({}, (err, predmet)=>{
            if(err) console.log(err);
            else {
                console.log(predmet);
            }
        })*/
   //console.log("Presao sam");
})

router.route('/update-spisak').post((req,res)=>{
   // console.log("pokusao sam da update...");
    
    predmet.updateOne(
        {'naziv':req.body.predmet},
        {$set: {'spiskovi':req.body.spiskovi}}
    ).then(result=>{
        console.log(result);
        
    });
    /*
    user.findOne({'username':username, 'password':password}, (err, user)=>{
        if(err) console.log(err);
        else res.json(user);
    })
    */ 

    /*try{
        predmet.updateOne(
            {"naziv":"Programiranje internet aplikacija"},
            {$set: {"lab":"ovo je poruka iz angulara2222"}}
        )
        }catch(e){
            console.log(e);
    }*/
})

router.route('/update-user').post((req,res)=>{
    user.updateOne(
        {'username':req.body.username},
        {$set: {'password':req.body.password, 'name':req.body.name,'surname':req.body.surname,'mail':req.body.mail, 'number':req.body.number, 'website':req.body.website, 'bio':req.body.bio,'classnum':req.body.classnum,'prvaprijava':'0', 'predmeti':req.body.predmeti,'image':req.body.image}}
    ).then(result=>{
        console.log(result);
    })
})


router.route('/remove-predmet').post((req,res)=>{
    predmet.deleteOne(
        {'naziv':req.body.naziv},
    ).then(result=>{
        console.log(result);
    })
})


router.route('/remove-user').post((req,res)=>{
    user.deleteOne(
        {'username':req.body.username},
    ).then(result=>{
        console.log(result);
    })
})

//update o predmetu:
router.route('/update-o-predmetu').post((req,res)=>{
    predmet.updateOne(
        {'naziv':req.body.naziv},
        {$set: {'informacije':req.body.informacije}}
    ).then(result=>{
        console.log(result);
    })
})

router.route('/update-predavanja').post((req,res)=>{
    predmet.updateOne(
        {'naziv':req.body.naziv},
        {$set: {'predavanja':req.body.predavanja}}
    ).then(result=>{
        console.log(result);
    })
})


router.route('/update-vezbe').post((req,res)=>{
    predmet.updateOne(
        {'naziv':req.body.naziv},
        {$set: {'vezbe':req.body.vezbe}}
    ).then(result=>{
        console.log(result);
    })
})

router.route('/update-ispiti').post((req,res)=>{
    predmet.updateOne(
        {'naziv':req.body.naziv},
        {$set: {'ispiti':req.body.ispiti}}
    ).then(result=>{
        console.log(result);
    })
})

router.route('/update-lab').post((req,res)=>{
    predmet.updateOne(
        {'naziv':req.body.naziv},
        {$set: {'lab':req.body.lab}}
    ).then(result=>{
        console.log(result);
    })
})

router.route('/update-projekat').post((req,res)=>{
    predmet.updateOne(
        {'naziv':req.body.naziv},
        {$set: {'projekat':req.body.projekat}}
    ).then(result=>{
        console.log(result);
    })
})


router.route('/update-vest').post((req,res)=>{
    vest.updateOne(
        {'naslov':req.body.naslov},
        {$set: {'naslov':req.body.naslov,
        'predmeti':req.body.predmeti, 'tekst':req.body.tekst,'datum':req.body.datum,'Fajlovi':req.body.Fajlovi}
        }
    ).then(result=>{
        console.log(result);
    })
})



router.route('/dodaj-vest').post((req,res)=>{
    let u = new vest(req.body);
    u.save().then(u=>{
        res.status(200).json({'vest':'ok'});
    }).catch(err=>{
        res.status(400).json({'vest':'no'});
    })
});



//upload files

app.post('/upload-predavanje',(req,res)=>{
    
    console.log(req);
    const filer = (req as any).files.file;
    if(filer){
     ///   console.log(filer);
        var file = filer;
        var filename=filer.name;
       // console.log(filename);

       
        file.mv('../frontend/app/src/assets/predavanja/'+filename, function(){
                res.send("File uploaded")
        })
    }
})

app.post('/upload-vezbe',(req,res)=>{
    
    console.log(req);
    const filer = (req as any).files.file;
    if(filer){
     ///   console.log(filer);
        var file = filer;
        var filename=filer.name;
       // console.log(filename);

       
        file.mv('../frontend/app/src/assets/vezbe/'+filename, function(){
                res.send("File uploaded")
        })
    }
})

app.post('/upload-ispiti',(req,res)=>{
    
    console.log(req);
    const filer = (req as any).files.file;
    if(filer){
     ///   console.log(filer);
        var file = filer;
        var filename=filer.name;
       // console.log(filename);

       
        file.mv('../frontend/app/src/assets/ispiti/'+filename, function(){
                res.send("File uploaded")
        })
    }
})

app.post('/upload-labovi',(req,res)=>{
    
    console.log(req);
    const filer = (req as any).files.file;
    if(filer){
     ///   console.log(filer);
        var file = filer;
        var filename=filer.name;
       // console.log(filename);

       
        file.mv('../frontend/app/src/assets/labovi/'+filename, function(){
                res.send("File uploaded")
        })
    }
})

app.post('/upload-projekti',(req,res)=>{
    
    console.log(req);
    const filer = (req as any).files.file;
    if(filer){
     ///   console.log(filer);
        var file = filer;
        var filename=filer.name;
       // console.log(filename);

       
        file.mv('../frontend/app/src/assets/projekti/'+filename, function(){
                res.send("File uploaded")
        })
    }
})


app.post('/upload',(req,res)=>{
    


    console.log(req);
    const filer = (req as any).files.file;
    if(filer){
     ///   console.log(filer);
        var file = filer;
        var filename=filer.name;
       // console.log(filename);
       var fs = require('fs');
       var s = req.body.dir.split('/');
       var dir = '../frontend/app/src/assets/'+s[0];
      
      
       
       if (!fs.existsSync(dir)){
           fs.mkdirSync(dir);
       }

       var dir2 = '../frontend/app/src/assets/'+s[0]+'/'+s[1];

       if (!fs.existsSync(dir2)){
        fs.mkdirSync(dir2);
    }
       
        file.mv('../frontend/app/src/assets/'+req.body.dir+'/'+filename, function(){
                res.send("File uploaded")
        })
    }
})



app.use('/',router);
app.listen(4000, () => console.log(`Express server running on port 4000`));