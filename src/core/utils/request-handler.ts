import {HeaderData} from "../models/header-data";
import {HttpMethod} from "../models/enums";
import axios from "axios";

export class RequestHandler {


    private static sendRequest(url: string, method: HttpMethod, headerData?: HeaderData, data?: any) {
        const requestData = {url, headers: headerData?.getHeader(), method, data}
        return axios(requestData).then(res => {
            const {data, status, headers, config} = res
            return {
                data, status, headers, config
            }
        }).catch(err => {
            const {data, status, headers, config} = err
            return {
                data, status, headers, config
            }
        })
    }

    static sendGetRequest(url: string, headerData?: HeaderData) {
        return this.sendRequest(url, HttpMethod.GET, headerData)
    }


}