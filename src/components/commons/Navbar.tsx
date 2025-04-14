import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";


export default function Navbar() {
  return (
    <nav className='flex bg-norepeat bg-center bg-cover w-screen sm:h-screen h-[350px] sm:scale-0 ' style={{backgroundImage:'url(/heroBg.webp)'}}>
      <header className='flex justify-between pt-2 w-full'>
        <img src="/public/logo.webp" alt="" className={'h-[38px] w-[158px]'} />
        <section className={'flex gap-2 pt-2'}>
          <IoSearch color={'white'} className='cursor-pointer w-[24px] h-[24px]'/>
          <RxHamburgerMenu color={'white'} className='cursor-pointer w-[27px] h-[24px]'/>
        </section>
      </header>
      </nav>
  )
}
