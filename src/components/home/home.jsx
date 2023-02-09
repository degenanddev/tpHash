import * as React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import sha256 from 'js-sha256';
import sha256 from 'crypto-js/sha256';
import { MD5 } from 'crypto-js';

export default function Algosha256() {

  

  return (
    <div className="bg-[rgb(22,28,36)]  w-full justify-center min-h-screen items-center mx-auto  pt-16 px-2 ">
       <h1 className=" text-center items-center text-4xl mx-auto font-medium text-yellow-500 ">
         Hello Mr  : <a className='font-bold  text-green-500'> Zellou</a>
        </h1>
      <div className="flex flex-col items-center py-4 mt-4 border border-yellow-500 bg-[rgb(33,43,54)]  mx-auto rounded-lg  sm:w-3/4 ">
       

        <label className="text-center font-medium text-yellow-500 mt-4">
          Enter a string to hash:
        </label>

        




      </div>
    </div>
  );
};
