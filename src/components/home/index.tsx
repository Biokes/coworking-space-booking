import Navbar from '../commons/Navbar'

import '../../App.css'
import Hero from './hero'
import BookPlan from './bookPlan'

export default function Homepage() {
    return (
        <main>
            <Navbar />
            <Hero />
            <BookPlan />
        </main>
    )
}