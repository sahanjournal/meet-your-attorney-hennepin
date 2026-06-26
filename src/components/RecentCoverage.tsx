import React from "react";
import { OutboundLink } from "./Links";
import { track } from "@amplitude/analytics-browser";

const LINKS_JSON_URL_PREFIX = "https://sahanjournal.com/wp-json/wp/v2/posts";

const DONATION_URL = "https://sahanjournal.fundjournalism.org/";

const DEFAULT_LINKS = [
  {
    text: "Minnesota officials sue federal government for evidence in Renee Good, Alex Pretti killings",
    href: "https://sahanjournal.com/public-safety/keith-ellison-mary-moriarty-sue-federal-government-good-pretti-evidence/",
  },
  {
    text: "Hennepin County Attorney files felony charges against ICE agent for pointing gun at driver",
    href: "https://sahanjournal.com/public-safety/hennepin-county-attorney-felony-charges-ice-agent-assault-gun/",
  },
  {
    text: "ICE agent charged in shooting of Venezuelan man in north Minneapolis",
    href: "https://sahanjournal.com/immigration/ice-agent-charged-north-minneapolis-shooting/",
  },
];

const testValidSetOfLinks = (links: any[]) => {
  if (!Array.isArray(links)) {
    throw new Error("Links is not an array");
  }
  if (links.length !== 3) {
    throw new Error("Links array is not the correct length");
  }
  links.forEach((link) => {
    if (typeof link.text !== "string" && link.text.length > 5) {
      throw new Error("Link text is not a string");
    }
    if (typeof link.href !== "string" && link.href.length > 5) {
      throw new Error("Link href is not a string");
    }
  });
};

export const RecentCoverage: React.FC = () => {
  const [links, setLinks] = React.useState(DEFAULT_LINKS);

  React.useEffect(() => {
    fetch(`${LINKS_JSON_URL_PREFIX}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch JSON");
        }
        return response.json();
      })
      .then((json) => {
        const formattedLinks = json.map((item: any) => ({
          text: item.title.rendered,
          href: item.link,
        }));

        // Filter out links that are "Meet Your Attorney" related:
        const filteredLinks = formattedLinks
          .filter(
            (link: any) =>
              link.href && !link.href.includes(process.env.GATSBY_SLUG),
          )
          .slice(0, 3);

        testValidSetOfLinks(filteredLinks);
        return filteredLinks;
      })
      .then((filteredLinks) => setLinks(filteredLinks))
      .catch((error) => console.error("Error loading Links JSON:", error));
  }, []);

  return (
    <>
      <div className="eyebrow mb-2 mt-3">SAHAN JOURNAL</div>
      <ul>
        {links.map((link, i) => (
          <li key={i} className="label is-flex mb-0">
            <div className="mr-2 mt-1">●</div>{" "}
            <OutboundLink
              to={link.href}
              className="copy has-text-left ml-0"
              style={{ lineHeight: "1.4rem" }}
            >
              {link.text}
            </OutboundLink>
          </li>
        ))}
      </ul>
      <OutboundLink to={DONATION_URL}>
        <div
          className="button is-white is-small mt-3"
          aria-label="Donate to Sahan Journal"
          onClick={() => {
            track("Clicked Sahan Journal Donate button");
          }}
        >
          Support this work
        </div>
      </OutboundLink>
    </>
  );
};
