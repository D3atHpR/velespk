import { Client } from 'whatsapp-web.js';

interface WaMainOptions {
    modules?: any;
    [key: string]: any;
}

interface WaMainResult {
    client: Client;
    clo<T extends(message: any)=>Promise<void> | void>(eventType: string, handler: T): void;
    [key: string]: any;
}

export function waMain(options: WaMainOptions): WaMainResult;