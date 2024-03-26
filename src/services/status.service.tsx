const baseUrl = "http://localhost:8800/api/";

export const saveStatus = async (issueTitle:string,issueDesc:string,issueType:string) => {
    const dataToSend = {
        issueType: issueType,
        issueDesc: issueDesc,
        issueTitle: issueTitle,
    };
    console.log(dataToSend)
    return await fetch(`${baseUrl}saveStatus`, {
        headers: {
            "Content-Type": "application/json",
            "X-Firebase-AppCheck": "appCheckTokenResponse.token",
        },
        method: "POST",
        body: JSON.stringify(dataToSend),
    }).then((resp) => resp.json());
};
export const fetchStatus = async () => {
    return await fetch(`${baseUrl}fetchStatus`, {
        method: "GET",
    }).then((resp) => resp.json());
};