import Button from "../commons/button";
import Navbar from "../commons/Navbar";
import '../../App.css';

export default function Hero() { 
    return (
        <main className={'homenav bg-norepeat bg-center bg-cover w-[100%] sm:h-[95vh] lg:h-[96vh] h-[400px] text-white items-center justify-center'}
            style={{ backgroundImage: 'url(/heroBg.webp)',fontFamily: 'Quicksand, sans-serif'}}>
            <Navbar />
            <section className='w-full h-full flex flex-col justify-center items-center gap-3 -mt-[35px]'>
                <h1 className={'font-[900] text-center text-[38px]  md:text-[4rem] lg:text-[5rem] w-[80%] md:w-[70%] -leading-[2px] md:-leading-[20px]  leading-[1.1] tracking-tighter pb-[20px]'}>Turning Creative Ideas into Success</h1>
                <p className='text-[0.95rem] sm:text-[1.4rem] px-5 text-center font-black  pb-[10px]' style={{ fontFamily: 'Quicksand, sans-serif' }}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt<br />dolore magna aliqua quis nostrud exerc.</p>
                <Button text='Discover Now' color={'#05bed6'} styles={'h-[45px] md:h-[70px] font-semibold text-[0.85rem] md:text-[1.2rem] w-[160px]'} />
            </section>
        </main>
    )
}   