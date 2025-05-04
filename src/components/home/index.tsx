import Navbar from '../commons/Navbar'

import '../../App.css'
import BookPlan from './bookPlan'

export default function Homepage() {
    return (
        <main className='mb-[20px]'>
            <Navbar />
            {/* <Hero /> */}
            <div className='p-[20px] sm:p-[2%]'>
            <BookPlan />
            </div>
            
        </main>
    )
}