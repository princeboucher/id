import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Previous Experience",
  url: "https://www.linkedin.com/in/princeboucher",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Vana: Head of Marketing",
    url: "https://www.vana.xyz",
    description:
      "To shift the flow of data for a more prosperous world.",
    color: "#E95800",
  },
  {
    text: "Unit21: Sr Growth Marketing Manager",
    url: "https://www.unit21.ai",
    description:
      "Unit21 is a fully customizable platform that provides unprecedented control to reduce fraud loss by 50%+ and false positives by 85%+. The platform seamlessly integrates three products that can be used together or individually: Transaction Monitoring, Case Management, and Onboarding Orchestration.",
    color: "#1099A8",
  },
  {
    text: "U.S. Digital Response: Volunteer",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Supporting the Critical Needs of the Public. USDR is a nonprofit, nonpartisan organization that helps governments, nonprofits, and public entities respond quickly to critical public needs.",
    color: "#BC027F",
  },
  {
    text: "South Park Commons: Community Member & Marketing DRI",
    url: "https://www.southparkcommons.com/",
    description:
      "SPC is a home for the most talented technologists, builders, and domain-experts figuring out what's next—a community designed to turn the chaos of possibility into the clarity of conviction.",
    color: "#0D96F2",
  },
  {
    text: "AWS:Intersect: Digital Director",
    url: "https://www.youtube.com/watch?v=KSsnXlaIP0k",
    description:
      "Intersect is a 2-day celebration of music, art, and tech. With 25+ artists including Foo Fighters, Kacey Musgraves, Beck, and Anderson .Paak. Featuring art installations from Nonotak, Beeple, Kyttenjanae, Ouchhh, and more.",
    color: "#8EB814",
  },
 
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Prince Boucher
        <br />
        <span style={headingAccentStyles}>Applied Generalist</span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Visit <code style={codeStyles}>princeboucher.eth</code> to see this page
        on-chain.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>

<p style={paragraphStyles}>
Bridging activists, creatives, and technologists at the intersection of civic, media, and technology fulfill my purpose.
Over the past decade I've worked on some fun projects with 300 Entertainment, Interscope, Funny or Die, and even UnitedHealth. Over the past couple of years I've joined several communities that have been helpful with my development and growth as an artist, organizer, and entrepreneur.
Special shout out to the Global Shapers Community, Climate Reality, Fedtech, On Deck, & South Park Commons.
Below are a few of the companies I've worked for.

</p>

      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
