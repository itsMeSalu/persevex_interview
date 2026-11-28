"use client";


import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  UserRound,
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import "./AmbassadorApplication.css";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  year: "",
  branch: "",
  linkedin: "",
  instagram: "",
  motivation: "",
};

const yearOptions = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Postgraduate",
];

const fields = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Enter your full name",
    Icon: UserRound,
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "you@example.com",
    type: "email",
    Icon: Mail,
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "tel",
    Icon: Phone,
    required: true,
  },
  {
    name: "college",
    label: "College / University",
    placeholder: "Enter your college name",
    Icon: GraduationCap,
    required: true,
  },
  {
    name: "branch",
    label: "Branch / Department",
    placeholder: "e.g. Computer Science",
    Icon: BookOpen,
    required: true,
  },
  {
    name: "linkedin",
    label: "LinkedIn Profile",
    placeholder: "https://linkedin.com/in/username",
    type: "url",
    Icon: FaLinkedinIn,
    required: false,
  },
  {
    name: "instagram",
    label: "Instagram Handle",
    placeholder: "@yourusername",
    Icon: FaInstagram,
    required: false,
  },
];

function validateForm(data) {
  const errors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      data.email.trim()
    )
  ) {
    errors.email = "Enter a valid email address.";
  }

  const digits = data.phone.replace(/\D/g, "");

  if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!data.college.trim()) {
    errors.college = "College / University is required.";
  }

  if (!yearOptions.includes(data.year)) {
    errors.year = "Select your year of study.";
  }

  if (!data.branch.trim()) {
    errors.branch = "Branch / Department is required.";
  }

  if (!data.motivation.trim()) {
    errors.motivation = "Please tell us your motivation.";
  }

  if (data.linkedin.trim()) {
    try {
      const url = new URL(data.linkedin.trim());

      if (
        !["http:", "https:"].includes(url.protocol) ||
        !/(^|\.)linkedin\.com$/i.test(url.hostname)
      ) {
        errors.linkedin =
          "Enter a valid LinkedIn profile URL.";
      }
    } catch {
      errors.linkedin =
        "Enter a valid LinkedIn profile URL.";
    }
  }

  return errors;
}

