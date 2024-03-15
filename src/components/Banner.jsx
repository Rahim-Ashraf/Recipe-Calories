
const Banner = () => {
    return (
        <div>
            <div className="hero my-8 bg-[url(./assets/banner-bg.jpg)] rounded-xl">
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="m-4 lg:mx-16 lg:my-24">
                        <h1 className="mb-12 text-3xl lg:text-6xl font-bold leading-normal">
                            Discover an exceptional cooking <br />
                            class tailored for you!</h1>
                        <p className="mb-12 text-xl">Learn and Master Basic Programming, Data Structures, <br /> Algorithm, OOP, Database and solve 500+ codingproblems to become <br />
                            an exceptionally well world-class Programmer.</p>
                        <div className="flex justify-center gap-4">
                            <button className="btn rounded-full bg-[#0BE58A] border-none">Explore Now</button>
                            <button className="btn rounded-full bg-transparent text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;