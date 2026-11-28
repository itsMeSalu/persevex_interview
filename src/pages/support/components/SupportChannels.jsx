import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const channels = [
  { Icon: Mail, title: "Email Support", description: "Get a response within 24 hours", value: "support@antintern.com", href: "mailto:support@antintern.com" },
  { Icon: Phone, title: "Phone Support", description: "Mon-Sat, 9 AM - 6 PM IST", value: "+91 86601 28339", href: "tel:+918660128339" },
  { Icon: MessageCircle, title: "WhatsApp", description: "Quick responses on WhatsApp", value: "Chat with us", href: "https://wa.me/918660128339" },
];

export default function SupportChannels() {
  return (
    <section id="support-channels" className="px-5 py-14 sm:px-8" aria-label="Support contact channels">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {channels.map(({ Icon, title, description, value, href }) => (
          <a key={title} href={href} target={href.startsWith("https") ? "_blank" : undefined} rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
            className="group rounded-[22px] border border-[#fff1e3] bg-white p-7 shadow-[0_6px_20px_rgba(37,53,81,0.025)] transition-all hover:-translate-y-1 hover:border-[#f4cfac]">
            <Icon size={24} className="text-[#fa7405]" />
            <h3 className="mt-5 text-[19px] font-semibold text-[#252525]">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[#707070]">{description}</p>
            <span className="mt-5 flex items-center gap-2 text-[13px] font-medium text-[#fa7405]">{value}<ArrowUpRight size={16} /></span>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#support-form" className="support-primary-button">Submit a Support Ticket <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
