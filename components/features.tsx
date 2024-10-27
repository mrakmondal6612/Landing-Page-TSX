import Image from "next/image";
import ReactIcon from "@/public/images/react-icon.png";
import PhpIcon from "@/public/images/php-icon.png";
import PythonIcon from "@/public/images/python-icon.png";
import CppIcon from "@/public/images/cpp-icon.png";
import JavaIcon from "@/public/images/java-icon.png";
import ArrayImg from "@/public/images/array-img.png";
import TreeImg from "@/public/images/tree-img.png";
import GraphImg from "@/public/images/graph-img.png";
import NeetIcon from "@/public/images/neet-icon.png";
import StackQueue from "@/public/images/stack-queue.png";
import { CiWallet } from "react-icons/ci";
import { IoTrendingUpOutline } from "react-icons/io5";
import { PiCodeLight } from "react-icons/pi";
import { PiListChecksLight } from "react-icons/pi";
import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-4">
              Most <span style={{ color: "#9e48e9" }}>Populer</span> Courses
            </h2>
            <p className="text-xl text-gray-400">
              Explore from 2,769 online courses in 20 categories
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4rem",
              marginBottom: "2rem",
            }}
          >
            <div
            // className="relative inline-flex flex-col mb-4"
            >
              <Image
                className="rounded-full"
                src={ReactIcon}
                width={80}
                height={48}
                alt="React Icon"
              />
            </div>
            <div>
              <Image
                className="rounded"
                src={PhpIcon}
                width={80}
                height={50}
                alt="React Icon"
              />
            </div>
            <div>
              <Image
                src={PythonIcon}
                className="rounded"
                width={80}
                height={50}
                alt="React Icon"
              />
            </div>
            <div>
              <Image
                src={NeetIcon}
                className="rounded"
                width={150}
                height={50}
                alt="React Icon"
              />
            </div>
            <div>
              <Image
                src={CppIcon}
                className="rounded"
                width={140}
                height={50}
                alt="React Icon"
              />
            </div>

            <div>
              <Image
                src={JavaIcon}
                className="rounded"
                width={90}
                height={50}
                alt="React Icon"
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // gap: "4rem",
              marginBottom: "8rem",
              backgroundColor: "#1e1b4b#1e1b4b",
              padding: "0.2rem",
              marginLeft: "28rem",
              marginRight: "28rem",
              borderRadius: "8px",
              border: "1px solid #c026d3",
            }}
          >
            <a href="/signup">View All Courses</a>
          </div>
          <div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "800",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>
                Courses of <span style={{ color: "#6b21a8" }}>Data</span>{" "}
                <span style={{ color: "#a855f7" }}>Structure</span>
              </h1>
            </div>
            <div className="flex space-x-4 justify-center justify-items-center py-10">
              <div className="h-480 w-64 container px-1 rounded-md border-solid border-2 border-fuchsia-500 bg-purple-950">
                <div>
                  <Image
                    src={ArrayImg}
                    className="rounded-xl border-solid border-2 border-fuchsia-900 w-screen h-36"
                    alt="React Icon"
                  />
                </div>
                <div className="flex justify-center text-2xl font-bold py-1">
                  <h1>Array in DSA</h1>
                </div>
                <div className="flex justify-center justify-items-center text-sm font-extralight px-4">
                  <h1>
                    An array data structure is a fundamental concept in computer
                    science that stores a collection of elements in a contiguous
                    block of memory.
                  </h1>
                </div>
              </div>

              <div className="h-480 w-64 container mx-auto px-1 rounded-md border-solid border-2 border-fuchsia-500 bg-purple-950">
                <div>
                  <Image
                    src={TreeImg}
                    className="rounded-xl border-solid border-2 border-fuchsia-900 w-screen h-36"
                    alt="React Icon"
                  />
                </div>
                <div className="flex justify-center text-2xl font-bold py-1">
                  <h1>Tree in DSA</h1>
                </div>
                <div className="flex justify-center justify-items-center text-sm font-extralight px-4">
                  <h1>
                    Tree data structure is a specialized data structure to store
                    data in hierarchical manner. It is used to organize and
                    store data in the computer to be used more effectively.
                  </h1>
                </div>
              </div>

              <div className="h-480 w-64 container mx-auto px-1 rounded-md border-solid border-2 border-fuchsia-500 bg-purple-950">
                <div>
                  <Image
                    src={GraphImg}
                    className="rounded-xl border-solid border-2 border-fuchsia-900 w-screen h-36"
                    alt="React Icon"
                  />
                </div>
                <div className="flex justify-center text-2xl font-bold py-1">
                  <h1>Graph in DSA</h1>
                </div>
                <div className="flex justify-center justify-items-center text-sm font-extralight px-4">
                  <h1>
                    Graph Data Structure is a collection of nodes connected by
                    edges. It's used to represent relationships between
                    different entities.
                  </h1>
                </div>
              </div>

              <div className="h-480 w-64 container mx-auto px-1 rounded-md border-solid border-2 border-fuchsia-500 bg-purple-950">
                <div>
                  <Image
                    src={StackQueue}
                    className="rounded-xl border-solid border-2 border-fuchsia-900 w-screen h-36"
                    alt="React Icon"
                  />
                </div>
                <div className="flex justify-center text-2xl font-bold py-1">
                  <h1>Stack & Queue</h1>
                </div>
                <div className="flex justify-center justify-items-center text-sm font-extralight px-4">
                  <h1>
                    A stack is a linear data structure that follows the Last In,
                    First Out (LIFO) principle. A queue is a linear data
                    structure that follows the First In, First Out (FIFO)
                    principle.
                  </h1>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // gap: "4rem",
                marginBottom: "8rem",
                backgroundColor: "#1e1b4b#1e1b4b",
                padding: "0.2rem",
                marginLeft: "28rem",
                marginRight: "28rem",
                borderRadius: "8px",
                border: "1px solid #c026d3",
              }}
            >
              <a href="/signup">View All Courses</a>
            </div>
          </div>
          <div style={{ paddingBottom: "5rem" }}>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "800",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>
                How can we help your
                <span style={{ color: "#a21caf" }}> Business</span> ?
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-xl text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                pariatur...
              </p>
            </div>
            <div className="flex space-x-4 justify-center justify-items-center py-10">
              <div className="h-48 w-48 container px-1 rounded-md border-solid border-2 border-fuchsia-500 bg-purple-950">
                <div>
                  <PiListChecksLight
                    style={{
                      height: "70px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="flex justify-center justify-items-center text-sm font-bold py-1">
                  <h1>Business Idea planning</h1>
                </div>
                <div className="flex justify-center justify-items-center text-sm font-extralight px-4">
                  <h1>Here the section for Business Idea planning...</h1>
                </div>
              </div>

              <div className="h-48 w-48 container mx-auto px-1 rounded-md border-solid border-2 border-fuchsia-500 bg-purple-950">
                <div>
                  <IoTrendingUpOutline
                    style={{
                      height: "70px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="flex justify-center text-sm font-bold py-1">
                  <h1>Financial Management System</h1>
                </div>
                <div className="flex justify-center justify-items-center text-sm font-extralight px-4">
                  <h1>Here the section for Financial Management System...</h1>
                </div>
              </div>

              <div className="h-48 w-48 container mx-auto px-1 rounded-md border-solid border-2 border-fuchsia-500 bg-purple-950">
                <div>
                  <PiCodeLight
                    style={{
                      height: "70px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="flex justify-center text-sm font-bold py-1">
                  <h1>Development Website and App</h1>
                </div>
                <div className="flex justify-center justify-items-center text-sm font-extralight px-4">
                  <h1>Here the section for Development Website and App...</h1>
                </div>
              </div>

              <div className="h-48 w-48 container mx-auto px-1 rounded-md border-solid border-2 border-fuchsia-500 bg-purple-950">
                <div>
                  <CiWallet
                    style={{
                      height: "70px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="flex justify-center text-sm font-bold py-1">
                  <h1>Market Analysis Projects</h1>
                </div>
                <div className="flex justify-center justify-items-center text-sm font-extralight px-4">
                  <h1>Here the section for Market Analysis Projects...</h1>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                // justifyItems: "center",
                paddingTop: "5rem",
                gap: "1rem",
                paddingBottom: "3rem",
              }}
            >
              <div>
                <ModalVideo
                  thumb={VideoThumb}
                  thumbWidth={1080}
                  thumbHeight={1076}
                  thumbAlt="Modal video thumbnail"
                  video="/videos/video.mp4"
                  videoWidth={1920}
                  videoHeight={1080}
                />
              </div>
              <div>
                <div className="max-w-x mx-auto text-center pb-10 md:pb-10">
                  <h2 className="h3 mb-4">
                    Take the first step to{" "}
                    <span style={{ color: "#9e48e9" }}>knowledge</span> with
                    Coder's One Stop
                  </h2>
                  <p className="text-x text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Expedita ducimus, dolore facilis soluta accusantium fugiat,
                    vero corporis eaque in quis
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // gap: "4rem",
                      // marginBottom: "8rem",
                      backgroundColor: "#1e1b4b#1e1b4b",
                      padding: "0.5rem",
                      marginLeft: "9.5rem",
                      marginRight: "8rem",
                      borderRadius: "8px",
                      border: "1px solid #c026d3",
                    }}
                  >
                    <a href="/signup">Found Out More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-300"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-purple-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  className="stroke-current text-purple-100"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-300"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <ellipse
                    className="stroke-current text-purple-300"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M11 0v22M0 11h22"
                  />
                  <circle
                    className="stroke-current text-purple-100"
                    cx="11"
                    cy="11"
                    r="11"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(22 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-100"
                    d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
                  />
                  <circle
                    className="stroke-current text-purple-300"
                    cx="13"
                    cy="9"
                    r="3"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-100"
                    d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"
                  />
                  <path
                    className="stroke-current text-purple-300"
                    d="M22 30h4v12h-4z"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 22)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="stroke-current text-purple-300"
                    d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                  />
                  <circle
                    className="stroke-current text-purple-300"
                    cx="17"
                    cy="5"
                    r="3"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                  />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
