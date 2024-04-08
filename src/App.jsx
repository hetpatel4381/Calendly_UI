import "./App.css";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 w-[75%] m-auto">
        {/* heading */}
        <h1 className="font-extrabold text-4xl">What can we help you with?</h1>
        {/* searchBar */}
        <div className="border border-gray-300 rounded-full flex items-center p-2 overflow-hidden w-[45%] m-auto">
          <CiSearch className="text-gray-500 p-3 cursor-pointer text-lg" />
          <input
            type="text"
            placeholder="Search our articles"
            className="border-none p-3 text-gray-500"
          />
        </div>
        {/* List */}
        <div className="w-[50%] m-auto">
          <div className="flex flex-row justify-start gap-10">
            <div className="flex gap-1">
              <img
                src="src\assets\Image1.png"
                alt="Troubleshooting"
                className="h-6 mt-3"
              />
              <p className="text-[#365F97]">Setting up your first event</p>
            </div>
            <div className="flex gap-1">
              <img
                src="src\assets\Image2.png"
                alt="Troubleshooting"
                className="h-6 mt-3"
              />
              <p className="text-[#365F97]">Trobleshooting availability</p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-5">
            <div className="flex gap-1">
              <img
                src="src\assets\Image3.png"
                alt="Troubleshooting"
                className="h-6 mt-3"
              />
              <p className="text-[#365F97]">Schedule with video conferencing</p>
            </div>
            <div className="flex gap-1">
              <img
                src="src\assets\Image4.png"
                alt="Troubleshooting"
                className="h-6 mt-3"
              />
              <p className="text-[#365F97]">Embed options overview</p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-9">
            <div className="flex gap-1">
              <img
                src="src\assets\Image5.png"
                alt="Troubleshooting"
                className="h-6 mt-3"
              />
              <p className="text-[#365F97]">Automate tasks with Workflows</p>
            </div>
            <div className="flex gap-1">
              <img
                src="src\assets\Image6.png"
                alt="Troubleshooting"
                className="h-6 mt-3"
              />
              <p className="text-[#365F97]">Using Calendly for Chrome</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
