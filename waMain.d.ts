import { Client } from 'whatsapp-web.js';

interface WaMainOptions {
    modules?: any;
    [key: string]: any;
}

interface WaMainResult {
    client: Client;
    [key: string]: any;
}

export function waMain(options: WaMainOptions): WaMainResult;