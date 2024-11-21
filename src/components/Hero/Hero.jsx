import FallingWords from "../FallingWords/FallingWords";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row py-12 pl-6 pr-8">
        <div className="md:w-1/2 w-full">
            <h1 className="text-white text-3xl font-mont font-semibold leading-10 tracking-wider pb-3">
                Empowering African Innovation Through Technology
            </h1>
            <p className="text-textGray font-inter text-sm leading-6 pb-3">
                We empower African talent and businesses through technology, education, and innovation. Join us in transforming ideas into impactful solutions.
            </p>
            <button className="mt-6 bg-buttonBrown text-white font-semibold font-inter py-2 px-5 rounded-full">
                Let’s get started
            </button>
        </div>
        <div className="w-full md:w-1/2">
            <FallingWords />
        </div>
    </div>
  )
}

export default Hero;