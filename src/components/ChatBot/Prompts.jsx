import React from 'react';

const PromptTemplates = ({ onPromptSelect }) => {
  const templates = [
    "Can you guide me through a quick breathing exercise",
    "What are some tips to reduce stress",
    "How can I improve my sleep quality",
    "Tell me about progressive muscle relaxation",
    "What are some effective mindful practices"
  ];

  return (
    <div className="prompt-templates">
      <h3 className="text-xl font-bold mb-4">Quick Prompts</h3>
      {templates.map((template, index) => (
        <button
          key={index}
          className="block w-full text-left p-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded"
          onClick={() => onPromptSelect(template)}
        >
          {template}
        </button>
      ))}
    </div>
  );
};

export default PromptTemplates;