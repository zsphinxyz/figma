export default function scroll({header, children}: {header:string, children: React.ReactNode}) {
    return(
        <section className="px-2 md:px-5 max-w-monitor mx-auto">
            <h1 className="eheader my-5 md:mt-16 md:mb-10">{header}</h1>
            <div className="flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden p-5 lg:p-0 max-w-monitor mx-auto">
                {children}
            </div>
            <button className="mx-auto w-full ring-1 font-medium md:w-[240px] block select-none hover:bg-esec/20 transition-all ring-esec text-xl py-3 mt-3 md:mt-10 rounded-full">View All</button>
        </section>
    )
}