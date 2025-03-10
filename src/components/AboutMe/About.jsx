import Laptop from "../../assets/laptop.jpg";

function About() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">KNOW A LITTLE ABOUT ME</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Hello there viewers!
          </h1>
          <p>
            I’m a computer engineering graduate passionate about crafting
            digital experiences. With a keen interest in website development,
            digital marketing, and UI/UX design, I aim to build intuitive and
            engaging solutions that blend technology with creativity. I’m always
            eager to learn and take on new challenges to enhance user
            experiences and drive digital growth.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
