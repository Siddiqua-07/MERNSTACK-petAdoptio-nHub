import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const About = () => {
  return (
    <>
      <h1 className="font-medium text-center leading-tight text-5xl my-5 text-slate-700">
        Adopting One Life, Enriches Two!
      </h1>

      <div className="video-container">
        <video 
           className="w-full max-w-4xl mx-auto"
           autoPlay
           muted
           loop
           playsInline
        >
          <source src="../../../uploads/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bg-white py-4"></div>

      <section className="bg-teal-500 text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row">
          <img
            src="../../../uploads/getToKnow.png" // Replace this with your image URL
            alt="Pet Adoption"
            className="mb-4 w-full md:w-1/2 h-auto" // Adjusted width for responsiveness
          />

          <div className="w-full md:w-1/2 px-4">
            <h1 className="font-medium text-center text-5xl my-2 text-slate-700">
              Get to know us
            </h1>

            <p className=" my-4">
              We know pet adoption, because we're adopters too. We think it's just
              about the best thing you can do. But we'll be real: it can be a lengthy
              (paperwork-filled) process.
            </p>

            <p className=" my-4">
              So we're making it easier, with the tools, advice, and transparency you
              need—from the first search through to daily life as a pet parent.
            </p>

            <p className=" my-4">
              Because we'll do whatever it takes to help millions of people and pets
              find each other.
            </p>

            <p className=" my-4">
              Ready to find your pet? Let's do it.
            </p>
          </div>
        </div>
      </section>


      <section className="">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center lg:items-start lg:flex-wrap flex-col-reverse lg:flex-row h-full g-6 text-gray-800">
            <div className="flex flex-col mt-12 lg:mt-0 md:w-8/12 lg:w-6/12 mb-12 md:mb-0 justify-center">
              <div className="flex-row">
                <div className="flex flex-col sm:flex-row gap-5 bg-white border border-gray-200 rounded-lg shadow">
                  <div
                    className="w-full h-80 sm:h-auto sm:w-2/5 sm:shrink-0 lg:h-80 bg-cover bg-center"
                    style={{ backgroundImage: "url(/uploads/sid.jpg)" }}
                  ></div>
                  <div className="p-3">
                    <h2 className="mb-2 text-2xl font-bold mx-auto">
                      About the Admin
                    </h2>
                    <p className="my-2 mx-auto text-left">
                      Siddiqua Noorien is a student at Presidnency College, studying MCA.
                    </p>
                    <p className="my-2 mx-auto text-left">
                      Her intrest of study is web development,
                    </p>
                    <div className="flex flex-row py-2 gap-2">
                      <a
                        href="https://github.com/Siddiqua-07"
                        target="_blank"
                        title="Oxford Pet Dataset"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/siddiqua-noorien-2b015429a/"
                        target="_blank"
                        title="Oxford Pet Dataset"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      {/* <a href="">
                            linkedin.com/in/CaseyConlin
                        </a> */}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};
