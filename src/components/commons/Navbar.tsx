import '../../App.css'
export default function Navbar() {
  return (
    <nav className='bg-gray-800 flex justify-between items-center px-3'>
      <h5 className='italic cursor-pointer'>Booker</h5>
      <button href="#booking" className="px-[10px] text-gray-500">Book now</button>
    </nav>
  )
}
