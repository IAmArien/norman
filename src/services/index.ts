export interface ResponseWrapper<T> {
    success: boolean;
    data?: T | null;
    errorMessage?: string | null;
};

export const createSuccessResponse = <T>(data: T): ResponseWrapper<T> => {
    return { success: true, data: data, errorMessage: null };
};

export const createFailureResponse = <T>(errorMessage: string): ResponseWrapper<T> => {
    return { success: false, data: null, errorMessage: errorMessage };
};

export * from './contact/ContactUsService';