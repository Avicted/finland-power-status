import { HealthCheck } from './components/HealthCheck'

function App() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-8xl">
                    <h1>Finland Power Status</h1>
                    <HealthCheck />
                </div>
            </div>

        </>
    )
}

export default App
