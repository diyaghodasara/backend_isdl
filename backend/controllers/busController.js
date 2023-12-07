// controllers/busController.js
const bus = require('../models/Buses');
//const Date = require('date-fns');

exports.searchBuses = async(req, res) => {
  try {
    const { destination, date } = req.body;
    console.log("---",req.body);
    //console.log(date.toSting)
    //const d = date.prototype.toString(); 
    const buses =await bus.find({destination: destination,date: date});
    console.log("---busses--+",buses);
    res.status(200).json({ status: true, "fetchedBuses":buses });   
  } catch (error) {
    console.log("error ")
    res.status(411).json({status:false,msg:"no busses found"});
  }  

   
};
// exports.searchBuses = (req, res) => {
//     bus.find({}).exec((err, buses) => {
//         if (err) {
//             res.json({ status: false, message: "Error while searching", error: err });
//         } else {
//             console.log("Found Buses:", buses);
//             res.json({ status: true, buses });
//         }
//     });
// };

