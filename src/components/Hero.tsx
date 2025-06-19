import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';
import { contactInfo } from '../data';
// If using Vite or Webpack 5+, use the .default or .src property:
import profileImage from './Profile.jpg'; // ✅ Must be relative to this file

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="uppercase tracking-wide text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 animate-fadeIn">
              Developer - Student
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slideUp">
              Karthik P
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-slideUp animation-delay-100">
              Information Technology professional with expertise in web development, 
              Python programming, and UI/UX design, creating impactful digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeIn animation-delay-200">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-md border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8 flex items-center gap-x-6 justify-center md:justify-start animate-fadeIn animation-delay-300">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-all duration-300 hover:scale-110"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="w-full md:w-2/5 flex-shrink-0 animate-fadeIn animation-delay-100 relative flex justify-center md:justify-end">
            <div className="relative group">
              {/* Animated background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-40 animate-pulse transition-opacity duration-500"></div>
              
              {/* Outer ring with gradient */}
              <div className="relative w-96 h-96 rounded-full p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                {/* Inner ring */}
                <div className="w-full h-full rounded-full p-1 bg-white dark:bg-gray-900">
                  <img
                    src={
                      typeof profileImage === 'string'
                        ? profileImage
                        : (profileImage as any).src || (profileImage as any).default
                    }
                    alt="Karthik P"
                    className="w-full h-full rounded-full object-cover shadow-xl group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Floating elements for extra effect */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-300 opacity-60"></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};