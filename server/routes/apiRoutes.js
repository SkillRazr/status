import express from 'express';
const router = express();

const arr=[];
router.post("/saveStatus", (req, res) => {
    const { issueType, issueTitle, issueDesc } = req.body;
    const currentTime = new Date().toISOString();
    const data = { issueTitle: issueTitle, issueDesc: issueDesc, issueType: issueType ,time: currentTime}; 
    try {
        console.log(req.body);
        arr.push(data);
        return res.status(201).json({ msg: "Issue Saved Successfully!" });
    } catch (error) {
        console.log("Error in save Status"+ error);
        return res.status(500).json({ status: -1, error: error });
    }
})
router.get("/fetchStatus", (req, res) => {
    return res.status(200).json({ status: 1, data: arr });
})

export default router
