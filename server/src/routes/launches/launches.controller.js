const { 
    getAllLaunches, addNewLaunch,existsLaunchWithID,
} = require('../../models/launches.model');
function httpGetAllLaunches ( req,res){
    return res.status(200).json(getAllLaunches()); 
} 
function httpAddNewLaunch ( req, res){
    req.body;

    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target)
    {
        return res.status(400).json({
           error: 'Missing required launch property',
        });
    }


    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate))
    {
        return res.status(400).json({
           error: 'Invalid date',
        });
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res){
    const launchID = number(req.params.id);
    if(!existsLaunchWithID(launchID)){
        return res.status(404).json({
            error: 'Launch does not exist',
        });
    }
    const aborted = abortLaunchByID(launchID)
    return res.status(200).json(aborted);

}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
};