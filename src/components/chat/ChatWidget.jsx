import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const ChatWidget = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Load saved chat from sessionStorage on mount
    useEffect(() => {
        const saved = sessionStorage.getItem('chatHistory');
        if (saved) {
            setMessages(JSON.parse(saved));
        }
    }, []);

    // Save chat to sessionStorage whenever messages change
    useEffect(() => {
        sessionStorage.setItem('chatHistory', JSON.stringify(messages));
    }, [messages]);

    // ✅ Clear sessionStorage on refresh or tab close
    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.removeItem('chatHistory');
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
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

            const finalMessages = [...updatedMessages, botMessage];

            // Count user messages only
            const userCount = finalMessages.filter(m => m.sender === 'user').length;
            if (userCount >= 4) {
                sessionStorage.setItem('chatHistory', JSON.stringify(finalMessages));
                navigate('/chatbot');
            } else {
                setMessages(finalMessages);
            }
        } catch (err) {
            console.error(err);
            setMessages(prev => [...prev, { sender: 'bot', text: "⚠️ Error fetching response." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
  initial={{ opacity: 0, y: -180 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
  className="w-full max-w-xl bg-indigo-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg p-4 shadow-lg ml-4 sm:ml-10 mt-10"
>
            <p className="mb-3 text-sm md:text-base leading-relaxed">
                <strong>RahBot:</strong> Hi! I’m Rahat’s assistant. Ask me anything about his journey, work, or achievements.
            </p>

            <div className="space-y-2 mb-4 max-h-60 overflow-y-auto pr-1">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex ${msg.sender === 'bot' ? 'justify-end' : 'justify-start'} w-full`}
                    >
                        <div
                            className={`p-3 rounded-lg max-w-xs md:max-w-md lg:max-w-lg ${msg.sender === 'bot'
                                    ? 'bg-blue-100 dark:bg-blue-600 text-left' // Left-aligned text in right-positioned bubble
                                    : 'bg-green-100 dark:bg-green-700 text-left'
                                }`}
                            style={{
                                marginLeft: msg.sender === 'bot' ? 'auto' : '0',
                                textAlign: 'left' // Force left-align regardless
                            }}
                        >
                            <strong>{msg.sender === 'bot' ? 'RahBot' : 'You'}:</strong> {msg.text}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="flex justify-end w-full">
                        <div
                            className="p-3 rounded-lg bg-blue-100 dark:bg-blue-600 text-left max-w-xs md:max-w-md lg:max-w-lg"
                            style={{ marginLeft: 'auto' }}
                        >
                            RahBot is thinking...
                        </div>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="w-full flex">
                <input
                    type="text"
                    placeholder="Type your question..."
                    className="w-full px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-700 dark:text-white focus:outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-r-md text-sm"
                >
                    {loading ? '...' : 'Send'}
                </button>
            </form>
        </motion.div>
    );
};

export default ChatWidget;
