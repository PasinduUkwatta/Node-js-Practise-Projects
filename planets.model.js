const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];
const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return (
        planet["koi_disposition"] === "CONFIRMED" &&
        planet["koi_insol"] > 0.36 &&
        planet["koi_insol"] < 1.11 &&
        planet["koi_prad"] < 1.6
    );
}

 function loadPlanetsData() {


    return new Promise((resolve,reject)=>
    {
        fs.createReadStream("C:/Users/Acer/Desktop/Self Study/Node js/NASA Project/server/data/kepler_data.csv")
            .pipe(
                parse({
                    comment: "#",
                    columns: true,
                })
            )
            .on("data", (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
                results.push(data);
            })
            .on("error", (err) => {
                // console.log(err);
                reject(err)
            })
            .on("end", () => {
                // console.log(`found ${habitablePlanets.length} habitable planets`);
                // console.log(
                //     habitablePlanets.map((planet) => {
                //         return planet["kepler_name"];
                //     })
                // );
                console.log("done");
                resolve()
            });
    })
}

module.exports={
    loadPlanetsData,
    planets:habitablePlanets

}
