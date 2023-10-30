const launches = new Map();
let latestFlightNumber = 100;
const launch ={
    flightNumber: 100,
    mission:"Kepler exploration X",
    rocket:"explorer IS1",
    launchDate: new Date('December 27,2030'),
    destination:"kepler -422 b",
    customer:['ZTM', 'NASA'],
    upcoming: true,
    success:true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.value());
}
function addNewLaunch(launch) {
    latestFlightNumber++;

    launches.set(launch.flightNumber, Object.assign(launch,{
        success:true,
        upcoming: true,
        customer:['zero to mastery', 'NASA'],
        flightNumber: latestFlightNumber
    }));
}
function existsLaunchWithID(launchID) {
    return launches.has(launchID);
}
function abortLaunchByID(launchID) {
    const aborted = launches.get(launchID);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}
module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithID,
    abortLaunchByID,
};