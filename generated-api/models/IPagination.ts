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
 * @interface IPagination
 */
export interface IPagination {
    /**
     * 
     * @type {number}
     * @memberof IPagination
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof IPagination
     */
    lastPage?: number;
    /**
     * 
     * @type {number}
     * @memberof IPagination
     */
    nextPage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof IPagination
     */
    prevPage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof IPagination
     */
    currentPage: number;
    /**
     * 
     * @type {number}
     * @memberof IPagination
     */
    perPage: number;
    /**
     * 
     * @type {number}
     * @memberof IPagination
     */
    from: number;
    /**
     * 
     * @type {number}
     * @memberof IPagination
     */
    to: number;
}

/**
 * Check if a given object implements the IPagination interface.
 */
export function instanceOfIPagination(value: object): value is IPagination {
    if (!('currentPage' in value) || value['currentPage'] === undefined) return false;
    if (!('perPage' in value) || value['perPage'] === undefined) return false;
    if (!('from' in value) || value['from'] === undefined) return false;
    if (!('to' in value) || value['to'] === undefined) return false;
    return true;
}

export function IPaginationFromJSON(json: any): IPagination {
    return IPaginationFromJSONTyped(json, false);
}

export function IPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IPagination {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'] == null ? undefined : json['total'],
        'lastPage': json['lastPage'] == null ? undefined : json['lastPage'],
        'nextPage': json['nextPage'] == null ? undefined : json['nextPage'],
        'prevPage': json['prevPage'] == null ? undefined : json['prevPage'],
        'currentPage': json['currentPage'],
        'perPage': json['perPage'],
        'from': json['from'],
        'to': json['to'],
    };
}

  export function IPaginationToJSON(json: any): IPagination {
      return IPaginationToJSONTyped(json, false);
  }

  export function IPaginationToJSONTyped(value?: IPagination | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'lastPage': value['lastPage'],
        'nextPage': value['nextPage'],
        'prevPage': value['prevPage'],
        'currentPage': value['currentPage'],
        'perPage': value['perPage'],
        'from': value['from'],
        'to': value['to'],
    };
}

