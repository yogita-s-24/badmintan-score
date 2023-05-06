import React from 'react'

import { useState } from 'react'

import "./App.css"

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  
  return (
    <div className="container">
      <h1 className='text-center mb-5'>Badminton Score</h1>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card card-h">
            <div class="card-body">
              <h1 class="card-title text-center">Team A</h1><hr />
              <h3 className='text-center'>{countA}</h3><hr />
              <button className='btn1 btn-inc' onClick={() => {
                setCountA(countA + 1)
              }}>+</button>
              <button className='btn1 btn-dec' onClick={() => {
                if(countA==0){
                  alert("Score can't be Negative.")
                }
                else{
                  setCountA(countA - 1)
                }
              }}>-</button>

              <button className='mt-5 button-clear' onClick={()=>{
                setCountA("")  }}>Clear Score</button>
            
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card card-h">
            <div class="card-body">
              <h1 class="card-title text-center">Team B</h1><hr />
              <h3 className='text-center'>{countB}</h3><hr />
              <button className='btn1 btn-inc' onClick={() => {
                setCountB(countB + 1)
              }}>+</button>
              <button className='btn1 btn-dec' onClick={() => {
                if(countB==0){
                  alert("Score can't be Negative.")
                }
                else{
                  setCountB(countB - 1)
                }
              }}>-</button>

             <button className='mt-5 button-clear' onClick={()=>{   
                setCountB(" ")  
              }}>Clear Score</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
