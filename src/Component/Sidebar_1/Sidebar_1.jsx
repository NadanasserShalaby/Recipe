import logo from '../../assets/logo.png';
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import style from './Sidebar_1.module.scss'
export default function Sidebar_1({ onSelect }) {
    const [isOpen, setIsOpen] = useState(true); // Sidebar open/close (Desktop)
    const [mobileOpen, setMobileOpen] = useState(false); // Mobile overlay menu
    const [activeCategory, setActiveCategory] = useState("Meals"); // Default active category
    const navigate = useNavigate(); // Initialize navigation

    const handleSelect = (category) => {
        setActiveCategory(category); // Set active category
        onSelect(category);
        if (category === "Area" || category === "Ingredients" || category === "Meals") {
            navigate("/"); // Navigate to Home component
        }
        setMobileOpen(false); // Close mobile menu after selecting
    };

    return (
        <>
            {/* Desktop Sidebar (Fixed) */}
            <div className={`fixed top-0 left-0 h-full bg-white shadow-lg p-4 transition-all duration-300 z-50 ${isOpen ? "w-64" : "w-16"} hidden md:flex flex-col`}>
                {/* Logo */}
                {isOpen && (
                    <div className="flex justify-center mb-6">
                        <img src={logo} alt="Recipe Logo" className="w-28" />
                    </div>
                )}

                {/* Navigation */}
                <nav className="flex flex-col gap-4">
                    {["Meals", "Ingredients", "Area"].map((category) => (
                        <button
                            key={category}
                            onClick={() => handleSelect(category)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-md font-semibold transition-all ${isOpen ? "justify-start" : "justify-center"
                                } ${activeCategory === category ? `${style.bttn}` : ""
                                }`}
                        >
                            <FaUtensils />
                            {isOpen && category}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Mobile Top Navbar */}
            <button className="fixed top-0 left-5" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Overlay Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-2 transform transition-transform duration-300 z-50 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
                <button onClick={() => setMobileOpen(false)} className="text-xl self-end mb-4">
                    <FaTimes />
                </button>
                {/* Logo */}
                {isOpen && (
                    <div className="flex justify-center mb-6">
                        <img src={logo} alt="Recipe Logo" className="w-28" />
                    </div>
                )}
                {/* Navigation */}
                <nav className="flex flex-col gap-4">
                    {["Meals", "Ingredients", "Area"].map((category) => (
                        <button
                            key={category}
                            onClick={() => handleSelect(category)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-md font-semibold ${activeCategory === category ? `${style.bttn}` : ""
                                }`}
                        >
                            <FaUtensils />
                            {category}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Background Overlay when Mobile Menu is Open */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={() => setMobileOpen(false)}></div>
            )}
        </>
    );
}




