import "../index.scss";
import React from "react";

export default function Card() {
  return (
    <> 
<div className="px-3 md:lg:xl:px-40 border-t border-b py-7 bg-opacity-10 cardview">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">React App View</p>
                <p className="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                    set of people.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Admission process Guidance</p>
                <p className="mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                    top institutions worldwide.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Genuine
                    Visa Advice</p>
                <p className="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation
                </p>
            </div>




        </div>

        <div className="w-full   bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
            <p className=" text-white"> <span className="text-4xl font-medium">Still Confused ?</span> <br/> <span className="text-lg">Book For Free Career Consultation Today ! </span></p>
            <button className="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400">BOOK AN APPOINTMENT </button>
        </div>

    </div>
    </>
)
};