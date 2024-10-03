/**
 * 작성일자 : 2024-10-03 오후 11:39
 * 작성자 : 김강민
 * 작성내용 : 예시로 작성해본 json 파일에 create(save) 기능
 */
const fs = require("fs");

interface Entity {
    data : String
}

exports.save = function(entity: Entity) {

    let data = fs.readFileSync("./data/data.json");

    console.log("data: ", data);

    const translateData = JSON.parse(data);

    console.log("translate data : ", translateData);

    console.log("get data : ", entity);

    

    

}