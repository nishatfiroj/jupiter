import { ContactForm } from "@/components"
import { ContactSection, FormSection, Main } from "./styled"

export default function Desktop() {
  return (
    <Main>
      <ContactSection>
        <div>
          <h1 style={{ letterSpacing: "4px" }}>Daria Harper</h1>
          <h2 style={{ letterSpacing: "4px" }}>Founder</h2>
          <h3>Dariaharper@gmail.com</h3>
        </div>
        <div>
          <h1 style={{ letterSpacing: "4px" }}>Camille Bacon </h1>
          <h2 style={{ letterSpacing: "4px" }}>Founder</h2>
          <h3>camillebacon@gmail.com</h3>
        </div>
        <div>
          <h2 style={{ letterSpacing: "4px" }}>Instagram</h2>
          <h3>@jupiter.magazine</h3>
        </div>
      </ContactSection>
      <FormSection>
        <ContactForm />
      </FormSection>
    </Main>
  )
}
