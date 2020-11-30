import { hostname } from 'os';
import { format } from 'winston';

const hostMeta = format((info, _opts) => Object.assign({}, info, { context: { host: hostname() } }));

export function defaultLogFormat(): any  {
    return format.combine(format.json(), format.timestamp(), hostMeta()); 
}