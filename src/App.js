import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputBox from "./components/InputBox";
import DenominationResult from "./components/DenominationResult";
import ClearButton from "./components/ClearButton";
import { Drawer, List, ListItem, ListItemText, Box } from "@mui/material";

function calculateDenominations(amount) {
  const denominations = [1000, 500, 100, 20, 10, 5, 2, 1];
  const result = {};
  let remainingAmount = amount;

  for (let denom of denominations) {
    if (remainingAmount >= denom) {
      result[denom] = Math.floor(remainingAmount / denom);
      remainingAmount %= denom;
    }
  }
  return result;
}

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState({});
  const [currentView, setCurrentView] = useState("denominations");

  const handleCalculate = () => {
    const numAmount = parseInt(amount, 10);
    if (numAmount > 0) {
      setResult(calculateDenominations(numAmount));
    } else {
      alert("Enter a valid positive number.");
    }
  };

  const handleClear = () => {
    setAmount("");
    setResult({});
  };

  return (
    <div className="app">
      {/* Drawer Sidebar */}
      <Drawer variant="permanent" className="drawer">
        <List>
          {["Denominations", "About", "Contact"].map((text) => (
            <ListItem
              button
              key={text}
              onClick={() => setCurrentView(text.toLowerCase())}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <div className="main-content">
        <Header />
        <div className="container">
          {currentView === "denominations" && (
            <>
              <div className="left-section">
                <InputBox
                  amount={amount}
                  setAmount={setAmount}
                  onCalculate={handleCalculate}
                />
              </div>
              <div className="right-section">
                <DenominationResult result={result} />
                <ClearButton onClear={handleClear} />
              </div>
            </>
          )}
          {currentView === "about" && (
            <div className="content-page">
              <h2>About</h2>
              <p>This app calculate the denomiations of given amount </p>
            </div>
          )}
          {currentView === "contact" && (
            <div className="content-page">
              <h2>Contact</h2>
              <p>For any questions or queries reach manju.</p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
