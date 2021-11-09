import React from "react";

export default function GoogleForm() {
  return (
    <div>
      <section className="container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScN_auV2PuObupSS6bR0T-wIM2TQlFjBOGqfpYaNIHxZsiYTQ/viewform?embedded=true"
          width="700"
          height="500"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          sandbox="allow-same-origin"
        />
      </section>
    </div>
  );
}
