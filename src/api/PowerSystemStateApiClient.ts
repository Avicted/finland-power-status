// @Note(Victor): This is an undocumented used at: https://www.fingrid.fi/online
// https://www.fingrid.fi/api/graph/power-system-state?language=en

export class PowerSystemStateApiClient {
    getPowerSystemState = async () => {
        try {
            const res = await fetch('https://www.fingrid.fi/api/graph/power-system-state?language=en')
            return res.json()
        } catch (error) {
            console.error(error)
            return error;
        }
    }
}
