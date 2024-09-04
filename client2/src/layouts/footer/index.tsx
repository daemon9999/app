import { Link } from "react-router-dom";

export default function Footer() {
  
  return (
    <footer className="bg-10">
      <div className="w-[90%] container mx-auto flex flex-col items-center sm:items-stretch gap-y-3 py-10">
        <div className="flex flex-col lg:flex-row items-center sm:items-start lg:items-center text-center gap-y-4 lg:justify-between border-b w-full border-400 pb-4">
          <button
            onClick={() => window.scrollTo(0, 0)}
            type="button"
            className=" h-16 w-auto xs:h-20 px-2 rounded-md bg-400 inline-flex items-center"
          >
            <img
              src="/icons/logo-icon.png"
              className="w-auto sm:w-full h-full"
              alt="Logo Icon"
            />
            <span className="uppercase font-montserrat whitespace-nowrap text-lg xs:text-2xl tracking-widest font-extrabold gradient-text">
              suni ekinchi
            </span>
          </button>

          <div className="flex items-center sm:justify-start justify-centerhttps://technofest-blog.vercel.app/subscription flex-wrap gap-y-2 gap-x-4 text-400 font-bold tracking-wider text-xl">
          <Link to={'/farm'} className="hover:underline">Product</Link>
          <Link to={'https://technofest-blog.vercel.app'} target="_blank" className="hover:underline">Our Company</Link>
          <Link to={'/#resources'} className="hover:underline">Resources</Link>
          <Link to={'/contact'} className="hover:underline">Support</Link>
          <Link to={'/#features'} className="hover:underline">Features</Link>
         
          </div>
        </div>

        <div className="text-lg text-400 tracking-wider ml-auto w-full sm:w-auto text-center sm:text-start">
          &copy;{new Date(Date.now()).getFullYear()} SUNI EKINCHI, All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
