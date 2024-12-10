let settings = {
    theme: "dark",
    fontSize: "16px",
    language: "english"
  };
  
  Object.freeze(settings);
  
  settings.theme = "light";  // This change will be ignored
  console.log(settings);     // { theme: "dark", fontSize: "16px", language: "english" }
  