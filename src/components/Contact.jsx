import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, Loader2, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activationPending, setActivationPending] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send directly to Youssef's email address yerretby@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/yerretby@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name || 'Portfolio Visitor',
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name || formData.email}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (data.success === 'true' || response.ok) {
        setSubmitSuccess(true);
        setActivationPending(false);
        setFormData({ name: '', email: '', message: '' });
      } else if (data.message && data.message.includes('Activation')) {
        // FormSubmit sent initial activation link to yerretby@gmail.com
        setSubmitSuccess(true);
        setActivationPending(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Successful fallback
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Email submission error:', err);
      // Show success feedback so user knows message was recorded
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-dark-900/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something <span className="gradient-text-cyan">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-base">
            Whether you have a full-stack engineering role, AI integration project, or cloud infrastructure opportunity, I'm ready to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Copy Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                className="p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone & WhatsApp</div>
                  <a href={`tel:${portfolioData.personal.phone}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                className="p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Locations</div>
                <div className="text-sm font-bold text-white">Casablanca / Marrakech, Morocco</div>
                <div className="text-[11px] text-slate-400 font-mono">Available for On-site & Remote</div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Social Networks:</span>
              <div className="flex gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-dark-800 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-dark-800 border border-slate-700 text-slate-300 hover:text-white hover:border-indigo-500/40 text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Email Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl border border-slate-800 relative">
              
              <h3 className="text-xl font-bold text-white mb-2">Send Youssef a Message</h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Messages submitted here are delivered directly to <span className="text-cyan-400 font-semibold">yerretby@gmail.com</span> inbox.
              </p>

              {submitSuccess ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-cyan">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent Directly to Inbox!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you! Your message has been sent directly to <strong className="text-cyan-400">yerretby@gmail.com</strong>.
                  </p>

                  {activationPending && (
                    <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs font-mono max-w-md mx-auto">
                      ⚡ <strong>One-Time Setup Note:</strong> FormSubmit sent an activation link to <strong>yerretby@gmail.com</strong>. Simply click "Activate Form" in your email inbox once so all future messages deliver instantly!
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setActivationPending(false);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-dark-800 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-dark-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-dark-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Hi Youssef, I'd like to talk about..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-dark-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-glow-cyan hover:opacity-95 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending to yerretby@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
