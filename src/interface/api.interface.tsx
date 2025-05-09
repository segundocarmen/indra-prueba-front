/* eslint-disable @typescript-eslint/no-explicit-any */

export interface RequestInterface {
    path: string;
    method: string;
    data?: any;
}

export interface ResponseInterface {
    data: any;
}
