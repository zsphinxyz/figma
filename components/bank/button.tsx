import Section from "./section"

const Button = ({text, style, animate}:{text:string, style?:string, animate?:boolean}) => {
  return (
    <Section animate={animate}>
      <button className={`px-4 py-1 bg-pop text-white rounded-full hover:text-pop hover:bg-PrimColor transition cursor-pointer ${style}`}>
          {text}
      </button>
    </Section>
  )
}

export default Button