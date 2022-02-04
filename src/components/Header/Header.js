import { TextField ,createTheme,ThemeProvider} from "@mui/material";
import React from "react";
import "./Header.css";
import { MenuItem } from "@mui/material";
import categories from "../../data/category";


const Header = ({setCategory, category, word,setWord,LightTheme}) => {
    const darkTheme = createTheme({
      palette: {
        primary: {
          main: LightTheme ? "#000" : "#fff",
        },
        mode: LightTheme ? "light" : "dark",
      },
    });


    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

    return (
      <div className="header">
        <span className="title">{word ? word : "Dictionary"}</span>
        <div className="inputs">
          <ThemeProvider theme={darkTheme}>
            <TextField
              className="search"
              id="filled-basic"
              label="Search a word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              label="Standard"
              variant="standard"
            />
            <TextField
              className="select"
              select
              label="Language"
              value={category}
              onChange={(e) => handleChange(e.target.value)}
            >
              {categories.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </ThemeProvider>
        </div>
      </div>
    );
};
export default Header;