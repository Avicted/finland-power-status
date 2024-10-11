import { useEffect, useState } from "react"
import { ApiError } from "../types/Error"
import { PowerSystemState } from "../types/PowerSystemState"
import { ResponseError } from "../../generated-api";
import { PowerSystemApiClient } from "../api/PowerSystemStateApiClient";
import MapImage from '../assets/map_inverted.png'

export const PowerSystemStateComponent = () => {
    const [powerSystemState, setPowerSystemState] = useState<PowerSystemState | undefined>()
    const [error, setError] = useState<ApiError | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchPowerSystemData = async () => {
        console.log('fetchPowerSystemData')

        try {
            setError(undefined)
            setLoading(true)

            const res: PowerSystemState = await PowerSystemApiClient.getPowerSystemState()
            setPowerSystemState(res)
        } catch (error: any) {
            if (error instanceof ResponseError) {
                const statusCode = error.response?.status;
                let message = 'An error occurred';

                switch (statusCode) {
                    case 429:
                        message = 'Too Many Requests: Rate limiting in effect. Please try again later.';
                        break;
                    case 404:
                        message = 'Resource not found.';
                        break;
                    case 500:
                        message = 'Internal Server Error. Please try again later.';
                        break;
                    default:
                        message = `Error ${statusCode}: ${error.message}`;
                }

                setError({ statusCode, message });
            } else {
                setError({ statusCode: 0, message: 'An unexpected error occurred' });
            }
            console.error(error);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log('Rendering PowerSystemStateComponent');
        fetchPowerSystemData();
    }, []) // Run once on mount

    if (loading) return (
        <h2>Loading...</h2>
    )

    if (error) return (
        <p>{error.message}</p>
    )

    return (
        <>
            <div className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8 mt-8">
                <h2 className="text-white text-2xl font-bold mb-4">Power System State</h2>

                {powerSystemState && (
                    <>
                        <div className="flex flex-row gap-10 justify-between">
                            <div className="flex flex-col">
                                <h2 className="text-white font-bold text-slate-400">Consumption:</h2>
                                <h1 className="text-white font-bold text-4xl">{powerSystemState.Consumption} <span className="text-lg">MW</span></h1>
                            </div>

                            <div className="flex flex-col">
                                <h2 className="text-white font-bold text-slate-400">Total Production:</h2>
                                <h1 className="text-white font-bold text-4xl">{powerSystemState.Production} <span className="text-lg">MW</span></h1>
                            </div>

                            <div className="flex flex-col">
                                <h2 className="text-white font-bold text-slate-400">Electricity price in Finland:</h2>
                                <h1 className="text-white font-bold text-4xl">{powerSystemState.ElectricityPriceInFinland} <span className="text-lg">€/MWh</span></h1>
                            </div>

                            <div className="flex flex-col">
                                <h2 className="text-white font-bold text-slate-400">CO₂ emission estimate for consumed electricity:</h2>
                                <h1 className="text-white font-bold text-4xl">{powerSystemState.ConsumptionEmissionCo2} <span className="text-lg">gCO2/kWh</span></h1>
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-3 gap-x-8 sm:grid-cols-1 lg:grid-cols-3">
                            <div className="">
                                <h2 className="text-white font-bold text-slate-400">Production:</h2>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Hydro power</p>
                                    <p className="text-white font-bold">{powerSystemState.HydroPower} <span className="text-sm">MW</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Nuclear power</p>
                                    <p className="text-white font-bold">{powerSystemState.NuclearPower} <span className="text-sm">MW</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Cogeneration (District Heating)</p>
                                    <p className="text-white font-bold">{powerSystemState.CogenerationDistrictHeating} <span className="text-sm">MW</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Cogeneration (Industry)</p>
                                    <p className="text-white font-bold">{powerSystemState.CogenerationIndustry} <span className="text-sm">MW</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Wind Power</p>
                                    <p className="text-white font-bold">{powerSystemState.WindPower} <span className="text-sm">MW</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Solar Power</p>
                                    <p className="text-white font-bold">{powerSystemState.SolarPower} <span className="text-sm">MW</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Other Production</p>
                                    <p className="text-white font-bold">{powerSystemState.OtherProduction} <span className="text-sm">MW</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Imports - Exports + net.</p>
                                    <p className="text-white font-bold">{powerSystemState.NetImportExport} <span className="text-sm">MW</span></p>
                                </div>
                            </div>
                            <div className="text-white">
                                <h2 className="text-white font-bold text-slate-400">Efficiency balance:</h2>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Prod. Surplus Deficit</p>
                                    <p className="text-white font-bold">{powerSystemState.ProductionSurplusDeficit} <span className="text-sm">MW</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Prod. Surplus Deficit (cum. tot.)</p>
                                    <p className="text-white font-bold">{powerSystemState.ProductionSurplusDeficit} <span className="text-sm">MW</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Instantaneous frequency measurement</p>
                                    <p className="text-white font-bold">{powerSystemState.InstantaneousFrequency} <span className="text-sm">Hz</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Time deviation in the electrical grid</p>
                                    <p className="text-white font-bold">{powerSystemState.TimeDeviation} <span className="text-sm">s</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Inertia</p>
                                    <p className="text-white font-bold">{powerSystemState.KineticEnergyNordic} <span className="text-sm">GWs</span></p>
                                </div>
                            </div>
                            <div className="text-white">
                                <h2 className="text-white font-bold text-slate-400">Temperatures:</h2>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Rovaniemi</p>
                                    <p className="text-white font-bold">{powerSystemState.Temperatures['Rovaniemi']} <span className="text-sm">°C</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Oulu</p>
                                    <p className="text-white font-bold">{powerSystemState.Temperatures['Oulu']} <span className="text-sm">°C</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Jyväskylä</p>
                                    <p className="text-white font-bold">{powerSystemState.Temperatures['Jyväskylä']} <span className="text-sm">°C</span></p>
                                </div>

                                <div className="text-md flex justify-between">
                                    <p className="text-slate-400 font-bold">Helsinki</p>
                                    <p className="text-white font-bold">{powerSystemState.Temperatures['Helsinki']} <span className="text-sm">°C</span></p>
                                </div>
                            </div>
                        </div>
                        {/*<div className="mt-24">
                            <img
                                alt="Map of Finland"
                                src={MapImage}
                                className="object-cover object-center group-hover:opacity-75"
                            />
                        </div>*/}
                    </>
                )}
            </div>
        </>
    )
}