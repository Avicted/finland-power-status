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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MonitoringAisErrorResult
 */
export interface MonitoringAisErrorResult {
    /**
     * 
     * @type {string}
     * @memberof MonitoringAisErrorResult
     */
    errorMessage: string;
    /**
     * 
     * @type {string}
     * @memberof MonitoringAisErrorResult
     */
    errorProcedure: string;
    /**
     * 
     * @type {string}
     * @memberof MonitoringAisErrorResult
     */
    userName: string;
    /**
     * 
     * @type {Date}
     * @memberof MonitoringAisErrorResult
     */
    errorDateTime: Date;
}

/**
 * Check if a given object implements the MonitoringAisErrorResult interface.
 */
export function instanceOfMonitoringAisErrorResult(value: object): value is MonitoringAisErrorResult {
    if (!('errorMessage' in value) || value['errorMessage'] === undefined) return false;
    if (!('errorProcedure' in value) || value['errorProcedure'] === undefined) return false;
    if (!('userName' in value) || value['userName'] === undefined) return false;
    if (!('errorDateTime' in value) || value['errorDateTime'] === undefined) return false;
    return true;
}

export function MonitoringAisErrorResultFromJSON(json: any): MonitoringAisErrorResult {
    return MonitoringAisErrorResultFromJSONTyped(json, false);
}

export function MonitoringAisErrorResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MonitoringAisErrorResult {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['ErrorMessage'],
        'errorProcedure': json['ErrorProcedure'],
        'userName': json['UserName'],
        'errorDateTime': (new Date(json['ErrorDateTime'])),
    };
}

  export function MonitoringAisErrorResultToJSON(json: any): MonitoringAisErrorResult {
      return MonitoringAisErrorResultToJSONTyped(json, false);
  }

  export function MonitoringAisErrorResultToJSONTyped(value?: MonitoringAisErrorResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ErrorMessage': value['errorMessage'],
        'ErrorProcedure': value['errorProcedure'],
        'UserName': value['userName'],
        'ErrorDateTime': ((value['errorDateTime']).toISOString()),
    };
}

