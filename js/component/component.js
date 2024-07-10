export const postWithBearer = (target_url, token, datajson, responseFunction) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(datajson);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json()) // Ensure the response is parsed as JSON
        .then(result => responseFunction(result))
        .catch(error => console.log('error', error));
};
