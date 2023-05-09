import React, { useState } from "react";
import Header from "../components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-200">
      <Header about={'About'} skills={'Skills'} projects={'Projects'} contact={'Contact'}/>
    </div>
  );
}

export default App;
