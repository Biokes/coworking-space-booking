import Hero from "./hero";
import svg1 from '../../assets/creative_dessign.svg';
import svg2 from '../../assets/endless_possibilities.svg';
import img1 from '/heroImageWithLady.png';
import img2 from '/heroImage_withGuy.png'
import '../../App.css'

export default function Homepage() {
    const svgData = [
        {
            svg: svg1,
            text: 'Creative design',
            desc: 'Natus error sit voluptatem accus antium doloremque.'
        }, {
            svg: svg2,
            text: 'Endless possibilities',
            desc: 'Sit voluptatem accus antium doloremque laudan.'
        },
    ]
    return (
        <div className={'w-full'} style={{ background: 'linear-gradient(to bottom, #e0e7ec 0%, white 5%, #e0e7ec 20%, white 45%, #e0e7ec 75%, white 95%, #e0e7ec 100%)' }}>
            <Hero />
            <div className='pt-[50px] px-[15px] flex flex-col md:flex-row md:justify-center items-center'>
                <section className='px-2 w-full md:w-[40%] imagePack'>
                    <div className=''>
                        <img src={img1} alt="" className='max-w-[65%]' />
                    </div>
                    <div className='w-[80%] justify-end flex '>
                        <img src={img2} alt="" className='max-w-[73%] m-[-46%_0_0_0]' />
                    </div>
                </section>
                <section style={{ fontFamily: 'DM sans, sans-serif' }} className={`heroIpad md:w-[65%] lg:w-[40%] flex justify-center items-center`}>
                    <div className='lg:w-[90%] w-full flex flex-col justify-center items-center px-[15px_10px] py-[30px] gap-[12px]'>
                        <figure className='px-2'>
                            <p className='uppercase md:text-[1.3rem] text-[#080236]'>creative agency</p>
                            <h5 className='text-[2rem] md:text-[3rem] text-[#080236] font-[700] -leading-[2px] md:-leading-[20px]  leading-[1] tracking-tighter pb-[20px]' style={{ fontFamily: 'Quicksand, sans-serif' }}>We help your business grow</h5>
                            <p className='text-gray-500 text-[16px]'>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        </figure>
                        <section className='gap-[10px] md:gap-[20px] flex flex-col pt-[7px] md:pt-[20px]'>
                            {
                                svgData.map((data, index) => (
                                    <figure className='flex gap-2 px-2' key={index}>
                                        <img src={data.svg} alt="" className={'h-[50px] w-[50px]'} />
                                        <div className='px-2 gap-1 flex flex-col '>
                                            <p className='text-[1.2rem] text-[#080236] font-[700]' style={{ fontFamily: 'Quicksand, sans-serif' }}>{data.text}</p>
                                            <p className='text-gray-500 text-[16px]'>{data.desc}</p>
                                        </div>
                                    </figure>
                                ))
                            }
                        </section>
                    </div>
                </section>
            </div>
            <div className='flex w-full h-full justify-center items-center py-[40px_20px]'>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full md:pt-[50px] gap-y-[25px] justify-center items-center parentNumber md:w-[80%]">
                    <article className="order-1 flex flex-col items-center justify-center w-full mx-auto text-center ">
                        <p>98</p>
                        <p>projects</p>
                    </article>

                    <article className="order-2 flex flex-col items-center justify-center w-full mx-auto text-center border-gray-300 sm:border-l md:border-1 md:border-[0_1px_0_1px]">
                        <p>65</p>
                        <p>people</p>
                    </article>

                    <article className="order-3 flex flex-col items-center justify-center w-full mx-auto text-center">
                        <p>10</p>
                        <p>years</p>
                    </article>

                    <article className="order-4 flex flex-col items-center justify-center w-full mx-auto text-center border-gray-300 sm:border-l md:border-l md:justify-start">
                        <p >15</p>
                        <p>offices</p>
                    </article>
                </section>
            </div>
            <section className='flex flex-col md:flex-row py-3 sm:px-[5%_10%] gap-[20px] sm:pt-[40px] w-full md:items-center justify-start '>
                <figure className='px-2 md:w-[100%]'>
                    <p className='uppercase md:text-[1rem] text-[#080236] font-semibold' style={{fontFamily:'DM sans, sans-serif'}}>creative solutions</p>
                    <h5 className='text-[2rem] md:text-[3rem] text-[#080236] font-[700] -leading-[2px] md:-leading-[20px]  leading-[1] tracking-tighter pb-[20px]' style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        We make unique & memorable brands
                    </h5>
                </figure>
                <section className='text-gray-500 text-[16px] gap-[10px] flex flex-col w-full sm:w-[]'>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque lorem in voluptate velit iusto odio dignissimos duci esse.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                    <button className='capitalize text-[#080236] cursor-pointer border-0 h-[45px] text-[14px] font-semibold readMoreButton'>
                        read more
                    </button>
                </section>
            </section>

        </div>
    )
}