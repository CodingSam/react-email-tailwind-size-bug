import React from "react"
import { Body, Html, Tailwind } from "@react-email/components"

const Demo = () => {
  return <Html>
    <Tailwind config={{theme: {
      extend: {
        colors: {
          brand: "#007291",
        },
      },
    }}}>
      <Body>
        <div className="size-8">test</div>
      </Body>
    </Tailwind>
  </Html>
}

export default Demo