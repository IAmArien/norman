import axios, { isAxiosError } from "axios";
import { ResponseWrapper, createFailureResponse, createSuccessResponse } from ".."

export type ContactUsFields = {
    name: string,
    email: string,
    subject: string,
    intent: string
}

interface ContactUsResponse {
    status?: number | null;
    message?: string | null;
    data?: ContactUsResponseData | null;
}

interface ContactUsResponseData {
    description?: string | null;
    messageId?: string | null;
    preview?: any | null;
}

export const postContactUsFieldsAsync = async (fields: ContactUsFields): Promise<ResponseWrapper<ContactUsResponse>> => {
    try {
        const response = await axios.post(
            "http://localhost:9009/contact?crt=200120241953",
            {
                name: fields.name,
                email: fields.email,
                subject: fields.subject,
                intent: fields.intent
            },
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return createSuccessResponse<ContactUsResponse>(response.data);
    } catch(error) {
        if (isAxiosError(error)) {
            return createFailureResponse(`Failed to make API request: ${error.response?.status} - ${error.response?.data?.message}`);
        } else {
            return createFailureResponse(`Failed to make API request: Unknown error`);
        }
    }
};