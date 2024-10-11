import { BaseAPI, Configuration, ConfigurationParameters } from "../../generated-api";
import * as runtime from '../../generated-api/runtime'
import { PowerSystemState } from "../types/PowerSystemState";

class PowerSystemStateApi extends BaseAPI {
    async getPowerSystemStateRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PowerSystemState>> {
        console.log('getPowerSystemStateRaw')

        const queryParameters: any = {};
        const headerParameters: runtime.HTTPHeaders = {};

        // @Note(Victor): Not really needed for this endpoint, but we pass it to identify ourselves
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key");
        }

        const response = await this.request({
            path: `/power-system-state?language=en`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue)
    }

    /**
     * Returns Power System data
     * GetPowerSystemState
     */
    async getPowerSystemState(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PowerSystemState> {
        console.log('getPowerSystemState')
        const response = await this.getPowerSystemStateRaw(initOverrides)
        return await response.value();
    }
}


interface PowerSystemStateApiConfigurationParameters extends ConfigurationParameters {
    "x-api-key": string
}

class PowerSystemStateApiClientConfiguration extends Configuration {
    constructor(configuration: PowerSystemStateApiConfigurationParameters = {
        "x-api-key": import.meta.env.API_KEY,
        basePath: '/api/graph',
    }) {
        super(configuration)
    }
}

const powerSystemStateApiClientConfig = new PowerSystemStateApiClientConfiguration();

export const PowerSystemApiClient: PowerSystemStateApi = new PowerSystemStateApi(powerSystemStateApiClientConfig)

