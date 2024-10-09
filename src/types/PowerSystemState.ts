export interface PowerTransfer {
    Key: string;
    Value: number | null;
    MaxImport: number;
    MaxExport: number;
    IsExport: boolean;
}

export interface Temperatures {
    [city: string]: number;
}

export interface Urls {
    ConsumptionUrl: string | null;
    ProductionUrl: string | null;
    NetImportExportUrl: string | null;
    PowerTransferUrl: string | null;
    ProductionTypesUrl: string | null;
    PowerBalanceUrl: string | null;
    ElectricityPriceInFinlandUrl: string | null;
    LastOrderedUpRegulationBidUrl: string | null;
    LastOrderedDownRegulationBidUrl: string | null;
    PowerSystemStatusUrl: string | null;
    ShortagePageUrl: string | null;
    Co2InfoUrl: string | null;
}

export interface InfoTexts {
    ConsumptionInfo: string | null;
    ProductionInfo: string | null;
    ImportExportInfo: string | null;
    ElectricityPriceInfo: string | null;
    Co2Info: string | null;
    StatusInfo: string | null;
    ShortageInfo: string | null;
    PowerTransferInfo: string | null;
}

export interface PowerData {
    PowerTransferMap: PowerTransfer[];
    Temperatures: Temperatures;
    Urls: Urls;
    InfoTexts: InfoTexts;
    Consumption: number;
    Production: number;
    NetImportExport: number;
    HydroPower: number;
    NuclearPower: number;
    CogenerationDistrictHeating: number;
    CogenerationIndustry: number;
    WindPower: number;
    SolarPower: number;
    OtherProduction: number;
    PeakLoadPower: number;
    ProductionSurplusDeficit: number;
    ProductionSurplusDeficitCumulative: number;
    InstantaneousFrequency: number;
    TimeDeviation: number;
    KineticEnergyNordic: number;
    ElectricityPriceInFinland: number;
    LastOrderedUpRegulationBid: number | null;
    LastOrderedDownRegulationBid: number | null;
    ConsumptionEmissionCo2: number;
    ProductionEmissionCo2: number;
    Status: number;
    Shortage: number;
    LastModified: string;
}
