export async function fetchData(url){
    return fetch(url)
        .then( res => {
            if(res.ok){
                return res.json();
            }else{
                return Promise(new Error("error occured"))
            }
        });
}

export async function postData(url,data){
    const httpHeader = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }
    return fetch(url,httpHeader)
        .then( res => {
            if(res.ok){
                return res.json();
            }else{
                return Promise(new Error("error occured"))
            }
        });
}

export async function putData(url,data){
    const httpHeader = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }
    return fetch(url,httpHeader)
        .then( res => {
            if(res.ok){
                return res.json();
            }else{
                return Promise(new Error("error occured"))
            }
        });
}