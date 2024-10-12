const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mt-4 text-lg">
          We would love to hear from you! Please reach out with any inquiries or
          feedback.
        </p>
        <p className="mt-2">You can contact us at:</p>
        <p className="mt-2 font-bold">Email: info@example.com</p>
        <p className="mt-2 font-bold">Phone: (123) 456-7890</p>
        {/* <p className="mt-4">
          Alternatively, you can fill out our{" "}
          <a href="/contact-form" className="text-blue-500">
            contact form
          </a>
          .
        </p> */}
      </div>
    </div>
  );
};

export default Contact;
