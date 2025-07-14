import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const sizes = ["1:1", "3:2", "4:3", "3:4", "9:16", "16:9"];
  const models = [
    "realistic",
    "anime",
    "flux-schnell",
    "flux-dev",
    "flux-dev-fast",
    "sdxl-1.0",
    "imagine-turbo",
  ];

  const [prompt, setPrompt] = useState("");
  const [scale, setScale] = useState("1:1");
  const [model, setModel] = useState("anime");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [sorc, setSorc] = useState("");
  const [history, setHistory] = useState([]);
  const historyRef = useRef(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = "https://api.vyro.ai/v2/image/generations";

  useEffect(() => {
    const stored = localStorage.getItem("imageHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("imageHistory", JSON.stringify(history));
  }, [history]);

  const scrollHistory = (dir) => {
    const scrollAmount = 200;
    if (historyRef.current) {
      historyRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("imageHistory");
  };

  async function create() {
    if (!prompt) {
      setError("please provide a prompt");
      return;
    }

    setError("");
    setSorc("");
    setLoading("Loading image, please wait...");

    try {
      const formData = new FormData();
      formData.append("prompt", prompt);
      formData.append("style", model);
      formData.append("aspect_ratio", scale);
      formData.append("seed", "5");

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API Error: ${errText}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setSorc(imageUrl);
      setHistory((prev) => [imageUrl, ...prev.slice(0, 19)]);
    } catch (err) {
      setError("Error generating image: " + err.message);
    } finally {
      setLoading("");
    }
  }

  return (
    <div className="container">
      <div className="title">Your Imagination, OUR creation</div>

      <div className="selectors">
        <div className="select-cont">
          <div className="txt">Size: </div>
          <select
            name="aspect_ratio"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          >
            {sizes.map((sz) => (
              <option key={sz} value={sz}>
                {sz}
              </option>
            ))}
          </select>
        </div>

        <div className="select-cont">
          <div className="txt">Style: </div>
          <select
            name="style"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            {models.map((md) => (
              <option key={md} value={md}>
                {md}
              </option>
            ))}
          </select>
        </div>

        <button className="generate-button" onClick={create}>
          Generate
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
      />

      {(loading || sorc) && (
        <div className="result-container">
          {loading && <div className="loading">{loading}</div>}
          {sorc && (
            <div className="image-wrapper">
              <a href={sorc} download>
                <img className="result-image" src={sorc} alt="Generated" />
              </a>
              <div className="info-text">
                *Click on the image to download it!
              </div>
            </div>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div className="history-container">
          <h3 className="history-title">Generated Images History</h3>
          <button className="clear-button" onClick={clearHistory}>
            Clear History
          </button>

          <div className="scroll-buttons">
            <button onClick={() => scrollHistory("left")}>&larr;</button>
            <div className="history-scroll" ref={historyRef}>
              {history.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`history-${index}`}
                  className="history-image"
                  onClick={() => setSorc(src)}
                />
              ))}
            </div>
            <button onClick={() => scrollHistory("right")}>&rarr;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
