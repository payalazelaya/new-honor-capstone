import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>I got your message!</h1>
      <p>Thank you for getting in touch, I'll get back to you as soon as I can!</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Lets go back to Homepage
      </Link>
    </div>
  </Layout>
)

export default Thanks
