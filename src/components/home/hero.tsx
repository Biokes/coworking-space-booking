import '../../App.css';

export default function Hero() { 
    return (
        <main className={'h-[400px] text-white items-center justify-center w-full'}>
            <section className='flex flex-col justify-start items-start px-[10%] sm:px-[7%] gap-1 w-full'>
                <h6>
                    Book your ideal workspace
                </h6>
                <p className='sm:w-[60%] -mt-[20px]'>
                    Choose from our range of individual and team collaboration spaces. Select a desk, choose your membership tier, and book your perfect workspace.
                </p>    
            </section>
        </main>
    )
}   