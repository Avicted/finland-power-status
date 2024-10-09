/* tslint:disable */
/* eslint-disable */
/**
 * avoindata-api
 * API for Fingrid Open Data
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Notification,
} from '../models/index';
import {
    NotificationFromJSON,
    NotificationToJSON,
} from '../models/index';

/**
 * 
 */
export class NotificationsApi extends runtime.BaseAPI {

    /**
     * Return list of active service notification or empty response
     * GetActiveNotifications
     */
    async getActiveNotificationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Notification>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKeyQuery authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // apiKeyHeader authentication
        }

        const response = await this.request({
            path: `/notifications/active`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NotificationFromJSON));
    }

    /**
     * Return list of active service notification or empty response
     * GetActiveNotifications
     */
    async getActiveNotifications(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Notification>> {
        const response = await this.getActiveNotificationsRaw(initOverrides);
        return await response.value();
    }

}
