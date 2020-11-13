import { ILIMSConfig } from "src/common/interfaces/lims.config";

export default function (): ILIMSConfig {
    return {
        LIMS_API_HOST: process.env.LIMS_API_HOST || 'http://localhost:3000',
        LIMS_API_TOKEN: process.env.LIMS_API_TOKEN || 'admin',
    };
};