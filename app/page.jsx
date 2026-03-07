
"use client";

import { useMemo, useState } from "react";

export default function CMNCampaignWebsite() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    wardLga: "",
    role: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const volunteerSummary = useMemo(() => {
    return `Volunteer Interest%0AName:${encodeURIComponent(formData.fullName)}%0APhone:${encodeURIComponent(formData.phone)}`;
  }, [formData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xvzwovqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error("Submit failed");

      setSubmitted(true);
    } catch {
      alert("Submission failed");
    }
  }

  return (
    <div style={{fontFamily:"Arial",padding:"40px"}}>
      <h1>Comrade Mustapha Network</h1>
      <p><strong>Progress • Justice • People First</strong></p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{display:"grid",gap:"10px",maxWidth:"400px"}}>
          <input name="fullName" placeholder="Full Name" onChange={handleChange}/>
          <input name="phone" placeholder="Phone Number" onChange={handleChange}/>
          <input name="wardLga" placeholder="Ward / LGA" onChange={handleChange}/>
          <input name="role" placeholder="Role" onChange={handleChange}/>
          <textarea name="message" placeholder="Message" onChange={handleChange}/>
          <button type="submit">Submit Volunteer Interest</button>
        </form>
      ) : (
        <div>
          <p>Submission successful.</p>
          <a href={`https://wa.me/?text=${volunteerSummary}`}>Share via WhatsApp</a>
        </div>
      )}
    </div>
  );
}
