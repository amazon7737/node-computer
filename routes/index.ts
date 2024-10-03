
import * as express from 'express';

const router = express.Router();

const crudRepository = require("../utils/CrudRepository");

interface Entity {
    data : String
}


router.get('/',async (req:express.Request,res:express.Response, next:express.NextFunction)=>{
    crudRepository.save("!!!!");

    res.render('index');
});

router.get('/upload',async (req:express.Request,res:express.Response, next:express.NextFunction)=>{

    res.render('upload');
});

router.post('/upload',async (req:express.Request,res:express.Response, next:express.NextFunction)=>{
    // const {image} = req.body;
    console.log(req.body);
    // console.log("image: ", image);



    res.send(`<script type = "text/javascript">alert("파일이 업로드 되었습니다."); location.href = "/";</script>`)
});

export default router;