import { ContactForm } from "@/components"

export default function Mobile() {
  return (
    <div
      style={{
        display: "flex",
        margin: "24px",
        flexDirection: "column",
        gap: "2em",
        lineHeight: "25px",
      }}
    >
      <div>
        <h1 style={{ fontFamily: "Alverata Light" }}>Daria Harper</h1>
        <h2>Founder</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light" }}>Camille Bacon </h1>
        <h2>Founder</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light" }}>Email</h1>
        <h2>info@jupiter-mag.com</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light" }}>Instagram</h1>
        <h2>@jupiter.magazine</h2>
      </div>

      <p style={{ maxWidth: "300px" }}>
        For press requests, please contact Hannah Gottlieb-Graham at{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="https://almacommunications.co/"
        >
          ALMA
        </a>
      </p>
      <ContactForm />
    </div>
  )
}
