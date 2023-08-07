"use client";

const Setting = () => {
  const handleThemeChange = (newTheme) => {
    if (newTheme === "primary") {
      document.documentElement.style.setProperty("--primary-color", "#007bff");
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#ffffff"
      );
      document.documentElement.style.setProperty(
        "--primary-background-color",
        "#007bff"
      );
      document.documentElement.style.setProperty(
        "--primary-sidebar-bg",
        "#c3b7b7"
      );
    }
    if (newTheme === "secondary") {
      document.documentElement.style.setProperty("--primary-color", "#6c757d");
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#000000"
      );
      document.documentElement.style.setProperty(
        "--primary-background-color",
        "#6c757d"
      );
      document.documentElement.style.setProperty(
        "--primary-sidebar-bg",
        "#756e6e"
      );
    }
  };

  const handleTextColorChange = (event) => {
    const newTextColor = event.target.value;

    document.documentElement.style.setProperty(
      "--primary-text-color",
      newTextColor
    );
  };
  const handleButtonColorChange = (event) => {
    const newBtnBgColor = event.target.value;

    document.documentElement.style.setProperty(
      "--primary-btn-bg",
      newBtnBgColor
    );
  };
  const handleBackgroundColorChange = (event) => {
    const newBgColor = event.target.value;

    document.documentElement.style.setProperty(
      "--primary-app-bg-color",
      newBgColor
    );
  };
  return (
    <div className="d-flex flex-column align-items-center p-5">
      <h1>Choose Theme</h1>
      <button
        className="button-style bg-blue"
        onClick={() => handleThemeChange("primary")}
      >
        Primary
      </button>
      <button
        className="button-style bg-green"
        onClick={() => handleThemeChange("secondary")}
      >
        Secondary
      </button>
      <div className="colorPickerContainer">
        <label>Text Color:</label>
        <input
          type="color"
          className="colorPickerStyle"
          onChange={handleTextColorChange}
        />
      </div>

      <div className="colorPickerContainer">
        <label>Button Color:</label>
        <input
          type="color"
          className="colorPickerStyle"
          onChange={handleButtonColorChange}
        />
      </div>
      <div className="colorPickerContainer">
        <label>Background Color:</label>
        <input
          type="color"
          className="colorPickerStyle"
          onChange={handleBackgroundColorChange}
        />
      </div>
    </div>
  );
};

export default Setting;
