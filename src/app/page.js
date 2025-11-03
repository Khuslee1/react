import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-amber-50">
      <div className="border-black shadow-2xl rounded-md p-6 flex flex-col gap-5  justify-center items-center bg-white ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
          className="h-15 w-15 rounded-3xl "
        />
        <div className="flex flex-col gap-[5px] items-center">
          <h1 className="text-black text-[30px]">Sarah Doule</h1>
          <p className="text-black">Front End Engineer @ Microsoft</p>
        </div>
        <p className="w-80 text-black text-center">
          I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer
        </p>
        <div className="rounded-md w-60 h-10 bg-blue-700 flex justify-center items-center text-white hover:bg-violet-700 duration-500">
          Contact me
        </div>
        <div className="flex gap-4">
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            className="h-5 w-5 rounded-3xl"
          />
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            className="h-5 w-5 rounded-3xl"
          />
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            className="h-5 w-5 rounded-3xl"
          />
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            className="h-5 w-5 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
