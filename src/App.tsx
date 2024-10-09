import { HealthCheckComponent } from './components/HealthCheckComponent'
import { PowerSystemStateComponent } from './components/PowerSystemStateComponent'

function App() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-8xl">
                    <h1 className="text-white mt-8 mb-4 text-4xl font-bold text-center">Finland Electric System Status</h1>

                    <HealthCheckComponent />
                    <PowerSystemStateComponent />
                </div>
            </div>
        </>
    )
}

export default App
