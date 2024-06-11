// components/TextRewriter.tsx
'use client';

import { useState } from 'react';

const TextRewriter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

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

  return (
<div className="flex flex-col items-center justify-center min-h-screen py-2">
  <h1 className="text-4xl font-bold mb-4">Text Rewriter</h1>
  <form onSubmit={handleSubmit} className="w-full max-w-5xl flex gap-9">
    <div className="w-1/2 p-5">
      <textarea
        className="w-full h-[20rem] p-4 border border-light rounded resize-none focus:outline-none focus:shadow-2xl "
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Enter your text here.....'
      />
      <div className="flex justify-center mt-5">
        <button type="submit" className="bg-dark text-white px-7 py-2 rounded">
          Rewrite
        </button>
      </div>
    </div>
    <div className="w-1/2 p-5">
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
