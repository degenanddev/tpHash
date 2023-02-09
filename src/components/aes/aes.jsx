import * as React from 'react'
import { useState } from 'react';
import aesjs from 'aes-js';

export default function AlgoAes() {

  const [string, setString] = useState("");
  const [key, setKey] = useState();

  const [TextDecrypted, setTextDecrypted] = useState();
  const [TextEncrypted, setTextEncrypted] = useState();

  const handleTextEncrypt = (e) => {
    const text = e.target.value;
    const textBytes = aesjs.utils.utf8.toBytes(text);
    const key = aesjs.utils.utf8.toBytes(e.target.value);
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    const encryptedBytes = aesCtr.encrypt(textBytes);
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    setTextEncrypted(encryptedHex);
  };

  const handleTextDecrypt = (e) => {
    const text = e.target.value;
    const encryptedBytes = aesjs.utils.hex.toBytes(text);
    const key = aesjs.utils.utf8.toBytes(e.target.value);
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    setTextDecrypted(decryptedText);
  };



  return (
    <div className="bg-[rgb(22,28,36)]  w-full justify-center min-h-screen items-center mx-auto  pt-16 px-2 ">
      <h1 className=" text-center items-center text-4xl mx-auto font-medium text-yellow-500 ">
        Hello Mr  : <a className='font-bold  text-green-500'> Zellou</a>
      </h1>
      <div className="flex flex-col items-center py-4 mt-4 border border-yellow-500 bg-[rgb(33,43,54)]  mx-auto rounded-lg  sm:w-3/4 ">


        <label className="text-center font-medium text-yellow-500 mt-4">
          Enter a string to crypt:
        </label>
        <input  onChange={(e) => handleTextEncrypt(e)} placeholder="Enter a string" className="bg-gray-500 mt-2 px-2" type="text" />


        <label className="text-center font-medium text-yellow-500 mt-4">
          Enter a Key (must be 16,24, or 32):
        </label>
        <input onChange={(e) => handleTextEncrypt(e)} placeholder="Enter a string" className="bg-gray-500 mt-2 px-2" type="text" />


        {TextEncrypted && <label className="text-center font-medium text-yellow-500 mt-4">
          String crypted: <a className="font-bold">{TextEncrypted}</a>
        </label>}
        
       

      </div>

      <div className="flex flex-col items-center py-4 mt-4 border border-yellow-500 bg-[rgb(33,43,54)]  mx-auto rounded-lg  sm:w-3/4 ">

      <label className="text-center font-medium text-yellow-500 mt-4">
          Enter a string to crypt:
        </label>
        <input  onChange={(e) => handleTextDecrypt(e)} placeholder="Enter a string" className="bg-gray-500 mt-2 px-2" type="text" />


        <label className="text-center font-medium text-yellow-500 mt-4">
          Enter a Key (must be 16,24, or 32):
        </label>
        <input onChange={(e) => handleTextDecrypt(e)} placeholder="Enter a string" className="bg-gray-500 mt-2 px-2" type="text" />


        {TextDecrypted && <label className="text-center font-medium text-yellow-500 mt-4">
          String crypted: <a className="font-bold">{TextDecrypted}</a>
        </label>}
        
        <button className='p-2 mt-3  hover:bg-yellow-500/75 bg-yellow-500 rounded-full' onClick={handleTextDecrypt}>
          Decrypt !
        </button>
        </div>
    </div>
  );
};
