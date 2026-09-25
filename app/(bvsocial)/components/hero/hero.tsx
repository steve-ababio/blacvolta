export default function Hero(){
    return(
        <header className="relative h-screen flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/assets/images/bv-social/bv-social.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="z-[50]">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                <h1 className="text-4xl relative z-[1000] sm:text-5xl lg:text-8xl font-bold tracking-tight text-[white] leading-[1.1]">
                <img
                    src="/assets/images/bv-social/bv-social-logo.png"
                    alt=""
                    className="max-w-[800px] w-full h-full object-cover"
                />
                </h1>
            </div>
      </header>

    )
}