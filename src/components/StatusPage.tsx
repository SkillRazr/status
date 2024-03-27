import { Button, Tooltip } from "@mui/material"
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { fetchStatus, saveStatus } from "../services/status.service";


export default function StatusPage() {
    const [add, setAdd] = useState(false);
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        (async () => {
            const data = await fetchStatus();
            console.log(data);
            setData(data.data);
        })()
    }, [])




    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
        "& .MuiPaper-root": {
            background: "#585558",
            color: "black",
            width: "500px",
        },
    }));
    const ReportMode = () => {
        const [newTitle, setnewTitle] = useState("");
        const [check, setCheck] = useState("");
        const [newDesc, setnewDesc] = useState("");
        const handleCancel = () => {
            setAdd(false);
            setnewTitle("");
            setnewDesc("");
        };
        const handleSave = async () => {
            try {
                const x = await saveStatus(newTitle, newDesc, check);
                console.log(x);
                setAdd(false);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        };
        return (
            <BootstrapDialog open={add} >
                <DialogTitle style={{ color: "red", display: "flex", justifyContent: "center", alignItems: "center" }} ><ReportProblemIcon />Report a Bug</DialogTitle>
                <DialogContent>
                    <div className="flex flex-col text-sm">
                        <label htmlFor="title" className="font-extrabold mb-2 text-white">Issue Title</label>
                        <input className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500" type="text" placeholder="Type Your Issue" value={newTitle} onChange={(e) => {
                            setnewTitle(e.target.value);
                        }} />
                    </div>
                    <div className="text-sm flex flex-col">
                        <label htmlFor="description" className="font-extrabold mt-4 mb-2 text-white">Description</label>
                        <textarea className=" text-black appearance-none w-full border border-gray-200 p-2 h-20 focus:outline-none focus:border-gray-500" placeholder="Enter your description" value={newDesc} onChange={(e) => {
                            setnewDesc(e.target.value);
                        }}></textarea>
                    </div>
                    <div className="mt-2 ">
                        <h3 className="mb-4 font-semibold text-gray-900 text-white">Issue Type</h3>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="Operational Degradation" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => setCheck(e.target.value)} />
                                    <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Operational Degradation</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input id="horizontal-list-radio-id" type="radio" value="Partial Outage" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => setCheck(e.target.value)} />
                                    <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-red">Partial Outage</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input id="horizontal-list-radio-id" type="radio" value="Major Outage" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => setCheck(e.target.value)} />
                                    <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-red">Major Outage</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} >Cancel</Button>
                    <Button onClick={handleSave} >Save</Button>
                </DialogActions>
            </BootstrapDialog>
        )
    }

    const Bar = () => {
        const currentDate = new Date();

        // Array to store the dates
        const datesArray = [];

        // Loop to get the last 30 days
        for (let i = 29; i >= 0; i--) {
            // Calculate the date by subtracting the number of days
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() - i);

            // Format the date in "DD MMM YYYY" format
            const formattedDate = date.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });

            // Push the formatted date to the array
            datesArray.push({ date: formattedDate });
        }
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(currentDate.getDate() - 30);
        for (let index = 0; index < data.length; index++) {
            const date = new Date(data[index].time);
            // Check if the date falls within the last 30 days
            if (date >= thirtyDaysAgo && date <= currentDate) {
                // Get the current date
                const currentDate = new Date();

                // Calculate the difference in milliseconds
                const differenceMs = currentDate.valueOf() - date.valueOf();

                // Convert milliseconds to days
                const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
                const formattedDate = date.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                });
                datesArray[30 - differenceDays - 1] = { date: formattedDate, ...data[index] };
            } else {
                console.log(`${date} does not fall within the last 30 days`);
            }
        }
        return (
            <div className="flex flex-row w-full gap-2 h-[50px]">
                {datesArray.map((date: any, index: any) => {
                    var color= "#17DD8C";
                    if(date.issueType=="Major Outage"){
                        color="#dc2626"
                    }
                    if(date.issueType=="Operational Degradation"){
                        color="#f59e0b"
                    }
                    if(date.issueType=="Partial Outage"){
                        color="#facc15"
                    }
                    return (
                        <Tooltip title={<div>
                            <h1 style={{ fontSize: "15px" }} className="">{date.date}</h1>
                            <hr />
                            <h1 style={{ fontSize: "12px" }} className="">{date.issueType ? date.issueType : "No downtime recorded on this day."}</h1>
                        </div>
                        } placement="bottom" arrow key={index}>
                            <div className={`flex-1 h-full`} style={{background:color}}></div>
                        </Tooltip>
                    );
                })}
            </div>
        )
    }



    return (
        <div className="flex flex-col w-full min-h-[100vh] ">
            <div className="lg:mt-2 mt-12 lg:px-6 pt-0  flex flex-col items-center flex-wrap justify-between ">
                <div className="px-5 my-4 max-w-[70%] w-full flex flex-col items-center justify-center">
                    <h1
                        className="text-5xl my-4 font-extrabold text-center"
                        style={{ color: "#FF66AF" }}
                    >
                        About This Site
                    </h1>
                    <h3 className="m-2"
                    >
                        Welcome to status page ! A status page is a valuable tool for both website owners and users, providing transparent communication about the operational status of a website or service and helping to manage user expectations during incidents and maintenance activities.
                    </h3>
                    <div className="w-full">
                        <Button className="p-2 hover:bg-red-600" startIcon={<ReportProblemIcon />} style={{ color: "red", float: "right", border: "1px solid red" }} onClick={() => setAdd(true)}>Report</Button>


                    </div>
                    <ReportMode />
                    <div className="flex p-4 flex-col w-full m-auto">
                        <span style={{ fontSize: "12px", textAlign: "end", color: "wheat" }}>Uptime over the past 30 days. View historical uptime.</span>
                        <div className="flex flex-col p-2 w-full border border-white p-3 mt-1 rounded ">
                            <h2 className="m-1 text-xl" style={{ textAlign: "left" }}>Web App</h2>
                            <Bar />
                        </div>
                    </div>
                    <div className="flex p-4 flex-col w-[70%] my-4 ">
                        <div className="text-2xl" style={{ textAlign: "left" }}>
                            Past Incidents
                        </div>
                        {data.map((item: any, index: any) => {
                            const date = new Date(item.time);
                            // Format the date in "DD MMM YYYY" format
                            const formattedDate = date.toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                            });

                            return (
                                <div className="m-4">
                                    <h1 className="text-xl">
                                        {formattedDate}
                                    </h1>
                                    <hr />
                                    <div>{item.issueTitle}</div>
                                    <div>{item.issueDesc}</div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}