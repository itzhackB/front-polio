import React, { useState, useEffect } from "react";
import axios from 'axios'


const Convert = ({ language, text }) => {
    console.log(text)
  const [results, setResults] = useState([]);
  const [finalText, setFinalText] = useState(text);

 
  useEffect(() => {
      const timerId = setTimeout(() => {
          setFinalText(text);
         
      }, 500);

      return () => {
          clearTimeout(timerId);
      };
  }, [text]);

 
  useEffect(() => {
    const translate = async () => {
      const translation = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: finalText,
            target: language,
            key:process.env.API_KEY_GOOGLE,
          },
        }
      );

      
      setResults(translation.data.data.translations[0].translatedText);

     
    };
    

    translate();

  }, [language, finalText]);
  console.log(finalText)
  return (
    <div>
      <p className="aboutMep">{results}</p>
    </div>
  );
};

export default Convert;