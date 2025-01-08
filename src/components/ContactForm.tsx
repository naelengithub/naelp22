// components/ContactForm.tsx
import DynamicShadowText from "./DynamicShadowText";
import { ContactUs } from "./contactForm/contactForm";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center gap-8 mb-12 md:flex-row md:justify-center">
      <span className="text-4xl mt-12">
        <DynamicShadowText text="Reach out!" />
      </span>
      <ContactUs />
    </div>
  );
};

export default ContactForm;
