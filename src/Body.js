import Card from "./Cards"

export default function body() {
  return (

    <section class=" bg-blend-multiply ">
      <div>
        <div class="drawer drawer-mobile absolute max-h-96 mb-0">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col items-center justify-center">

          </div>
          <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">


              <li><a class="block w-full px-8 py-3  mt-4 mb-2 text-lg text-white font-medium bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl shadow sm:w-auto hover:text-slate-50  actnpive:text-red-500 focus:outline-none focus:ring hover:scale-110" href="/about">
                Furniture
              </a></li>
              <li><a class="block w-full px-8 py-3 my-2 text-lg text-white font-medium bg-gradient-to-r from-yellow-500 to-pink-500 rounded-3xl shadow sm:w-auto hover:text-slate-50  actnpive:text-red-500 focus:outline-none focus:ring hover:scale-110" href="/about">
                Appliances
              </a></li>
              <li><a class="block w-full px-8 py-3  my-2 text-lg text-white font-medium bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl shadow sm:w-auto hover:text-slate-50  actnpive:text-red-500 focus:outline-none focus:ring hover:scale-110" href="/about">
                Clothes
              </a></li>
              <li><a class="block w-full px-8 py-3  my-2 text-lg text-white font-medium bg-gradient-to-r from-green-500 to-teal-800 rounded-3xl shadow sm:w-auto hover:text-slate-50  actnpive:text-red-500 focus:outline-none focus:ring hover:scale-110" href="/about">
                Sports Equipment
              </a></li>
              <li><a class="block w-full px-8 py-3 my-2 text-lg text-white font-medium bg-gradient-to-r from-slate-400 to-blue-500 rounded-3xl shadow sm:w-auto hover:text-slate-50  actnpive:text-red-500 focus:outline-none focus:ring hover:scale-110" href="/about">
                Tech
              </a></li>
              <li><a class="block w-full px-8 py-3 my-2 text-lg text-white font-medium bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl shadow sm:w-auto hover:text-slate-50  actnpive:text-red-500 focus:outline-none focus:ring hover:scale-110" href="/about">
                Memorabilia
              </a></li>


            </ul>

          </div>
        </div>
        <div class=" px-4 py-2 mx-auto lg:items-center max-h-full max-w-xl">
          <div class="max-w-xl mx-auto text-center mt-28">
            <h1 class="text-4xl font-extrabold sm:text-5xl ">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">One Man's Junk is Another Man's </span>
              <strong class="font-extrabold  sm:block">
                <span class="bg-clip-text text-transparent bg-orange-500 "> Treasure</span>
              </strong>
            </h1>

            <p class="mt-4 sm:leading-relaxed sm:text-xl font-bold">
              Looking to get rid of extra stuff, moving out, or looking for cheap deals, we can help.
            </p>

            <div class="flex flex-wrap justify-center gap-8 mt-8">
              <a href="/about" class="block w-full px-12 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl shadow sm:w-auto active:bg-red-500 hover:bg-slate-50 focus:outline-none focus:ring hover:scale-110">
                How it works
              </a>

              <a class="block w-full px-12 py-3 text-sm text-white font-medium bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl shadow sm:w-auto hover:text-slate-50  actnpive:text-red-500 focus:outline-none focus:ring hover:scale-110" href="/displays">
                Local Listings
              </a>
            </div>
          </div>
        </div>
      </div>
      <Card />
    </section>




  );
}