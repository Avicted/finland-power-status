import { useEffect, useState } from "react"
import { HealthStatus, ResponseError } from "../../generated-api"
import { HealthCheckApiClient } from "../api/HealthCheckApiClient"
import { ApiError } from "../types/Error"

export const HealthCheckComponent = () => {
    const [healthStatus, setHealthStatus] = useState<HealthStatus | undefined>()
    const [error, setError] = useState<ApiError | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchHealthData = async () => {
        try {
            setError(undefined)
            setLoading(true)

            const res: HealthStatus = await HealthCheckApiClient.getHealthStatus()
            setHealthStatus(res)
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
        fetchHealthData();
    }, []) // Run once on mount

    const RenderSystemState = (systemName: string, systemStatus: string) => (
        <>
            {healthStatus !== undefined && (
                <div className="bg-gray-900 px-4 py-4 sm:px-6 lg:px-8">
                    <p className="text-xl font-bold leading-6 text-gray-400">{systemName}</p>
                    <p className="mt-2 flex flex-col items-baseline gap-x-2">
                        {healthStatus.app ? <span className="text-sm text-gray-400">Status</span> : null}
                        <span className="text-2xl font-semibold tracking-tight text-white">{systemStatus}</span>
                    </p>
                </div>
            )}
        </>
    )

    if (loading) return (
        <h2>Loading...</h2>
    )

    if (error) return (
        <p>{error.message}</p>
    )

    return (
        <>
            {healthStatus !== undefined && (
                <div className="bg-gray-900">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-1 lg:grid-cols-3">
                            {RenderSystemState('App', healthStatus.app.status)}
                            {RenderSystemState('Database', healthStatus.database.status)}
                            {RenderSystemState('Network', healthStatus.network.status)}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
