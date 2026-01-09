import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, ChevronLeft, Loader2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import emailjs from '@emailjs/browser';

const steps = [
    {
        id: 1,
        title: "What do you need?",
        options: [
            "Website",
            "UI/UX Design",
            "Branding",
            "E-commerce",
            "Not sure yet"
        ]
    },
    {
        id: 2,
        title: "Project Size",
        options: [
            { label: "Starter", desc: "Landing page / Simple site" },
            { label: "Growth", desc: "Full Website / MVP" },
            { label: "Scale", desc: "Complex Product / Platform" }
        ]
    },
    {
        id: 3,
        title: "Let's update you",
        fields: ["Name", "Email", "Company (optional)", "Short message"]
    }
];

const ProjectModal = () => {
    const { isModalOpen, closeModal } = useModal();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selections, setSelections] = useState({
        need: '',
        size: '',
        details: { name: '', email: '', company: '', message: '' }
    });

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleOptionSelect = (key, value) => {
        setSelections(prev => ({ ...prev, [key]: value }));
        handleNext();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelections(prev => ({
            ...prev,
            details: { ...prev.details, [name]: value }
        }));
    };

    const handleClose = () => {
        setStep(1);
        setIsSuccess(false);
        closeModal();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim();
        const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim();
        const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim();

        if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
            alert("⚠️ EmailJS Configuration Missing!\n\nPlease open the .env file in your project folder and replace 'your_service_id', 'your_template_id', and 'your_public_key' with your actual credentials from emailjs.com.");
            return;
        }

        setIsSubmitting(true);

        const formattedMessage = `
🚀 NEW PROJECT INQUIRY
----------------------------------------

📌 PROJECT SCOPE
• Need:   ${selections.need}
• Size:   ${selections.size}

👤 CLIENT DETAILS
• Name:    ${selections.details.name}
• Email:   ${selections.details.email}
• Company: ${selections.details.company || 'Not Specified'}

💬 MESSAGE
----------------------------------------
${selections.details.message}
        `.trim();

        const templateParams = {
            from_name: selections.details.name,
            from_email: selections.details.email,
            to_name: 'The Mishra Ji',
            company: selections.details.company,
            project_need: selections.need,
            project_size: selections.size,
            message: formattedMessage
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setIsSuccess(true);
            setSelections({
                need: '',
                size: '',
                details: { name: '', email: '', company: '', message: '' }
            });
        } catch (error) {
            console.error('FAILED...', error);
            alert("Oops! Something went wrong. Please check your config or try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isModalOpen) return null;

    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden"
                    >
                        {isSuccess ? (
                            <div className="p-12 flex flex-col items-center text-center">
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600"
                                >
                                    <Check size={48} strokeWidth={3} />
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl font-heading font-bold text-gray-900 mb-2"
                                >
                                    We've got it!
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-500 mb-8"
                                >
                                    Thanks for sharing your vision. We'll be in touch shortly to discuss the next steps.
                                </motion.p>
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    onClick={handleClose}
                                    className="px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
                                >
                                    Back to Home
                                </motion.button>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center justify-between px-8 pt-8 pb-4">
                                    {step > 1 ? (
                                        <button onClick={handleBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                                            <ChevronLeft size={24} />
                                        </button>
                                    ) : <div className="w-10" />}

                                    <div className="flex gap-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i <= step ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-200'}`} />
                                        ))}
                                    </div>

                                    <button onClick={handleClose} className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900">
                                        <X size={24} />
                                    </button>
                                </div>

                                <motion.div
                                    key={step}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-8 pb-10"
                                >
                                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">{steps[step - 1].title}</h2>
                                    <p className="text-gray-500 mb-8">
                                        {step === 1 && "Start by telling us what you're building."}
                                        {step === 2 && "Help us understand the scope."}
                                        {step === 3 && "Where should we send the proposal?"}
                                    </p>

                                    <div className="space-y-3">
                                        {step === 1 && steps[0].options.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleOptionSelect('need', option)}
                                                className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center justify-between group"
                                            >
                                                <span className="font-medium text-gray-700 group-hover:text-indigo-900">{option}</span>
                                                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-indigo-600" />
                                            </button>
                                        ))}

                                        {step === 2 && steps[1].options.map((option) => (
                                            <button
                                                key={option.label}
                                                onClick={() => handleOptionSelect('size', option.label)}
                                                className="w-full text-left p-5 rounded-xl border border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center justify-between group"
                                            >
                                                <div>
                                                    <div className="font-bold text-gray-900 mb-1 group-hover:text-indigo-900">{option.label}</div>
                                                    <div className="text-sm text-gray-500">{option.desc}</div>
                                                </div>
                                                <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-indigo-600 flex items-center justify-center">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </button>
                                        ))}

                                        {step === 3 && (
                                            <form className="space-y-4" onSubmit={handleSubmit}>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-1">
                                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</label>
                                                        <input required name="name" onChange={handleInputChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="John Doe" />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</label>
                                                        <input required name="email" type="email" onChange={handleInputChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="john@company.com" />
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</label>
                                                    <input name="company" onChange={handleInputChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="Company Ltd (Optional)" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</label>
                                                    <textarea required name="message" rows={3} onChange={handleInputChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none" placeholder="Tell us a bit about your vision..." />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200 mt-4 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader2 className="animate-spin" size={20} />
                                                            <span>Sending...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Start My Project</span>
                                                            <ArrowRight size={20} />
                                                        </>
                                                    )}
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
