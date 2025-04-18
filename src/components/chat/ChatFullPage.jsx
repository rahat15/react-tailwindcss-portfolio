import React, { useState, useEffect, useRef } from 'react';
import { FiSend } from 'react-icons/fi';

const ChatFullPage = () => {
    const [input, setInput] = useState('');
    const [conversation, setConversation] = useState([]);
    const [loading, setLoading] = useState(false);
    const chatRef = useRef(null);

    useEffect(() => {
        const saved = sessionStorage.getItem('chatHistory');
        if (saved) {
            setConversation(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.removeItem('chatHistory');
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    useEffect(() => {
        chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
    }, [conversation, loading]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        const updated = [...conversation, userMessage];
        setConversation(updated);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('https://rahat15-personal-chatbot.hf.space/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: input }),
            });

            const data = await res.json();
            const botMessage = { sender: 'bot', text: data.answer };
            const final = [...updated, botMessage];
            setConversation(final);
            sessionStorage.setItem('chatHistory', JSON.stringify(final));
        } catch (err) {
            console.error(err);
            setConversation(prev => [...prev, { sender: 'bot', text: '⚠️ Error fetching response.' }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSuggestedClick = (question) => {
        setInput(question);
        setTimeout(() => {
            document.getElementById('hidden-submit')?.click();
        }, 0);
    };

    return (
        <div className="container mx-auto min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">

            {/* Header */}
            <header className="w-full px-6 py-4 mt-10 text-center">
                <h1 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Chat with RahBot
                </h1>
            </header>

            <div className="mt-4 pt-2 pb-2 border-t-2 border-primary-light dark:border-secondary-dark"></div>

            {/* Chat Area */}
            <main
                ref={chatRef}
                className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 w-full max-w-4xl mx-auto"
            >
                {conversation.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`mb-4 flex ${msg.sender === 'bot' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className="inline-block rounded-lg px-4 py-2 shadow-sm whitespace-pre-wrap break-words text-sm text-left"
                            style={{
                                backgroundColor: '#c7d2fe',
                                color: '#1e1e1e',
                                maxWidth: '80%',
                                marginLeft: msg.sender === 'bot' ? 'auto' : '0'
                            }}
                        >
                            <div className="text-xs font-medium mb-1 text-gray-700">
                                {msg.sender === 'bot' ? 'RahBot' : 'You'}
                            </div>
                            {msg.text}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="text-sm italic text-center text-gray-500 dark:text-gray-400">
                        RahBot is thinking...
                    </div>
                )}
            </main>

            {/* Input Area */}
            <form
                onSubmit={sendMessage}
                className="w-full px-4 sm:px-8 py-4 bg-white dark:bg-gray-900"
            >
                <div className="w-full max-w-4xl mx-auto">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            className="w-full px-4 py-3 pr-11 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Ask anything about Rahat..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            id="hidden-submit"
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300"
                        >
                            <FiSend className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </form>

           {/* Prompt Tiles Section BELOW input */}
           <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 mt-8 mb-10">
  <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
    Suggested Questions
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {[
      "Tell me about your research in AI.",
      "What projects are you most proud of?",
      "Can I connect with you on LinkedIn?",
      "Do you have any awards?",
      "What’s your role in SmartBot?",
      "Which tools do you often use?"
    ].map((q, i) => (
      <div
        key={i}
        onClick={() => handleSuggestedClick(q)}
        className="cursor-pointer rounded-lg p-4 text-sm text-[#1e1e1e] dark:text-white"
        style={{
          backgroundColor: '#c7d2fe', // light indigo
          transition: 'background-color 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#a5b4fc'; // darker hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#c7d2fe';
        }}
      >
        {q}
      </div>
    ))}
  </div>
</div>



        </div>
    );
};

export default ChatFullPage;
