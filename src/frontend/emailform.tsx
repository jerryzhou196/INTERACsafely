import React, { FC } from "react";

// Define props type if needed
interface EmailFormProps {}

// Define the component
const EmailForm: FC<EmailFormProps> = () => {
  return (
    <form>
      <textarea
        id="emailContent"
        class="full-page-textarea"
        placeholder=""
      ></textarea>
    </form>
  );
};

export default EmailForm;
