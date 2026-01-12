
export default function Cover({text}: {text:string}) {
  return (
    <div className={`flex items-center justify-center flex-col gap-3 [background-image:linear-gradient(#00000066,#000000aa),_url('/schoolCover.png')] w-full h-52 bg-cover bg-right`}>
        <h1 className="uppercase text-5xl text-white font-medium">{text}</h1>
        <p className="text-white"> <span className="text-white/70">Home</span> {'→'} {text} </p>
      </div>
  )
}
