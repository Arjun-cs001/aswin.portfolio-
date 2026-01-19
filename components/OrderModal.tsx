import React, { useState } from 'react';
import { X, Check, Loader2 } from 'lucide-react';
import { Button } from './Button';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'submitting' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    service: 'thumbnail',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitting');
    
    // Simulate API network request
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  const handleClose = () => {
    if (step === 'success') {
      setStep('form');
      setFormData({ name: '', email: '', discord: '', service: 'thumbnail', description: '' });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-zinc-900 border border-zinc-800 w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-1"
        >
            <X size={24} />
        </button>

        {step === 'form' || step === 'submitting' ? (
          <>
            <div className="mb-6">
              <h2 className="text-3xl font-black text-white mb-2">Start a Project</h2>
              <p className="text-zinc-400 text-sm">Fill out the details below and I'll get back to you within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors placeholder:text-zinc-700"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    disabled={step === 'submitting'}
                  />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Discord / Twitter</label>
                   <input 
                    type="text" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors placeholder:text-zinc-700"
                    placeholder="@username"
                    value={formData.discord}
                    onChange={e => setFormData({...formData, discord: e.target.value})}
                    disabled={step === 'submitting'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors placeholder:text-zinc-700"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  disabled={step === 'submitting'}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Service Required</label>
                <div className="relative">
                  <select 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors appearance-none cursor-pointer"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    disabled={step === 'submitting'}
                  >
                    <option value="thumbnail">YouTube Thumbnail</option>
                    <option value="thumbnail_variant">Thumbnail + Variant</option>
                    <option value="bundle">Thumbnail Bundle (5x)</option>
                    <option value="audit">Channel Audit</option>
                    <option value="banner">YouTube Banner</option>
                    <option value="custom">Custom Project</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8c59e4] transition-colors resize-none placeholder:text-zinc-700"
                  placeholder="Tell me about your video idea, target audience, and any specific styles you like..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  disabled={step === 'submitting'}
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" fullWidth disabled={step === 'submitting'}>
                  {step === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Request Received!</h3>
            <p className="text-zinc-400 mb-8 max-w-xs mx-auto">
              Thanks {formData.name}! I'll review your project details and send a response to <span className="text-white font-medium">{formData.email}</span> shortly.
            </p>
            <Button onClick={handleClose} variant="secondary">Close</Button>
          </div>
        )}
      </div>
    </div>
  );
};