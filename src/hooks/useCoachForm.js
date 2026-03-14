import { useState } from "react";

const INIT = {
  name: "", email: "", phone: "", dob: "",
  qualification: "", expertise: "", availability: "",
};

export function useCoachForm() {
  const [form, setForm] = useState(INIT);

  const set = (field, val) => setForm((prev) => ({ ...prev, [field]: val }));
  const reset = () => setForm(INIT);
  const submit = () => {
    if (!form.name.trim()) { alert("Name is required"); return; }
    if (!form.email.trim()) { alert("Email is required"); return; }
    alert(`Coach "${form.name}" added successfully!`);
    reset();
  };

  return { form, set, submit, reset };
}