export default function AmbassadorApplication({
  onSubmitApplication,
}) {
  const sectionRef = useRef(null);

  const [motionReady, setMotionReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  /*
   * Start animation when the section becomes visible.
   * Play only once, not every time the user scrolls.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(section);

    setMotionReady(true);

    return () => {
      observer.disconnect();
    };
  }, []);

  const updateField = (name, value) => {
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    if (status === "error") {
      setStatus("idle");
      setSubmitError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalid =
        Object.keys(validationErrors)[0];

      document
        .getElementById(`amb-${firstInvalid}`)
        ?.focus();

      return;
    }

    if (typeof onSubmitApplication !== "function") {
      setStatus("error");
      setSubmitError(
        "Application submission is not connected yet. Please configure the submission handler."
      );
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      const payload = {
        ...form,
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        college: form.college.trim(),
        branch: form.branch.trim(),
        linkedin: form.linkedin.trim(),
        instagram: form.instagram.trim(),
        motivation: form.motivation.trim(),
      };

      await onSubmitApplication(payload);

      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus("error");
      setSubmitError(
        "We couldn't submit your application. Please try again."
      );
    }
  };

  const renderField = (field, index) => {
    const Icon = field.Icon;

    return (
      <div
        className="amb-field amb-reveal"
        key={field.name}
        style={{
          "--amb-delay": `${0.23 + index * 0.075}s`,
        }}
      >
        <label htmlFor={`amb-${field.name}`}>
          {field.label}

          {field.required && (
            <span className="amb-required"> *</span>
          )}
        </label>

        <div
          className={`amb-input-wrapper ${
            errors[field.name] ? "amb-invalid" : ""
          }`}
        >
          <Icon
            size={17}
            className="amb-field-icon"
            aria-hidden="true"
          />

          <input
            id={`amb-${field.name}`}
            type={field.type || "text"}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={(event) =>
              updateField(field.name, event.target.value)
            }
            required={!!field.required}
            aria-invalid={!!errors[field.name]}
            aria-describedby={
              errors[field.name]
                ? `amb-${field.name}-error`
                : undefined
            }
          />
        </div>

        {errors[field.name] && (
          <span
            id={`amb-${field.name}-error`}
            className="amb-error"
            role="alert"
          >
            {errors[field.name]}
          </span>
        )}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="apply"
      className={[
        "amb-application-section",
        motionReady ? "amb-motion-ready" : "",
        isVisible ? "amb-in-view" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="amb-application-container">
        <div className="amb-unified-layout">

          {/* =================================
              LEFT SECTION
          ================================= */}

          <div className="amb-intro">
            <div className="amb-intro-inner">

              <div
                className="amb-eyebrow amb-reveal"
                style={{ "--amb-delay": "0.04s" }}
              >
                <Sparkles size={14} />
                <span>CAMPUS AMBASSADOR PROGRAM</span>
              </div>

              <h2 className="amb-intro-title">
                <span className="amb-title-line">
                  <span
                    className="amb-reveal"
                    style={{ "--amb-delay": "0.12s" }}
                  >
                    Your Campus.
                  </span>
                </span>

                <span className="amb-title-line">
                  <span
                    className="amb-reveal"
                    style={{ "--amb-delay": "0.22s" }}
                  >
                    Your Influence.
                  </span>
                </span>

                <span className="amb-title-line">
                  <span
                    className="amb-title-blue amb-reveal"
                    style={{ "--amb-delay": "0.32s" }}
                  >
                    Your Opportunity.
                  </span>
                </span>
              </h2>

              <p
                className="amb-intro-description amb-reveal"
                style={{ "--amb-delay": "0.43s" }}
              >
                Represent AntIntern, grow your network,
                and create a meaningful impact on
                your campus.
              </p>

              <div
                className="amb-intro-accent amb-reveal"
                style={{ "--amb-delay": "0.53s" }}
              />

            </div>
          </div>

          {/* =================================
              RIGHT FORM SECTION
          ================================= */}

          <div className="amb-form-area">
            <div className="amb-form-heading">

              <span
                className="amb-form-kicker amb-reveal"
                style={{ "--amb-delay": "0.06s" }}
              >
                APPLICATION FORM
              </span>

              <h3
                className="amb-reveal"
                style={{ "--amb-delay": "0.14s" }}
              >
                Join the{" "}
                <span>Ambassador Program</span>
              </h3>

              <p
                className="amb-reveal"
                style={{ "--amb-delay": "0.21s" }}
              >
                Tell us about yourself and how you would support interview preparation on campus.
              </p>

            </div>

            <div className="amb-form-shell">

              {status === "success" ? (
                <div
                  className="amb-success"
                  role="status"
                >
                  <CheckCircle2 size={46} />

                  <h3>
                    Email draft opened
                  </h3>

                  <p>
                    Send the draft in your email app to share your application with AntIntern.
                  </p>

                  <a href="/" className="amb-home-link">Back to Home</a>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setForm(initialForm);
                    }}
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form
                  className="amb-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="amb-form-grid">

                    {fields
                      .slice(0, 4)
                      .map((field, index) =>
                        renderField(field, index)
                      )}

                    {/* YEAR OF STUDY */}
                    <div
                      className="amb-field amb-reveal"
                      style={{ "--amb-delay": "0.53s" }}
                    >
                      <label htmlFor="amb-year">
                        Year of Study
                        <span className="amb-required">
                          {" "}*
                        </span>
                      </label>

                      <div
                        className={`amb-input-wrapper amb-select-wrapper ${
                          errors.year ? "amb-invalid" : ""
                        }`}
                      >
                        <GraduationCap
                          size={17}
                          className="amb-field-icon"
                        />

                        <select
                          id="amb-year"
                          value={form.year}
                          onChange={(event) =>
                            updateField(
                              "year",
                              event.target.value
                            )
                          }
                          required
                          aria-invalid={!!errors.year}
                          aria-describedby={
                            errors.year
                              ? "amb-year-error"
                              : undefined
                          }
                        >
                          <option value="" disabled>
                            Select year
                          </option>

                          {yearOptions.map((year) => (
                            <option
                              key={year}
                              value={year}
                            >
                              {year}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={15}
                          className="amb-select-arrow"
                        />
                      </div>

                      {errors.year && (
                        <span
                          id="amb-year-error"
                          className="amb-error"
                          role="alert"
                        >
                          {errors.year}
                        </span>
                      )}
                    </div>

                    {fields
                      .slice(4)
                      .map((field, index) =>
                        renderField(field, index + 5)
                      )}

                  </div>

                  {/* MOTIVATION FIELD */}
                  <div
                    className="amb-field amb-motivation amb-reveal"
                    style={{ "--amb-delay": "0.82s" }}
                  >
                    <label htmlFor="amb-motivation">
                      Why do you want to be a Campus Ambassador?
                      <span className="amb-required">
                        {" "}*
                      </span>
                    </label>

                    <textarea
                      id="amb-motivation"
                      rows={3}
                      placeholder="Tell us about your motivation and what you hope to achieve..."
                      value={form.motivation}
                      onChange={(event) =>
                        updateField(
                          "motivation",
                          event.target.value
                        )
                      }
                      className={
                        errors.motivation
                          ? "amb-invalid"
                          : ""
                      }
                      required
                      aria-invalid={!!errors.motivation}
                      aria-describedby={
                        errors.motivation
                          ? "amb-motivation-error"
                          : undefined
                      }
                    />

                    {errors.motivation && (
                      <span
                        id="amb-motivation-error"
                        className="amb-error"
                        role="alert"
                      >
                        {errors.motivation}
                      </span>
                    )}
                  </div>

                  {submitError && (
                    <p
                      className="amb-submit-error"
                      role="alert"
                    >
                      {submitError}
                    </p>
                  )}

                  {/* SUBMIT BUTTON */}
                  <div
                    className="amb-form-footer amb-reveal"
                    style={{ "--amb-delay": "0.94s" }}
                  >
                    <button
                      type="submit"
                      className="amb-submit-button"
                      disabled={
                        status === "submitting"
                      }
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2
                            size={17}
                            className="amb-spinner"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Open Email Draft
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <p className="amb-form-note">
                      Fields marked{" "}
                      <span>*</span> are required.
                    </p>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
