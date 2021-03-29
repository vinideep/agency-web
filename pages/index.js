import Head from "next/head";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const [blog1, setBlog1] = useState(false);
  const [blog2, setBlog2] = useState(false);
  const [blog3, setBlog3] = useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Head>
        <title>Agency-web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="background relative overflow-hidden bg-fixed bg-center bg-cover h-auto max-h-full">
          <div className="absolute -top-2/3 -left-24">
            <img
              className="pt-24"
              src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Ellipse-1.svg"
            />
          </div>
          <div className="absolute bottom-0 pb-3.5 -right-10 animate-fade-in-left">
            <img
              className="pb-3.5 md:hidden hidden lg:flex "
              src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Mask_Group_4.svg"
            />
          </div>
          <div className="absolute w-auto bottom-2 z-0 left-0 flex flex-wrap">
            <img
              className="lg:w-full h-auto bg-cover md:hidden hidden lg:flex"
              src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Clip-2.svg"
            />
          </div>
          <div className="bg-gray-200 flex m-auto ml-2">
            <div className="absolute bottom-4 right-1/2">
              <img
                src="/1287105.png"
                alt="drop symbol"
                className="animate-fade-in-down"
              />
            </div>
          </div>
          <div className="absolute flex justify-end bottom-0 right-0">
            <p>Follow Us</p>
            <img src="/facebook-24px.svg" alt="facebook" />
          </div>
          <nav
            id="header"
            className="absolute box-border w-full top-0 pt-4 text-white"
          >
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
              <div className=" flex items-center z-20">
                <img
                  className="toggleColour w-24 text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/11/logotype-1.svg"
                />
              </div>
              <div className="block lg:hidden pr-4 text-white">
                <button
                  id="nav-toggle"
                  className="flex items-center p-1 text-white focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  <svg
                    className="fill-current h-6 w-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
                <ul className="list-reset lg:flex justify-end flex-1 items-center text-white">
                  <li className="mr-3">
                    <a
                      className="inline-block text-white no-underline text-2xl py-2 px-4"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block text-white no-underline text-2xl py-2 px-4"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block text-white no-underline text-2xl py-2 px-4"
                      href="#"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block text-white no-underline text-2xl py-2 px-4"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
                <button
                  id="navAction"
                  className="mx-auto lg:mx-0 text-2xl border-4 border-white hover:bg-white text-white hover:text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-8 shadow duration-300"
                >
                  subscribe
                </button>
              </div>
            </div>
          </nav>
          <div className="absolute lg:top-72 md:top-64 top-40 md:left-20 lg:left-36 left-10  mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col pt-10 w-full z-20 items-start md:text-left text-white">
              <p className=" tracking-loose md:text-xl lg:text-3xl text-lg w-full font-normal">
                Apparently we had reache the sky
              </p>
              <h1 className="my-4 lg:text-8xl md:text-5xl sm:text-2xl text-5xl leading-tight font-thin">
                Years of{" "}
                <span className="lg:text-8xl md:text-5xl sm:text-2xl text-5xl font-extrabold">
                  {" "}
                  Experience{" "}
                </span>
                in
              </h1>
              <p className="leading-normal lg:text-8xl md:text-6xl sm:text-2xl text-5xl mb-8 font-thin">
                Building top Brands
              </p>
              <div className="flex w-full ml-0 pl-0 md:w-4/5 items-start text-center">
                <button className="ml-0 lg:mr-8 hover:bg-transparent border-4 border-white bg-white text-lg text-gray-800 hover:text-white font-bold rounded-full my-6 lg:py-3 lg:px-12 px-6 py-2 outline-none shadow-lg duration-300">
                  Get Started
                </button>
                <button className=" lg:mx-0 bg-transparent flex hover:bg-white border-4 border-white text-lg text-white hover:text-gray-800 font-bold rounded-full my-6 lg:py-3 lg:px-12 px-4 py-2 outline-none shadow-lg duration-300">
                  Play Video
                  <span className="w-6 ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="font-serif">
          <div className="mt-10 text-center">
            <h1 className="lg:text-5xl md:text-3xl text-4xl leading-relaxed  mb-10 font-extrabold tracking-wide">
              Some of the main services
            </h1>
            <p className="lg:text-2xl md:text-xl text-lg px-4 m-auto max-w-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.Lorem ipsum dolor sit amet,
              consectetur .
            </p>
          </div>
        </section>
        <section className="mt-20 px-8 flex items-center flex-wrap">
          <div className=" lg:flex md:flex sm:block block items-center sm:flex-wrap md:flex-nowrap">
            <div className="lg:w-1/2 lg:mx-20 md:mx-2 md:w-full relative z-10">
              <img
                src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Ellipse-1-copy-5.png"
                alt="laptop"
                className="md:full"
              />
            </div>
            <div className="lg:w-2/5 md:w-1/3 w-4/6 absolute z-0 md:mx-2 -mt-64 md:-mt-10 lg:mx-20 lg:-mt-10">
              <img
                src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Ellipse-1-copy-3.svg"
                alt="laptop"
                className="w-full sm:w-1/2 md:w-3/4"
              />
            </div>

            <div className=" lg:w-1/2 block lg:ml-20 mt-20">
              <div className="w-full lg:flex md:flex sm:block block lg:mb-20 ">
                <div className="lg:mr-10 w-full mb-20">
                  <img
                    className="m-auto lg:m-0"
                    src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/11/032-responsive-1.png"
                    alt="ux design"
                  />
                  <h1 className="lg:text-2xl md:text-xl text-gray-900 py-4">
                    Ui/Ux Design
                  </h1>
                  <p className="text-gray-500 text-left tracking-widest lg:text-lg md:text-md font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt{" "}
                  </p>
                </div>
                <div className="lg:mr-10 w-full mb-20">
                  <img
                    className="m-auto lg:m-0"
                    src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/11/001-tablet.png"
                    alt="ux design"
                  />
                  <h1 className="lg:text-2xl md:text-xl text-gray-900 py-4">
                    Mobile App Dev.
                  </h1>
                  <p className="text-gray-500 text-left tracking-widest lg:text-lg md:text-md  font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt{" "}
                  </p>
                </div>
              </div>
              <div className=" w-full lg:flex md:flex sm:block block mb-20 ">
                <div className="lg:mr-10 w-full mb-20">
                  <img
                    className="m-auto lg:m-0"
                    src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/012-vector.png"
                    alt="ux design"
                  />
                  <h1 className="lg:text-2xl md:text-xl  text-gray-900 py-4">
                    Branding
                  </h1>
                  <p className="text-gray-500 text-left tracking-widest lg:text-lg md:text-md font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt{" "}
                  </p>
                </div>
                <div className="lg:mr-10 w-full mb-20">
                  <img
                    className="m-auto lg:m-0"
                    src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/009-camera.png"
                    alt="ux design"
                  />
                  <h1 className="lg:text-2xl md:text-xl  text-gray-900 py-4">
                    Video & Motion
                  </h1>
                  <p className="text-gray-500 text-left tracking-widest lg:text-lg md:text-md font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 relative px-8 lg:flex md:flex block content-center items-center">
          <div className="absolute -bottom-44 -left-60 block text-center z-0">
            <img
              className="h-auto max-w-full w-1/2 z-0"
              src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/works.svg"
              alt="work"
            />
          </div>

          <div className="mb-6 lg:w-1/2 lg:ml-20 md:ml-0 mt-10 z-10">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold leading-10 mb-10 tracking-wide">
              Our Works
            </h1>
            <p className="text-gray-700 text-left lg:tracking-widest tracking-wide text-xl leading-relaxed font-light max-w-lg mb-10">
              There are many variations of passages of Lorem Ipsum available
              majority have suffered alteration some form by injected humour, or
              randomised .
            </p>

            <div className="mt-4 text-left">
              <button className="uppercase font-bold text-xl px-7 py-4 bg-gray-300 rounded-full flex items-center">
                Show All{" "}
                <span className="w-6 ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="w-full lg:flex block content-center items-center outline-none overflow-hidden">
            <div className="w-full mb-6 overflow-hidden ml-auto">
              <div className="outline-none ">
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={[
                    "tablet",
                    "mobile",
                    "superLargeDesktop",
                    "desktop",
                  ]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-80-px"
                >
                  <div>
                    <img
                      className="rounded-3xl"
                      src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/efe-kurnaz-RnCPiXixooY-unsplash.jpg"
                      alt="first"
                    />
                  </div>
                  <div>
                    <img
                      className="rounded-3xl"
                      src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Rounded-Rectangle-2-copy-7.png"
                      alt="first"
                    />
                  </div>
                  <div>
                    <img
                      className="rounded-3xl"
                      src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/efe-kurnaz-RnCPiXixooY-unsplash.jpg"
                      alt="first"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 relative lg:px-8 md:px-6 flex content-center items-center">
          <div className="m-auto">
            <h1 className="lg:text-5xl md:text-3xl text-4xl text-center font-extrabold">
              Blog & News
            </h1>
            <p className="lg:text-2xl md:text-2xl text-xl text-center text-gray-700 mt-6">
              It is a long established fact that a reader will be dis
            </p>
          </div>
        </section>

        <section className="mt-32 w-full relative flex content-center items-center box-border overflow-hidden">
          <div className=" w-full lg:flex lg:m-auto lg:mx-20 md:flex block mb-10 ml-8">
            <div
              onMouseLeave={() => {
                setBlog1(false);
              }}
              onMouseEnter={() => {
                setBlog1(true);
              }}
              className="block lg:w-2/5 mb-10 w-full lg:px-2 lg:py-20 lg:mr-10 bg-no-repeat m-auto bg-cover z-10 blog1 rounded-3xl md:w-3/5 md:mx-6 sm:w-4/5 lg:p-10 hover:text-white"
            >
              <p
                className={
                  blog1
                    ? "uppercase lg:text-lg md:text-md mb-4 mt-20 animate-fade-in-down "
                    : "uppercase lg:text-lg md:text-md mb-4"
                }
              >
                by paul . uncategorized
              </p>
              <h1
                className={
                  blog1
                    ? "lg:text-4xl md:text-xl leading-tight tracking-wide font-extrabold animate-fade-in-down"
                    : "lg:text-4xl md:text-xl leading-tight tracking-wide font-extrabold"
                }
              >
                Furniture Design & Contemporary Art
              </h1>
              <p
                className={
                  blog1
                    ? "hidden"
                    : "lg:text-xl md:text-md text-gray-700 mt-6 lg:pb-16 md:pb-6 tracking-wide lg:leading-loose"
                }
              >
                Mauris vehicula efficitur mi, vel sollicitudin lectus vulputate
                a. Phasellus vulputate nunc libero, eu faucibus sem...
              </p>
              <button className="uppercase font-bold lg:text-xl md:text-lg lg:mt-20 md:mt-6 mt-20  outline-none rounded-full py-4 lg:px-4 md:px-2 px-4 flex items-center bg-gray-300 lg:absolute top-2/3">
                Read More
                <span className="w-6 ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div
              onMouseLeave={() => {
                setBlog2(false);
              }}
              onMouseEnter={() => {
                setBlog2(true);
              }}
              className="block lg:w-2/5 w-full lg:px-2 lg:py-20 mb-10 bg-no-repeat m-auto bg-cover z-10 blog2 rounded-3xl md:w-3/5 sm:w-4/5 lg:p-10 md:mx-6 hover:text-white"
            >
              <p
                className={
                  blog2
                    ? "uppercase lg:text-lg md:text-md mb-4 mt-20 animate-fade-in-down "
                    : "uppercase lg:text-lg md:text-md mb-4"
                }
              >
                by paul . uncategorized
              </p>
              <h1
                className={
                  blog2
                    ? "lg:text-4xl md:text-xl leading-tight tracking-wide font-extrabold animate-fade-in-down"
                    : "lg:text-4xl md:text-xl leading-tight tracking-wide font-extrabold"
                }
              >
                Furniture Design & Contemporary Art
              </h1>
              <p
                className={
                  blog2
                    ? "hidden"
                    : "lg:text-xl md:text-md text-gray-700 mt-6 lg:pb-16 md:pb-6 tracking-wide lg:leading-loose"
                }
              >
                Mauris vehicula efficitur mi, vel sollicitudin lectus vulputate
                a. Phasellus vulputate nunc libero, eu faucibus sem...
              </p>
              <button className="uppercase font-bold lg:text-xl md:text-lg lg:mt-20 md:mt-6 mt-20  outline-none rounded-full py-4 lg:px-4 md:px-2 px-4 flex items-center bg-gray-300 lg:absolute top-2/3">
                Read More
                <span className="w-6 ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div
              onMouseLeave={() => {
                setBlog3(false);
              }}
              onMouseEnter={() => {
                setBlog3(true);
              }}
              className="block lg:w-2/5 w-full lg:px-2 lg:py-20 lg:mr-6 mb-10 bg-no-repeat m-auto bg-cover z-10 blog3 rounded-3xl md:w-3/5 sm:w-4/5 md:mx-6 lg:p-10 hover:text-white"
            >
              <p
                className={
                  blog3
                    ? "uppercase lg:text-lg md:text-md mb-4 mt-20 animate-fade-in-down "
                    : "uppercase lg:text-lg md:text-md mb-4"
                }
              >
                by paul . uncategorized
              </p>
              <h1
                className={
                  blog3
                    ? "lg:text-4xl md:text-xl leading-tight tracking-wide font-extrabold animate-fade-in-down"
                    : "lg:text-4xl md:text-xl leading-tight tracking-wide font-extrabold"
                }
              >
                Furniture Design & Contemporary Art
              </h1>
              <p
                className={
                  blog3
                    ? "hidden"
                    : "lg:text-xl md:text-md text-gray-700 mt-6 lg:pb-16 md:pb-6 tracking-wide lg:leading-loose"
                }
              >
                Mauris vehicula efficitur mi, vel sollicitudin lectus vulputate
                a. Phasellus vulputate nunc libero, eu faucibus sem...
              </p>
              <button className="uppercase font-bold lg:text-xl md:text-lg lg:mt-20 md:mt-6 mt-20  outline-none rounded-full py-4 lg:px-4 md:px-2 px-4 flex items-center bg-gray-300 lg:absolute lg:top-2/3">
                Read More
                <span className="w-6 ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="mt-20 relative px-8 flex content-center items-center box-border">
          <div className="lg:p-8 md:p-23 p-0  m-auto w-full">
            <div
              className="rounded-3xl shadow-2xl card "
              style={{ backgroundColor: "#2AAFEC" }}
            >
              <div className="p-8">
                <div className="mt-8  text-white">
                  <h1 className="font-bold text-2xl sm:text-center lg:text-left lg:text-6xl md:text-5xl mb-10">
                    Clients Testimonials
                  </h1>
                </div>
                <div className="sm:block sm:m-auto  lg:flex md:flex items-start lg:mt-20">
                  <div className="text-gray-100 mr-10 mt-10  mb-10 max-w-lg w-full sm:text-center">
                    <img
                      src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/Ellipse-1-copy-6.png"
                      alt="developer"
                      className="lg:mb-20 m-auto"
                    />
                    <div className="text-center w-full mt-10 mr-20">
                      <h1 className="lg:text-2xl md:text-xl sm:text-lg text-white font-bold tracking-wide mb-2  lg:pl-10">
                        Mark Johnson
                      </h1>
                      <h2 className="lg:text-2xl md:text-xl sm:text-lg  text-white tracking-wide lg:pl-10">
                        Web Developer
                      </h2>
                    </div>
                  </div>
                  <p className="mt-8  text-white lg:text-3xl md:text-xl sm:text-xl md:leading-normal lg:leading-loose tracking-wider">
                    Design is about creating spaces for people to enjoy and of
                    course, creating moments where you elevate the spirit, but
                    'design for good' is figuring out a program that not only
                    creates better spaces, but creates jobs, creates new
                    industry and really kind of raises the conversation about
                    how we rebuild.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* wave and search bar section */}
        <section className="mt-32 relative lg:px-4 flex items-center box-border wave-last">
          <div className="max-w-full lg:px-10 lg:w-full ">
            <div className="flex flex-wrap items-center mx-8 ">
              <div className="lg:ml-10 mr-auto mb-10">
                <h1
                  style={{ color: "#3796F0" }}
                  className="lg:text-5xl md:text-2xl text-3xl pb-4 font-extrabold "
                >
                  Don't Miss The Opportunity
                </h1>
                <h1 className="lg:text-5xl md:text-2xl text-3xl font-bold">
                  Contact Us Anytime
                </h1>
              </div>
              <div className="flex items-center content-center flex-wrap ">
                <input
                  className="relative rounded-full text-left font-bold leading-6 py-4 lg:px-24 px-6 tracking-wide outline-none "
                  placeholder="your e-mail address"
                  type="text"
                />
                <button
                  style={{
                    boxShadow: "-2.39px 6.58px 38px 0 rgb(239 74 138 / 73%)",
                    backgroundColor: "#F90084",
                  }}
                  className="absolute uppercase rounded-full text-white py-3 lg:px-6 px-6 lg:ml-72 ml-44 "
                >
                  Subscribe
                </button>
              </div>
            </div>
            {/* footer Container */}
            <div className="w-full max-w-screen-xl m-auto flex items-start mt-32 py-2">
              <div className="w-auto min-w-full lg:flex lg:justify-evenly lg:items-start lg:pl-0 pl-8 mt-2 lg:mt-0 text-black">
                {/* footer Logo */}
                <div className=" flex items-center mb-10 z-20 lg:pr-32">
                  <img
                    className="w-32 "
                    src="https://demo.phlox.pro/agency-web/wp-content/uploads/sites/129/2019/10/logotype.svg"
                  />
                </div>
                {/* footer Logo Ends */}
                {/* footer list Content */}
                <div className="flex-1 lg:flex md:flex lg:justify-evenly tracking-wider block items-start text-black leading-relaxed">
                  {/* first 2 list container */}
                  <ul className="flex flex-1 justify-evenly mr-10">
                    <li className="mr-3 lg:text-2xl text-lg font-bold  leading-loose w-full">
                      About Us
                      <ul className="lg:text-2xl text-lg w-full font-normal text-gray-700 lg:leading-loose leading-relaxed lg:mb-0 mb-4">
                        <li>Our Story</li>
                        <li>Benefits</li>
                        <li>FAQ</li>
                      </ul>
                    </li>
                    <li className="mr-3 lg:text-2xl text-lg font-bold  leading-loose w-full">
                      Legal
                      <ul className="lg:text-2xl text-lg font-normal  lg:leading-loose leading-relaxed text-gray-700">
                        <li className="leading-tight lg:leading-loose">
                          Terms & Conditions
                        </li>
                        <li>Privacy Policy</li>
                      </ul>
                    </li>
                  </ul>
                  {/* first 2 list container ends */}
                  {/* second 2 list container */}
                  <ul className="flex flex-1 justify-evenly">
                    <li className="mr-3 lg:text-2xl text-lg font-bold  leading-loose w-full">
                      Keep In Touch
                      <ul className="lg:text-2xl text-lg w-full font-normal text-gray-700 lg:leading-loose leading-relaxed lg:mb-0 mb-4">
                        <li>hello@phlox.pro</li>
                        <li>813-534-6365</li>
                      </ul>
                    </li>
                    <li className="mr-3 lg:text-2xl text-lg font-bold  leading-loose w-full">
                      Follow Us
                      <ul className="lg:text-2xl text-lg font-normal  lg:leading-loose leading-relaxed text-gray-700">
                        <li>Facebook</li>
                        <li>Twitter</li>
                      </ul>
                    </li>
                  </ul>
                  {/* second 2 list container Ends */}
                </div>
                {/* footer list content Ends */}
              </div>
            </div>
          </div>
        </section>
        <div className="fixed right-0 top-1/3 overflow-hidden">
          <div className="hello p-3 mb-2 rounded-l-xl">
            <a
              className="flex items-center"
              href="https://phlox.pro/go/?ref=averta"
              target="_blank"
            >
              <img
                className="px-4"
                src="https://demo.phlox.pro/agency-web/wp-content/plugins/demo-tools/public/assets/img/Group-3.svg"
              />
              <span className="text-xs text-white">Browse Demos</span>
            </a>
          </div>
          <div className="hello p-3 mb-2 rounded-l-xl">
            <a
              className="flex items-center"
              href="https://themeforest.net/item/lotus-flexible-multipurpose-responsive-wp-theme/3909293?ref=averta"
              target="_blank"
            >
              <img
                className="px-4"
                src="https://demo.phlox.pro/agency-web/wp-content/plugins/demo-tools/public/assets/img/buy.svg"
              />
              <span className="text-xs text-white">Buy Now!</span>
            </a>
          </div>
          <div className="hello p-3 mb-2 rounded-l-xl">
            <a className="flex items-center" href="#" target="_blank">
              <img
                className="px-4"
                src="https://demo.phlox.pro/agency-web/wp-content/plugins/demo-tools/public/assets/img/export.svg"
              />
              <span className="text-xs text-white">Export Section</span>
              <button className="hidden" type="button">
                <img src="https://demo.phlox.pro/agency-web/wp-content/plugins/demo-tools/public/assets/img/help-icon.svg" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
