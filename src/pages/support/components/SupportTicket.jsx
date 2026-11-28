"use client";

import { useRef, useState } from "react";

import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitSupportTicket } from "../submit-ticket";

const emptyTicket = { name: "", email: "", category: "", subject: "", message: "" };
const categories = [
  ["enrollment", "Account & Practice"], ["certificate", "Reports & Portfolio"],
  ["payment", "Plans & Credits"], ["technical", "Technical Support"], ["other", "Other"],
];

export default function SupportTicket() {
  const [ticket, setTicket] = useState(emptyTicket);
  const [status, setStatus] = useState("idle");
  const submitting = useRef(false);
  const update = (name, value) => {
    setTicket(previous => ({ ...previous, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  return (
    <section id="support-form" className="bg-white px-5 py-20 sm:px-8" aria-labelledby="support-ticket-title">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#fa7405]">Support Ticket</p>
          <h2 id="support-ticket-title" className="mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1.2] tracking-[-0.04em] text-[#252525]">Submit a Support Ticket</h2>
          <p className="mt-4 text-[14px] leading-[1.8] text-[#707070]">Need help with a practice session, credits, or your account? Share the details below.</p>
        </div>
        {status === "success" ? (
          <div role="status" className="rounded-[25px] border border-[#fff1e3] p-8 text-center sm:p-12">
            <CheckCircle2 size={42} className="mx-auto text-[#fa7405]" />
            <h3 className="mt-5 text-2xl font-semibold text-[#252525]">Email draft opened</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#707070]">Send the draft in your email app to contact the AntIntern team.</p>
            <a href="/" className="support-primary-button mt-6">Back to Home <ArrowUpRight size={16} /></a>
            <button type="button" className="mx-auto mt-5 block text-[13px] text-[#fa7405] underline" onClick={() => setStatus("idle")}>Submit another ticket</button>
          </div>
        ) : (
          <form className="support-ticket-form space-y-6 rounded-[25px] border border-[#fff1e3] p-6 shadow-[0_6px_20px_rgba(37,53,81,0.025)] sm:p-8"
            onSubmit={async event => {
              event.preventDefault();
              if (submitting.current) return;
              submitting.current = true;
              setStatus("submitting");
              try {
                await submitSupportTicket(ticket);
                setStatus("success");
                setTicket(emptyTicket);
              } catch {
                setStatus("error");
              } finally {
                submitting.current = false;
              }
            }}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="support-name">Full Name *</label><input id="support-name" autoComplete="name" required pattern=".*\S.*" value={ticket.name} onChange={e => update("name", e.target.value)} placeholder="Your name" /></div>
              <div><label htmlFor="support-email">Email Address *</label><input id="support-email" type="email" autoComplete="email" required value={ticket.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" /></div>
            </div>
            <div><label htmlFor="support-category">Category *</label><select id="support-category" required value={ticket.category} onChange={e => update("category", e.target.value)}><option value="">Select a category</option>{categories.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div>
            <div><label htmlFor="support-subject">Subject *</label><input id="support-subject" required pattern=".*\S.*" value={ticket.subject} onChange={e => update("subject", e.target.value)} placeholder="Brief description of your issue" /></div>
            <div><label htmlFor="support-message">Message *</label><textarea id="support-message" required rows={5} value={ticket.message} onChange={e => update("message", e.target.value)} placeholder="Include your interview track, session details, and any error message..." /></div>
            {status === "error" && <p role="alert" className="text-sm text-red-600">We couldn’t send your ticket. Please try again.</p>}
            <button type="submit" disabled={status === "submitting"} className="support-primary-button w-full disabled:cursor-wait disabled:opacity-60">{status === "submitting" ? <><Loader2 size={17} className="animate-spin" />Submitting...</> : <>Open Email Draft <ArrowUpRight size={16} /></>}</button>
          </form>
        )}
      </div>
    </section>
  );
}
