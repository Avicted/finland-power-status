import { PowerSystemState } from "../types/PowerSystemState";

export class PowerSystemStateApi {
    async getPowerSystemState(): Promise<PowerSystemState> {
        const res = await fetch('/api/graph/power-system-state?language=en');
        console.log(res)
        return res.json()
    }
}

export const PowerSystemStateApiClient = new PowerSystemStateApi();
