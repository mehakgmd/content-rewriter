// components/TextRewriter.tsx
'use client';

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";


const TextRewriter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isCopied, setIsCopied] = useState(false);
    const [error, setError] = useState('');

    const MAX_WORDS = 1000;

    const handleChange = (e:any) => {
      const text = e.target.value;
      const wordCount = text.trim().split(/\s+/).length;
  
      if (wordCount > MAX_WORDS) {
        setError(`Input text exceeds the limit of ${MAX_WORDS} words.`);
      } else {
        setError('');
      }
      setInputText(text);
    };
  

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputText }),
      });
      const data = await response.json();
      setOutputText(data.rewrittenText);

    } catch (error) {
      console.error('Error fetching completion:', error);
      setOutputText("This is the rewritten text");
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Hide the tick icon after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text', err);
    });
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen py-2 ">
  <h1 className="text-4xl font-bold mb-4">Text Rewriter</h1>
  <form onSubmit={handleSubmit} className="w-full max-w-5xl flex gap-9">
    <div className="w-1/2 p-5">
      <textarea
        className="w-full h-[20rem] p-4 border border-light rounded resize-none focus:outline-none focus:shadow-2xl "
        value={inputText}
        onChange={handleChange}
        placeholder='Enter your text here.....'
      />
      <div className="flex justify-center mt-5">
        <button type="submit" 
                form="rewrite-form"
        className="bg-dark text-white px-7 py-2 rounded"
                disabled={Boolean(error)}
        >
          Rewrite
        </button>
        {/* error if the text exceed the limit */}
        {error && <div className="text-darkRed mt-2">{error}</div>}
         </div>
    </div>
    <div className="w-1/2 p-5 relative">
          <div className="absolute top-7 right-7">
            <button onClick={handleCopyText} className="text-dark border border-dark rounded-lg p-1">
            {isCopied ? <FaCheck size={20} /> : <IoCopyOutline size={20} />}
            </button>
          </div>
          <div className="w-full h-[20rem] p-6 rounded bg-grey overflow-auto">
            <h2 className="text-2xl font-bold mb-2">Rewritten Text</h2>
            <p>{outputText || "Your rewritten text will appear here..."}</p>
          </div>
        </div>
  </form>
</div>


  );
};

export default TextRewriter;
