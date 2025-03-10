


const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 relative">
      <h1 className="absolute px-80 text-2xl text-[#00df9a] font-extrabold w-[100px]" >REACT.</h1>
      <div className="container mx-auto text-center">
        <div className="grid grid-rows font-semibold ">
          <h1>Home</h1>
          <h1>About us</h1>
          <h1>My Projects</h1>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Sanskar Kc. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/SansKc" target="_blank" className="hover:text-[#00df9a]">GitHub</a>
          <a href="https://www.linkedin.com/in/sanskar-k-c-777a682a9/" target="_blank" className="hover:text-[#00df9a]">LinkedIn</a>
          <a href="https://mail.google.com/mail/u/0/#inbox" className="hover:text-[#00df9a]">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
