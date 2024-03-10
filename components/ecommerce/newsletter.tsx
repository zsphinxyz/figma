function NewsLetter() {
  return (
    <section className="max-w-7xl mx-auto py-5 px-3 relative z-10">
        <div className="px-2 py-8  sm:px-3 md:px-5 bg-black text-white rounded-md flex flex-col md:flex-row md:items-center shadow-lg shadow-esec">
            <h1 className="text-4xl basis-2/3 bloack md:text-6xl md:text-left font-extrabold text-white my-1 md:my-3 text-center md:leading-snug uppercase">stay upto date about our latest offers</h1>

            <div className="flex mt-5 flex-col px-5 gap-2 mx-auto basis-1/3 max-w-[400px]">
                <input type="email" placeholder='Enter your email address' className="py-3 rounded-full px-3"/>
                <button className="py-3 mt-2 bg-white text-black rounded-full">Subscribe to Newsletter</button>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter