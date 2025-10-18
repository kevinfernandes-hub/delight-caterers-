"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Please provide your name.';
    if (!form.email.trim()) return 'Please provide an email address.';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) return 'Please enter a valid email address.';
    if (!form.message.trim()) return 'Please include a brief description of your event.';
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    try {
      setSubmitting(true);
      await new Promise((res) => setTimeout(res, 700));
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Submission failed. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="contact-success" role="status">
        <h3>Thanks — we received your request</h3>
        <p>Our team will review your details and get back to you within 1 business day.</p>
        <button className="btn" onClick={() => setSuccess(false)}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {error && <div className="form-error" role="alert">{error}</div>}

      <label htmlFor="cf-name">Name</label>
      <input id="cf-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" required />

      <label htmlFor="cf-email">Email</label>
      <input id="cf-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />

      <label htmlFor="cf-message">Event details</label>
      <textarea id="cf-message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Date, headcount, preferred menu, venue, any special requests" required />

      <div className="form-actions">
        <button type="submit" className="btn primary" disabled={submitting}>{submitting ? 'Sending…' : 'Request Proposal'}</button>
      </div>
    </form>
  );
}