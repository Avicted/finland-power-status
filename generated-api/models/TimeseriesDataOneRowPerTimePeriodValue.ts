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
 * @interface TimeseriesDataOneRowPerTimePeriodValue
 */
export interface TimeseriesDataOneRowPerTimePeriodValue {
}

/**
 * Check if a given object implements the TimeseriesDataOneRowPerTimePeriodValue interface.
 */
export function instanceOfTimeseriesDataOneRowPerTimePeriodValue(value: object): value is TimeseriesDataOneRowPerTimePeriodValue {
    return true;
}

export function TimeseriesDataOneRowPerTimePeriodValueFromJSON(json: any): TimeseriesDataOneRowPerTimePeriodValue {
    return TimeseriesDataOneRowPerTimePeriodValueFromJSONTyped(json, false);
}

export function TimeseriesDataOneRowPerTimePeriodValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeseriesDataOneRowPerTimePeriodValue {
    return json;
}

  export function TimeseriesDataOneRowPerTimePeriodValueToJSON(json: any): TimeseriesDataOneRowPerTimePeriodValue {
      return TimeseriesDataOneRowPerTimePeriodValueToJSONTyped(json, false);
  }

  export function TimeseriesDataOneRowPerTimePeriodValueToJSONTyped(value?: TimeseriesDataOneRowPerTimePeriodValue | null, ignoreDiscriminator: boolean = false): any {
    return value;
}

