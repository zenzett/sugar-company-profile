import {
  BsArrowRight,
  BsArrowLeft,
  BsFillRecordFill,
  BsFillRecordCircleFill,
} from "react-icons/bs";

import Layout from "components/Layout";
import company from "assets/company-logo-white.png";
import accessories from "assets/accessories.svg";
import logo from "assets/sugar-logo-white.png";
import corevalues from "assets/corevalues.png";
import building from "assets/building.svg";
import exhaust from "assets/exhaust.svg";
import right from "assets/bg-right.svg";
import left from "assets/bg-left.svg";
import speed from "assets/speed.svg";
import arrow from "assets/arrow.png";

function App() {
  return (
    <Layout>
      <div className="flex flex-col">
        <img
          src={building}
          alt="building"
          className="mb-[-3rem] lg:mb-[-11rem]"
        />
        <img src={right} alt="right" className="mb-[-21rem] lg:mb-[-72rem]" />
        <img src={left} alt="left" className="mb-[-16rem] lg:mb-[-55rem]" />
        <div className="px-8 text-white mb-16 lg:mb-48">
          <p className="text-4xl font-bold w-56 lg:w-full lg:text-6xl">
            Discover Your Wonder
          </p>
          <p className="w-full mt-4 lg:text-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <img
          src={arrow}
          alt="arrow"
          className="h-10 w-10 rounded-full self-center bg-white p-2 mt-[-1.25rem]"
        />
      </div>

      <div className="bg-white px-10 py-8 h-screen">
        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item relative w-full flex flex-col"
          >
            <div className="h-72">
              <p className="text-blue01 text-3xl lg:text-6xl font-bold">
                Who we are
              </p>
              <p className="pt-4 pb-2 font-bold lg:text-4xl">
                Technology Company
              </p>
              <p className="text-black/50 lg:text-3xl">
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-end">
                <span className="text-2xl font-bold lg:text-6xl">01</span>
                <span className="text-2xl text-gray-400 px-1 lg:text-6xl">
                  /
                </span>
                <span className="text-gray-400 flex lg:text-3xl">03</span>
              </div>
              <div>
                <a
                  href="#slide3"
                  className="btn btn-ghost rounded-none text-gray-300 bg-gray-100"
                >
                  <BsArrowLeft size={20} />
                </a>
                <a
                  href="#slide2"
                  className="btn btn-ghost rounded-none bg-blue01 text-white"
                >
                  <BsArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full flex flex-col"
          >
            <div className="h-72">
              <p className="text-blue01 text-3xl lg:text-6xl font-bold">
                What we do
              </p>
              <p className="pt-4 pb-2 font-bold lg:text-4xl">
                Professional Brand Management
              </p>
              <p className="text-black/50 lg:text-3xl">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-end">
                <span className="text-2xl font-bold lg:text-6xl">02</span>
                <span className="text-2xl text-gray-400 px-1 lg:text-6xl">
                  /
                </span>
                <span className="text-gray-400 flex lg:text-3xl">03</span>
              </div>
              <div>
                <a
                  href="#slide1"
                  className="btn btn-ghost rounded-none text-gray-300 bg-gray-100"
                >
                  <BsArrowLeft size={20} />
                </a>
                <a
                  href="#slide3"
                  className="btn btn-ghost rounded-none bg-blue01 text-white"
                >
                  <BsArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full flex flex-col"
          >
            <div className="h-72">
              <p className="text-blue01 text-3xl lg:text-6xl font-bold">
                How we do
              </p>
              <p className="pt-4 pb-2 font-bold lg:text-4xl">
                Strategize, Design, Collaborate
              </p>
              <p className="text-black/50 lg:text-3xl">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse sequam nihil molestiae consequatur.
              </p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-end">
                <span className="text-2xl font-bold lg:text-6xl">03</span>
                <span className="text-2xl text-gray-400 px-1 lg:text-6xl">
                  /
                </span>
                <span className="text-gray-400 flex lg:text-3xl">03</span>
              </div>
              <div>
                <a
                  href="#slide2"
                  className="btn btn-ghost rounded-none text-gray-300 bg-gray-100"
                >
                  <BsArrowLeft size={20} />
                </a>
                <a
                  href="#slide1"
                  className="btn btn-ghost rounded-none bg-blue01 text-white"
                >
                  <BsArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-8 h-fit flex flex-col">
        <div className="flex flex-col px-6 gap-4 mb-8">
          <p className="text-blue01 text-3xl font-bold text-center lg:text-6xl">
            Our Core Values
          </p>
          <p className="text-black/50 lg:text-3xl">
            Ridiculus laoreet libero pretium et, sit vel elementum convallis
            fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
            etiam sit.
          </p>
          <p className="text-black/50 lg:text-3xl">
            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae,
            nec amet enim.
          </p>
        </div>
        <div className="px-4 flex flex-col gap-8 mb-16">
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <p className="text-gray-400 text-3xl font-medium pr-5">—</p>
              <p className="text-black text-2xl font-medium lg:text-4xl">
                Dedication
              </p>
            </div>
            <p className="text-black/50 pl-12 lg:text-3xl">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <p className="text-gray-400 text-3xl font-medium pr-5">—</p>
              <p className="text-black text-2xl font-medium lg:text-4xl">
                Intellectual Honesty
              </p>
            </div>
            <p className="text-black/50 pl-12 lg:text-3xl">
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias conse.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <p className="text-gray-400 text-3xl font-medium pr-5">—</p>
              <p className="text-black text-2xl font-medium lg:text-4xl">
                Curiosity
              </p>
            </div>
            <p className="text-black/50 pl-12 lg:text-3xl">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque.
            </p>
          </div>
        </div>
        <div className="flex justify-end bottom">
          <img
            src={corevalues}
            alt=""
            className="w-[19rem] h-full lg:w-[50rem]"
          />
        </div>
      </div>

      <div className="bg-blue02 px-6 py-10">
        <div className="bg-white px-6 py-8">
          <p className="text-blue01 text-2xl font-extrabold mb-6 lg:text-6xl">
            OUR SPECIALITY
          </p>
          <p className="text-black/50 lg:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </p>
          <div className="carousel w-full pt-12">
            <div
              id="speciality1"
              className="carousel-item relative w-full flex flex-col"
            >
              <div className="h-80 flex flex-col items-center">
                <img src={speed} alt="" />
                <p className="pt-4 pb-2 font-bold lg:text-3xl">
                  Speed Improvement
                </p>
                <p className="text-black/30 text-center mt-10 mb-6 lg:text-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </div>
              <div className="flex items-center justify-between mt-12 mb-4">
                <a href="#speciality3" className="text-gray-300">
                  <BsArrowLeft size={30} />
                </a>
                <div className="flex items-center gap-4">
                  <a href="#speciality1" className="text-purple01">
                    <BsFillRecordCircleFill size={15} />
                  </a>
                  <a href="#speciality2" className="text-blue-200">
                    <BsFillRecordFill size={20} />
                  </a>
                  <a href="#speciality3" className="text-blue-200">
                    <BsFillRecordFill size={20} />
                  </a>
                </div>
                <a href="#speciality2" className=" text-purple01">
                  <BsArrowRight size={30} />
                </a>
              </div>
            </div>
            <div
              id="speciality2"
              className="carousel-item relative w-full flex flex-col"
            >
              <div className="h-80 flex flex-col items-center">
                <img src={exhaust} alt="" />
                <p className="pt-4 pb-2 font-bold lg:text-3xl">Exhaust</p>
                <p className="text-black/30 text-center mt-10 mb-6 lg:text-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </div>
              <div className="flex items-center justify-between mt-12 mb-4">
                <a href="#speciality1" className="text-gray-300">
                  <BsArrowLeft size={30} />
                </a>
                <div className="flex items-center gap-4">
                  <a href="#speciality1" className="text-blue-200">
                    <BsFillRecordFill size={20} />
                  </a>
                  <a href="#speciality2" className="text-purple01">
                    <BsFillRecordCircleFill size={15} />
                  </a>
                  <a href="#speciality3" className="text-blue-200">
                    <BsFillRecordFill size={20} />
                  </a>
                </div>
                <a href="#speciality3" className=" text-purple01">
                  <BsArrowRight size={30} />
                </a>
              </div>
            </div>
            <div
              id="speciality3"
              className="carousel-item relative w-full flex flex-col"
            >
              <div className="h-80 flex flex-col items-center">
                <img src={accessories} alt="" />
                <p className="pt-4 pb-2 font-bold lg:text-3xl">Accessories</p>
                <p className="text-black/30 text-center mt-10 mb-6 lg:text-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </div>
              <div className="flex items-center justify-between mt-12 mb-4">
                <a href="#speciality2" className="text-gray-300">
                  <BsArrowLeft size={30} />
                </a>
                <div className="flex items-center gap-4">
                  <a href="#speciality1" className="text-blue-200">
                    <BsFillRecordFill size={20} />
                  </a>
                  <a href="#speciality2" className="text-blue-200">
                    <BsFillRecordFill size={20} />
                  </a>
                  <a href="#speciality3" className="text-purple01">
                    <BsFillRecordCircleFill size={15} />
                  </a>
                </div>
                <a href="#speciality1" className=" text-purple01">
                  <BsArrowRight size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-foot-pattern px-6 pt-12">
        <div className="flex items-center mb-8">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <img src={company} alt="company" className="w-40" />
        </div>
        <div className="bg-white p-8 mb-12">
          <select className="select select-bordered w-full max-w-xs text-blue04 font-bold mb-10">
            <option disabled selected>
              TECHNOLOGY DEPARTMENT
            </option>
            <option>TECHNOLOGY DEPARTMENT</option>
            <option>TECHNOLOGY DEPARTMENT</option>
          </select>
          <p className="text-blue03 w-8/12 mb-2">
            Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
            Barat
          </p>
        </div>
        <div className="flex flex-col gap-4 text-white mb-[7.4rem]">
          <p>Who We Are</p>
          <p>Our Values</p>
          <p>The Perks</p>
        </div>
      </div>
    </Layout>
  );
}

export default App;
