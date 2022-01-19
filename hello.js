const mission = process.argv[2]

if(mission==="Learn"){
    console.log("time to write node code")
}
else {
    console.log(`is ${mission} really more fun ?`)
}

const EventEmitter =require("events")
const celebrity = new EventEmitter()

celebrity.on("race win",function () {
    console.log("congratulations !")
})

celebrity.on("race win",function () {
    console.log("i could have done better than that !")
})

process.on("exit",(code => {
    console.log("process exit event with code ",code)
}))

celebrity.emit("race win")
celebrity.emit("race lost")
celebrity.emit("race win")
