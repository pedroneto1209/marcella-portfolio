"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <p className="font-main pb-[120px] pt-[100px] px-8 font-regular text-[30px] md:text-[48px] text-gray-dark text-left">
        Hey, you!
        <br />
        Here&apos;s a little
        <br />
        more
      </p>
      <p className="font-main pb-[120px] px-8 font-bold text-[48px] md:text-[96px] text-brand text-right">
        ABOUT ME.
      </p>
      <div className="pb-[100px] px-8 ">
        <motion.div
          aria-current="page"
          className="relative"
          whileHover="hover"
          animate="rest"
        >
          <div style={{ width: "300px", height: "60px" }}></div>

          <div className="absolute top-3 left-4 w-full h-15  w-full h-15 flex space-x-10 items-center">
            <img src="/icons/arrow.svg" alt="Description" />
            <a className="font-main font-regular text-[25px] text-gray-dark">
              My Resume
            </a>
          </div>

          <motion.div
            className="absolute top-0 left-0 border border-gray-dark"
            style={{ originX: 0, height: "100%", borderRadius: "100px" }}
            initial={false}
            variants={{
              rest: {
                width: 60,
              },
              hover: {
                width: 300,
              },
            }}
          ></motion.div>
        </motion.div>
      </div>
      <div className="flex space-x-3 p-8 items-center justify-start">
        <span className="whitespace-nowrap font-main font-regular text-[20px] md:text-[25px] text-gray-dark">
          My Journey
        </span>
        <motion.div
          style={{
            width: useTransform(scrollYProgress, [0.85, 0.9], ["0%", "100%"]),
            originX: 0,
          }}
          className="h-px bg-gray-dark"
        ></motion.div>
      </div>
      <div className="flex justify-end pb-[100px] pt-[64px] px-8">
        <p className="font-main font-regular text-[20px] md:text-[25px] text-gray-dark text-left">
          I am a UX/UI Designer who values{" "}
          <span className="font-bold">
            efficiency, uniqueness, and creativity
          </span>
          , with an
          <br />
          approach that combines psychology and design to create impactful and
          <br />
          functional user experiences. My journey began at the end of my
          Psychology
          <br /> degree when I realized that conventional career paths in the
          field, such as clinical
          <br /> work or HR, no longer sparked my interest. It was then that I
          came across a course
          <br /> called "Psychology Applied to UX Design," which ignited a new
          passion in me:
          <br /> understanding users, their contexts, and needs, and translating
          that into strategic
          <br /> design.
          <br />
          <br /> With a degree in Psychology and a professional course in UX/UI
          Design, I decided
          <br /> to change careers, leaving my internship in School Psychology
          and diving <br />
          headfirst into the world of design. My path began with volunteer work,
          where I led
          <br /> the redesign process for a nonprofit's website, learning
          firsthand the importance
          <br /> of teamwork, strategic planning, and applying all the knowledge
          I had gained.
          <br /> These first steps opened doors to freelance work and eventually
          led to a position <br />
          at a tech company focused on payment gateways and sales.
        </p>
      </div>
      <p className="font-main pb-[100px] px-8 font-bold text-[30px] md:text-[64px] text-brandlight text-left">
        SO IN MY FIRST
        <br /> MONTH STUDYING <br />
        UX, I FELT IN LOVE
      </p>
      <div className="flex space-x-3 p-8 items-center justify-start">
        <span className="whitespace-nowrap font-main font-regular text-[20px] md:text-[25px] text-gray-dark">
          UX in My Life
        </span>
        <motion.div
          style={{
            width: useTransform(scrollYProgress, [0.85, 0.9], ["0%", "100%"]),
            originX: 0,
          }}
          className="h-px bg-gray-dark"
        ></motion.div>
      </div>
      <div className="flex justify-end pb-[100px] pt-[64px] px-8">
        <p className="font-main font-regular text-[20px] md:text-[25px] text-gray-dark text-left">
          For me, UX/UI Design is much more than just creating beautiful
          screens. My work
          <br /> is about thinking differently in a world where everything seems
          to be copied,
          <br /> seeking solutions that are not only aesthetically pleasing but
          also functional and
          <br /> usable. My decisions are always guided by{" "}
          <span className="font-bold">
            user needs, backed by research and
            <br /> methodologies
          </span>
          .
          <br />
          <br />I value three fundamental pillars:{" "}
          <span className="font-bold">
            communication, research, and
            <br />
            documentation
          </span>
          . I believe that good design is the result of a collaborative process,
          <br /> where feedback is essential, and continuous iterations ensure
          constant product
          <br /> improvement. I am always studying and staying updated, not only
          in UX but also
          <br /> in areas such as market trends, branding, and brand strategy. I
          have a special
          <br /> interest in technology, innovation, and especially education,
          believing that it is
          <br />
          through education that the foundations of a better society are built.
        </p>
      </div>
      <p className="font-main pb-[100px] px-8 font-bold text-[30px] md:text-[64px] text-brandlight text-left">
        THERE IS NO GOOD
        <br /> PROJECT WITHOUT <br />
        STUDY
      </p>
      <div className="flex space-x-3 p-8 items-center justify-start">
        <span className="whitespace-nowrap font-main font-regular text-[20px] md:text-[25px] text-gray-dark">
          Outside the Office
        </span>
        <motion.div
          style={{
            width: useTransform(scrollYProgress, [0.85, 0.9], ["0%", "100%"]),
            originX: 0,
          }}
          className="h-px bg-gray-dark"
        ></motion.div>
      </div>
      <div className="flex justify-end pb-[100px] pt-[64px] px-8">
        <p className="font-main font-regular text-[20px] md:text-[25px] text-gray-dark text-left">
          I’m Marcella, originally from Maceió, Brazil, a city known for having
          some of the
          <br /> most beautiful beaches in the world. Recently, I embraced an
          incredible <br />
          opportunity to move to Hamilton, Canada, where I’m continuing my
          journey in <br />
          UX/UI design.
          <br />
          <br /> My background in psychology, combined with my passion for art,
          led me to
          <br /> discover UX design during my studies. Halfway through my
          psychology degree, I <br />
          realized that traditional paths in the field didn’t resonate with me.
          That's when I<br /> found a way to merge my love for art with my
          understanding of human behavior, <br />
          diving into the world of UX. <br />
          <br />
          Outside of work, I’m an art lover who enjoys painting, reading, and
          staying <br />
          inspired through social media, where I follow key voices in the UX
          industry. I <br />
          actively participate in workshops and networking events to keep
          learning and <br />
          growing. My goal is to continue evolving in the field, explore diverse
          themes <br />
          through my projects, and maybe even teach one day. With the rise of
          <br /> technologies like AI, I believe UX has a bright future, and I’m
          excited to be part of <br />
          it.
        </p>
      </div>
      <div className="w-full h-px bg-gray-dark"></div>
      <div className="flex md:flex-row flex-col items-center justify-center">
        <div className="flex flex-col space-y-8 items-center flex-1 m-[88px]">
          <h1 className="font-main font-medium text-[48px] text-black text-center">
            Let’s make an authentic <br /> product together
          </h1>
          <motion.div
            aria-current="page"
            className="relative"
            whileHover="hover"
            animate="rest"
          >
            <div style={{ width: "236px", height: "60px" }}></div>

            <div className="absolute top-3 left-4 w-full h-15  w-full h-15 flex space-x-10 items-center">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                className="text-black"
              >
                <path
                  d="M13.7207 19.5211C13.5802 19.3804 13.5013 19.1898 13.5013 18.9911C13.5013 18.7923 13.5802 18.6017 13.7207 18.4611L21.4394 10.7411L1.25066 10.7411C1.05175 10.7411 0.860981 10.662 0.720329 10.5214C0.579678 10.3807 0.50066 10.19 0.50066 9.99106C0.50066 9.79214 0.579678 9.60138 0.720329 9.46073C0.860981 9.32008 1.05175 9.24106 1.25066 9.24106L21.4394 9.24106L13.7207 1.52106C13.5882 1.37888 13.5161 1.19084 13.5195 0.996535C13.5229 0.802234 13.6016 0.616848 13.739 0.479435C13.8765 0.342022 14.0618 0.263311 14.2561 0.259882C14.4504 0.256454 14.6385 0.328577 14.7807 0.461057L23.7807 9.46106C23.9211 9.60168 24 9.79231 24 9.99106C24 10.1898 23.9211 10.3804 23.7807 10.5211L14.7807 19.5211C14.64 19.6615 14.4494 19.7404 14.2507 19.7404C14.0519 19.7404 13.8613 19.6615 13.7207 19.5211Z"
                  fill="#484848"
                />
              </svg>
              <a className="font-main font-regular text-[25px] text-black">
                Email me!
              </a>
            </div>

            <motion.div
              className="absolute top-0 left-0 border border-black"
              style={{ originX: 0, height: "100%", borderRadius: "100px" }}
              initial={false}
              variants={{
                rest: {
                  width: 60,
                },
                hover: {
                  width: 236,
                },
              }}
            ></motion.div>
          </motion.div>
        </div>

        <div className="block md:hidden h-[1px] w-full bg-gray-dark"></div>
        <div className="flex-grow-0 flex-shrink-0 w-[1px] bg-gray-dark self-stretch"></div>

        <div className="flex flex-1 flex-col space-y-8 items-start w-full my-8">
          <h1 className="font-main font-medium text-[31px] text-black mx-8">
            My Work
          </h1>

          <div className="block h-[1px] w-full bg-gray-dark"></div>
          <h1 className="font-main font-medium text-[31px] text-black mx-8">
            About
          </h1>
          <div className="block h-[1px] w-full bg-gray-dark"></div>
          <h1 className="font-main font-medium text-[31px] text-black mx-8">
            Skills
          </h1>
          <div className="block h-[1px] w-full bg-gray-dark"></div>
          <h1 className="font-main font-medium text-[31px] text-black mx-8">
            Feedback
          </h1>
          <div className="block h-[1px] w-full bg-gray-dark"></div>
          <h1 className="font-main font-medium text-[31px] text-black mx-8">
            Contact
          </h1>
          <div className="block h-[1px] w-full bg-gray-dark"></div>

          <div className="flex space-x-4 mx-8">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9733 8.06372L23.2666 9.39705L15.9999 14.7971L8.73327 9.34372L7.0266 8.01039C6.62454 7.67778 6.13374 7.47044 5.61499 7.41405C5.09624 7.35767 4.57235 7.45471 4.10821 7.69317C3.64408 7.93162 3.2601 8.301 3.00386 8.75555C2.74761 9.2101 2.63035 9.72985 2.6666 10.2504V25.7037C2.6666 26.1846 2.85765 26.6459 3.19772 26.9859C3.53778 27.326 3.99901 27.5171 4.47994 27.5171H8.73327V17.2237L15.9999 22.6771L23.2666 17.2237V27.5171H27.5199C28.0009 27.5171 28.4621 27.326 28.8022 26.9859C29.1422 26.6459 29.3333 26.1846 29.3333 25.7037V10.2504C29.3583 9.73434 29.2329 9.22213 28.9723 8.77602C28.7117 8.32991 28.327 7.96912 27.8652 7.7375C27.4034 7.50587 26.8842 7.4134 26.3708 7.47131C25.8574 7.52923 25.3719 7.73504 24.9733 8.06372Z"
                fill="black"
              />
            </svg>

            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3333 4.84961C26.0406 4.84961 26.7189 5.13056 27.219 5.63066C27.719 6.13075 28 6.80903 28 7.51628V26.1829C28 26.8902 27.719 27.5685 27.219 28.0686C26.7189 28.5687 26.0406 28.8496 25.3333 28.8496H6.66667C5.95942 28.8496 5.28115 28.5687 4.78105 28.0686C4.28095 27.5685 4 26.8902 4 26.1829V7.51628C4 6.80903 4.28095 6.13075 4.78105 5.63066C5.28115 5.13056 5.95942 4.84961 6.66667 4.84961H25.3333ZM24.6667 25.5163V18.4496C24.6667 17.2968 24.2087 16.1912 23.3936 15.3761C22.5784 14.5609 21.4728 14.1029 20.32 14.1029C19.1867 14.1029 17.8667 14.7963 17.2267 15.8363V14.3563H13.5067V25.5163H17.2267V18.9429C17.2267 17.9163 18.0533 17.0763 19.08 17.0763C19.5751 17.0763 20.0499 17.2729 20.3999 17.623C20.75 17.9731 20.9467 18.4479 20.9467 18.9429V25.5163H24.6667ZM9.17333 12.2629C9.76742 12.2629 10.3372 12.0269 10.7573 11.6069C11.1773 11.1868 11.4133 10.617 11.4133 10.0229C11.4133 8.78294 10.4133 7.76961 9.17333 7.76961C8.57571 7.76961 8.00257 8.00701 7.57999 8.4296C7.1574 8.85218 6.92 9.42532 6.92 10.0229C6.92 11.2629 7.93333 12.2629 9.17333 12.2629ZM11.0267 25.5163V14.3563H7.33333V25.5163H11.0267Z"
                fill="black"
              />
            </svg>

            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5 4.34961H4.5C3.94687 4.34961 3.5 4.79648 3.5 5.34961V28.3496C3.5 28.9027 3.94687 29.3496 4.5 29.3496H27.5C28.0531 29.3496 28.5 28.9027 28.5 28.3496V5.34961C28.5 4.79648 28.0531 4.34961 27.5 4.34961ZM18.7031 11.8152H23.0281V12.8684H18.7031V11.8152ZM16 20.4996C15.7977 20.8836 15.5089 21.2153 15.1562 21.4684C14.7875 21.7246 14.3781 21.9121 13.9438 22.0215C13.4893 22.1433 13.0205 22.2032 12.55 22.1996H7.375V11.5402H12.4062C12.9156 11.5402 13.3781 11.5871 13.8 11.6746C14.2188 11.7621 14.575 11.9121 14.875 12.1152C15.1719 12.3184 15.4062 12.5902 15.5719 12.9277C15.7344 13.2621 15.8188 13.6809 15.8188 14.1777C15.8188 14.7152 15.6969 15.159 15.4531 15.5184C15.2063 15.8777 14.85 16.1684 14.3656 16.3965C15.025 16.584 15.5094 16.9184 15.8281 17.3871C16.1531 17.8621 16.3125 18.4309 16.3125 19.0996C16.3125 19.6434 16.2094 20.109 16 20.4996ZM24.7125 18.8496H19.1375C19.1375 19.4559 19.3469 20.0371 19.6625 20.3496C19.9813 20.659 20.4375 20.8152 21.0344 20.8152C21.4656 20.8152 21.8312 20.7059 22.1437 20.4902C22.4531 20.2746 22.6406 20.0465 22.7094 19.809H24.5781C24.2781 20.7371 23.8219 21.3996 23.2031 21.7996C22.5906 22.1996 21.8406 22.3996 20.9688 22.3996C20.3594 22.3996 19.8125 22.2996 19.3219 22.109C18.85 21.9246 18.425 21.6434 18.075 21.2809C17.7299 20.9086 17.4632 20.4708 17.2906 19.9934C17.1 19.4652 17.0063 18.909 17.0125 18.3496C17.0125 17.7715 17.1094 17.234 17.2969 16.734C17.6562 15.7621 18.4031 14.984 19.3563 14.5809C19.8656 14.3684 20.4125 14.2621 20.9656 14.2684C21.6219 14.2684 22.1906 14.3934 22.6844 14.6496C23.1597 14.8943 23.5724 15.245 23.8906 15.6746C24.2062 16.1027 24.4281 16.5902 24.5688 17.1402C24.7031 17.6809 24.75 18.2496 24.7125 18.8496ZM20.9 15.8621C20.5625 15.8621 20.2781 15.9215 20.0594 16.0371C19.8406 16.1527 19.6594 16.2965 19.5219 16.4621C19.3909 16.622 19.2941 16.8071 19.2375 17.0059C19.1875 17.1715 19.1531 17.3402 19.1406 17.5121H22.5938C22.5438 16.9715 22.3563 16.5715 22.1063 16.2902C21.8438 16.0121 21.4219 15.8621 20.9 15.8621ZM13.1344 15.5465C13.4062 15.3496 13.5375 15.0246 13.5375 14.5777C13.5469 14.3652 13.5031 14.1559 13.4094 13.9652C13.325 13.8121 13.2 13.684 13.0469 13.5934C12.8881 13.4971 12.7118 13.4333 12.5281 13.4059C12.3281 13.3684 12.125 13.3496 11.925 13.3527H9.72812V15.8434H12.1062C12.5156 15.8465 12.8625 15.7465 13.1344 15.5465ZM13.5031 17.7965C13.1969 17.5621 12.7875 17.4465 12.2781 17.4465H9.72188V20.384H12.2281C12.4625 20.384 12.6781 20.3621 12.8875 20.3184C13.0969 20.2746 13.2844 20.1996 13.4438 20.0934C13.6031 19.9902 13.7312 19.8496 13.8281 19.6684C13.9219 19.4871 13.9688 19.2559 13.9688 18.9777C13.9688 18.4246 13.8125 18.034 13.5031 17.7965Z"
                fill="black"
              />
            </svg>

            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_637_5296)">
                <path
                  d="M18.05 16.8496C18.05 21.8196 14.01 25.8496 9.024 25.8496C7.84053 25.8512 6.66833 25.6197 5.57434 25.1682C4.48035 24.7168 3.48599 24.0543 2.64804 23.2186C1.81008 22.3828 1.14494 21.3902 0.690588 20.2975C0.236237 19.2047 0.00157481 18.0331 0 16.8496C0 11.8776 4.04 7.84962 9.024 7.84962C10.2076 7.84778 11.3801 8.07913 12.4743 8.53045C13.5685 8.98177 14.5631 9.64422 15.4013 10.48C16.2394 11.3157 16.9047 12.3084 17.3592 13.4013C17.8137 14.4942 18.0484 15.666 18.05 16.8496ZM27.95 16.8496C27.95 21.5296 25.93 25.3216 23.438 25.3216C20.946 25.3216 18.926 21.5276 18.926 16.8496C18.926 12.1696 20.946 8.37762 23.438 8.37762C25.93 8.37762 27.95 12.1716 27.95 16.8496ZM32 16.8496C32 21.0416 31.29 24.4396 30.412 24.4396C29.536 24.4396 28.826 21.0396 28.826 16.8496C28.826 12.6576 29.536 9.25962 30.414 9.25962C31.29 9.25962 32 12.6576 32 16.8496Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_637_5296">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0 0.849609)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
