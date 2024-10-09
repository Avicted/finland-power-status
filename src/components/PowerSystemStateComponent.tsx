import { useEffect, useState } from "react"
import { ApiError } from "../types/Error"
import { PowerSystemState } from "../types/PowerSystemState"
import { PowerSystemStateApi, PowerSystemStateApiClient } from "../api/PowerSystemStateApiClient";
import { ResponseError } from "../../generated-api";

const ApiClient: PowerSystemStateApi = PowerSystemStateApiClient

export const PowerSystemStateComponent = () => {
    const [powerSystemState, setPowerSystemState] = useState<PowerSystemState | undefined>()
    const [error, setError] = useState<ApiError | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchPowerSystemData = async () => {
        console.log('fetchPowerSystemData')
        try {
            setError(undefined)
            setLoading(true)

            const res: PowerSystemState = await ApiClient.getPowerSystemState()
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
        // fetchPowerSystemData();
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
                <h2 className="text-white text-2xl font-bold">Power System State</h2>

                {powerSystemState && (
                    <>
                        <h2 className="text-white font-bold">Production:</h2>
                        <h3 className="text-white font-bold">{powerSystemState.Production}</h3>
                    </>
                )}
            </div>
        </>
    )
}