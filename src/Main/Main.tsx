import { createSignal } from 'solid-js'
import './Main.css'

export const Main = () => {
    const [count, setCount] = createSignal(0)
    return (
        <>
            <div class="main-content">
                <p> Just a test</p>
            </div>
        </>
    )
}