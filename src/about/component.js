import React from "react";

export default function DragandDrop() {
  return (
    <main class="flex-col min-h-screen items-center justify-center  font-sans py-5 px-5">
      <label for="dropzone-file" class=" h-80 mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-spacing-1 border-violet-500 bg-slate-100 bg-blend-multiply p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class=" h-10 w-10 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>

        <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Photo</h2>

        <p class="mt-2 text-gray-500 tracking-wide">Upload or drag & drop your file SVG, PNG, JPG </p>

        <input id="dropzone-file" type="file" class="hidden" />

      </label>
      <h1 class="text-4xl font-extrabold sm:text-2xl text-center py-2">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Example Listing </span>
      </h1>

      <div class="w-auto px-16 mb-5 ">
        <div class="flex mb-2">
          <span class="mr-2 font-semibold leading-normal capitalize text-size-sm">progress</span>
          <span class="ml-auto font-semibold leading-normal text-size-sm">20%</span>
        </div>
        <div>
          <div class="h-0.75 text-size-xs flex w-auto overflow-visible rounded-lg bg-gray-200">
            <div class="bg-fuchsia-500 w-1/5 transition-width duration-600 ease-soft rounded-1 -mt-0.38 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
          </div>
        </div>
      </div>
    </main>



  )


}

