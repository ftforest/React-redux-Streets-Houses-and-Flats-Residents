import axios from "axios";
import {api, BearerToken} from "../constants";
import {useState} from "react";

export async function client(endpoint:string, metod:string, postData:any = {}) {


    let formData = new FormData();

    // Adding files to the formdata
    Object.keys(postData).map((key:any) => {
        formData.append(key, postData[key])
    })

    console.log(api + endpoint,'api + endpoint')
    let data :any = []
    //return new Promise((resolve, reject) => {
    await axios({

        // Endpoint to send files
        url: api + endpoint,
        method: metod,
        headers: {
            'Content-Type': 'application/json',
            // Add any auth token here
            'Authorization': BearerToken,
        },

        // Attaching the form data
        data: formData,
    })
    .then((res) => {
        data = res.data;
        })
    .catch((err) => { });

    return data

}
