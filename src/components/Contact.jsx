import { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiGithub,
  SiCodeforces,
  SiLeetcode,
  SiMessenger,
  SiX,
  SiWhatsapp,
} from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "fa7f8ec7-a4a8-424b-8efd-9b6387755682"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(
          "🎉 Message Received! Thank you for reaching out to me. 🙌 I'll get back to you shortly! 😊✨"
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#0f1629] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop us a message!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">hafizsakib5@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">
                      33/A, Chatteshori Road, Chawkbazar, Chattogram, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone No</h3>
                    <p className="text-gray-400">+8801516195904</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Follow Me</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.facebook.com/Sakib1056"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="bg-blue-600/10 p-3 rounded-lg hover:bg-blue-600/20">
                      <SiFacebook className="w-6 h-6 text-blue-500" />
                    </div>
                  </a>
                  <a
                    href="https://m.me/Sakib1056"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="bg-blue-600/20 p-3 rounded-lg hover:bg-blue-600/30">
                      <SiMessenger className="w-6 h-6 text-blue-400 hover:text-blue-500" />
                    </div>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=+8801516195904&text=Hello,%20more%20information!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="bg-green-600/20 p-3 rounded-lg hover:bg-green-600/30">
                      <SiWhatsapp className="w-6 h-6 text-green-400 hover:text-green-500" />
                    </div>
                  </a>
                  <a
                    href="https://x.com/hafiz_sakib1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="bg-black p-3 rounded-lg hover:bg-gray-800/30">
                      <SiX className="w-6 h-6 text-white hover:text-cyan-500" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/s_a_k_i_b_1056/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="bg-pink-600/10 p-3 rounded-lg hover:bg-pink-600/20">
                      <SiInstagram className="w-6 h-6 text-pink-500" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hafiz-sakib-96b8b3229/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="bg-blue-700/10 p-3 rounded-lg hover:bg-blue-600/20">
                      <SiLinkedin className="w-6 h-6 text-blue-600" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Hafiz-Sakib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="bg-gray-600/20 p-3 rounded-lg hover:bg-white">
                      <SiGithub className="w-6 h-6 text-black" />
                    </div>
                  </a>
                  <a
                    href="https://codeforces.com/profile/hafiz_sakib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="bg-blue-700/10 p-3 rounded-lg hover:bg-blue-600/20">
                      <SiCodeforces className="w-6 h-6 text-red-500" />
                    </div>
                  </a>
                  <a
                    href="https://leetcode.com/hafiz_Sakib/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="bg-blue-700/10 p-3 rounded-lg hover:bg-blue-600/20">
                      <SiLeetcode className="w-6 h-6 text-orange-600" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <>
                  {/* Background Blur */}
                  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50"></div>

                  {/* Modal */}
                  <div className="fixed inset-0 flex justify-center items-center z-50">
                    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white text-center w-80">
                      <p className="text-lg font-semibold mb-4">{status}</p>
                      <button
                        onClick={() => (window.location.href = "/")} // Redirect to homepage
                        className="px-4 py-2 bg-green-500 hover:bg-blue-600 text-white font-bold rounded transition-all"
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
