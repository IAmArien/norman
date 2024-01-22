import axios, { AxiosResponse } from "axios"

export const postDownloadCVAsync = async (): Promise<AxiosResponse<any, any>> => {
    const response = await axios.post("http://localhost:9009/download/cv", {
        responseType: "blob"
    });
    return response;
};