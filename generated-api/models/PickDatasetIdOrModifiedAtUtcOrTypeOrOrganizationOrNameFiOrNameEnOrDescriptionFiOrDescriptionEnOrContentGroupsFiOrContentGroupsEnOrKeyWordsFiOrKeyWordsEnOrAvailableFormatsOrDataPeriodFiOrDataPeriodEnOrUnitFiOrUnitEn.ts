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
import type { DatasetFormat } from './DatasetFormat';
import {
    DatasetFormatFromJSON,
    DatasetFormatFromJSONTyped,
    DatasetFormatToJSON,
    DatasetFormatToJSONTyped,
} from './DatasetFormat';
import type { DatasetType } from './DatasetType';
import {
    DatasetTypeFromJSON,
    DatasetTypeFromJSONTyped,
    DatasetTypeToJSON,
    DatasetTypeToJSONTyped,
} from './DatasetType';

/**
 * From T, pick a set of properties whose keys are in the union K
 * @export
 * @interface PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
 */
export interface PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn {
    /**
     * 
     * @type {number}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    modifiedAtUtc?: Date;
    /**
     * 
     * @type {DatasetType}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    type: DatasetType;
    /**
     * 
     * @type {string}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    organization: string;
    /**
     * 
     * @type {string}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    nameFi: string;
    /**
     * 
     * @type {string}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    nameEn: string;
    /**
     * 
     * @type {string}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    descriptionFi: string;
    /**
     * 
     * @type {string}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    descriptionEn: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    contentGroupsFi?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    contentGroupsEn?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    keyWordsFi?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    keyWordsEn?: Array<string>;
    /**
     * 
     * @type {Array<DatasetFormat>}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    availableFormats?: Array<DatasetFormat>;
    /**
     * 
     * @type {string}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    dataPeriodFi: string;
    /**
     * 
     * @type {string}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    dataPeriodEn: string;
    /**
     * 
     * @type {string}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    unitFi: string;
    /**
     * 
     * @type {string}
     * @memberof PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn
     */
    unitEn: string;
}



/**
 * Check if a given object implements the PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn interface.
 */
export function instanceOfPickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn(value: object): value is PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('organization' in value) || value['organization'] === undefined) return false;
    if (!('nameFi' in value) || value['nameFi'] === undefined) return false;
    if (!('nameEn' in value) || value['nameEn'] === undefined) return false;
    if (!('descriptionFi' in value) || value['descriptionFi'] === undefined) return false;
    if (!('descriptionEn' in value) || value['descriptionEn'] === undefined) return false;
    if (!('dataPeriodFi' in value) || value['dataPeriodFi'] === undefined) return false;
    if (!('dataPeriodEn' in value) || value['dataPeriodEn'] === undefined) return false;
    if (!('unitFi' in value) || value['unitFi'] === undefined) return false;
    if (!('unitEn' in value) || value['unitEn'] === undefined) return false;
    return true;
}

export function PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEnFromJSON(json: any): PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn {
    return PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEnFromJSONTyped(json, false);
}

export function PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEnFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'modifiedAtUtc': json['modifiedAtUtc'] == null ? undefined : (new Date(json['modifiedAtUtc'])),
        'type': DatasetTypeFromJSON(json['type']),
        'organization': json['organization'],
        'nameFi': json['nameFi'],
        'nameEn': json['nameEn'],
        'descriptionFi': json['descriptionFi'],
        'descriptionEn': json['descriptionEn'],
        'contentGroupsFi': json['contentGroupsFi'] == null ? undefined : json['contentGroupsFi'],
        'contentGroupsEn': json['contentGroupsEn'] == null ? undefined : json['contentGroupsEn'],
        'keyWordsFi': json['keyWordsFi'] == null ? undefined : json['keyWordsFi'],
        'keyWordsEn': json['keyWordsEn'] == null ? undefined : json['keyWordsEn'],
        'availableFormats': json['availableFormats'] == null ? undefined : ((json['availableFormats'] as Array<any>).map(DatasetFormatFromJSON)),
        'dataPeriodFi': json['dataPeriodFi'],
        'dataPeriodEn': json['dataPeriodEn'],
        'unitFi': json['unitFi'],
        'unitEn': json['unitEn'],
    };
}

  export function PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEnToJSON(json: any): PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn {
      return PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEnToJSONTyped(json, false);
  }

  export function PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEnToJSONTyped(value?: PickDatasetIdOrModifiedAtUtcOrTypeOrOrganizationOrNameFiOrNameEnOrDescriptionFiOrDescriptionEnOrContentGroupsFiOrContentGroupsEnOrKeyWordsFiOrKeyWordsEnOrAvailableFormatsOrDataPeriodFiOrDataPeriodEnOrUnitFiOrUnitEn | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'modifiedAtUtc': value['modifiedAtUtc'] == null ? undefined : ((value['modifiedAtUtc']).toISOString()),
        'type': DatasetTypeToJSON(value['type']),
        'organization': value['organization'],
        'nameFi': value['nameFi'],
        'nameEn': value['nameEn'],
        'descriptionFi': value['descriptionFi'],
        'descriptionEn': value['descriptionEn'],
        'contentGroupsFi': value['contentGroupsFi'],
        'contentGroupsEn': value['contentGroupsEn'],
        'keyWordsFi': value['keyWordsFi'],
        'keyWordsEn': value['keyWordsEn'],
        'availableFormats': value['availableFormats'] == null ? undefined : ((value['availableFormats'] as Array<any>).map(DatasetFormatToJSON)),
        'dataPeriodFi': value['dataPeriodFi'],
        'dataPeriodEn': value['dataPeriodEn'],
        'unitFi': value['unitFi'],
        'unitEn': value['unitEn'],
    };
}

