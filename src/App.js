import React from "react";
import Home from './components/home/home';
import Algosha256 from './components/sha256/sha256';
import Algomd5 from './components/md5/md5';
import AlgoAes from './components/aes/aes';
import Algoripemd160 from './components/ripemd160/ripemd160';
import AlgoKeccak512 from './components/keccak512/keccak512';

import {  Routes, Route, useParams, } from "react-router-dom";

function App() {

  return (
    <div className="flex w-full">

      <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />
        
        <Route path="/algo/sha256" element={<Algosha256 />} />

        <Route path="/algo/md5" element={<Algomd5 />} />

        <Route path="/algo/ripemd160" element={<Algoripemd160 />} />

        <Route path="/algo/keccak512" element={<AlgoKeccak512 />} />

        <Route path="/algo/aes" element={<AlgoAes />} />

        <Route path="*" element={<Home />}/>

      </Routes>

    </div>

  );
}

export default App;
