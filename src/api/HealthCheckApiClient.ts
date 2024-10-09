import { HealthcheckApi } from "../../generated-api";
import { Configuration, ConfigurationParameters } from "../../generated-api/runtime"

interface FingridAuthConfigurationParameters extends ConfigurationParameters {
    "x-api-key": string
}

class HealthCheckApiClientConfiguration extends Configuration {
    constructor(configuration: FingridAuthConfigurationParameters = {
        "x-api-key": import.meta.env.API_KEY,
        basePath: '/api', // Ensure this is set to the proxy path
    }) {
        super(configuration);
    }
}

const healthCheckApiClientConfig = new HealthCheckApiClientConfiguration();

export const HealthCheckApiClient: HealthcheckApi = new HealthcheckApi(healthCheckApiClientConfig);