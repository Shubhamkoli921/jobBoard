

function App() {
  return (
    <>
      <div className="w-full h-full bg-black" >
        <div className="h-full bg-black text-white ">
          {/* navbar section */}
          <div className="flex justify-between w-full p-4  ">
            <h1 className="text-xl lg:text-sm font-bold flex">Job Board</h1>
            <div className="text-xl flex justify-center w-[50%] lg:text-sm font-bold">
              <ul className="flex justify-around w-full">
                <li>Home</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Login</li>
              </ul>
            </div>
            <h1 className="text-xl lg:text-sm font-bold">Register</h1>
          </div>

          {/* main section */}
          <div className="w-full h-screen justify-between scale-95 p-2 flex row-span-3">
            {/* left side bar  */}
            <div className="bg-[#161a1d] flex w-[20%] rounded-md"></div>
            {/* middle section  */}
            <div className="flex flex-col w-[60%] h-full m-2  ">
              <div className=" w-full h-full overflow-auto  ">
                <div className="w-full h-[200px] rounded-md bg-[#f77f00]">
                  <div className="flex flex-col p-4">

                    <h1 className="text-xl">Are you looking for a dream job ?</h1>
                    <span className="text-sm">Rsl Solutions is a place where you can fnd your dream job in a various skills more than, 10000 jobs are availbale here.</span>
                  </div>
                  <div className="w-full flex p-4 justify-center">

                    <input
                      placeholder="Search"
                      className=" w-full m-4 h-[40px] text-black border-none border-collapse p-4 "
                    />
                    <button className="border bg-transparent  ">Search</button>
                  </div>
                </div>

                {/* job desc section */}
                <div className="w-full h-[400px] bg-[#161a1d] mt-2 rounded-md">
                  dgfyhgfdhfgh
                </div>
              </div>

            </div>
            {/* right side bar */}
            <div className="bg-[#161a1d]  flex w-[20%] rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
