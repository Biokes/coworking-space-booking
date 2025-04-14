
export default function Button({ text, color,styles }: {text:string, color:string, styles?:string}) {
  return (
      <button className={`cursor-pointer text-white rounded-[40px] text-nowrap ${styles} `} style={{backgroundColor:color,fontFamily:'Quicksand, sans-serif'}}>
          { text}
    </button>
  )
}
