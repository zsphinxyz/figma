
const Button = ({text, style}:{text:string, style?:string}) => {
  return (
    <button className={`px-4 py-1 bg-pop text-white rounded-full hover:text-pop hover:bg-PrimColor transition cursor-pointer ${style}`}>
        {text}
    </button>
  )
}

export default Button