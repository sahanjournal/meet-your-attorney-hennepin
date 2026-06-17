import React from "react";
import { OutboundLink } from "./Links";
import { Changelog } from "./Changelog";

export const Methodology = () => {
  return (
    <div className="copy">
      <p className="mt-3">
        Sahan Journal sent the quiz to all attorney candidates on the ballot,
        who all appear in Meet Your Attorney.
      </p>
      <p className="mt-3">
        In the quiz, candidates score 1 point for each answer that matches your
        answer. A candidate’s response of “no position” does not count toward
        their score.
      </p>
      <p className="mt-3">
        At the end of the quiz, you can select up to three issues that matter to
        you the most. Each 1-point score in those categories counts as 2 points
        in the final tally.
      </p>
      <p className="mt-3">
        Meet Your Attorney does not collect any personal data from users. We do
        collect quiz responses anonymously to improve this resource and track
        aggregate results.
      </p>
      <p className="mt-3">
        As in 2021, we are pleased to make our code, which originally came from{" "}
        <OutboundLink to="https://www.thecity.nyc/">THE CITY</OutboundLink>,
        available on{" "}
        <OutboundLink to="https://github.com/sahanjournal/meet-your-attorney-hennepin">
          Github
        </OutboundLink>{" "}
        for use by other organizations. So far our project has been adapted for
        mayoral races in{" "}
        <OutboundLink to="https://projects.laist.com/meet-your-mayor-2022-general/">
          Los Angeles
        </OutboundLink>{" "}
        and{" "}
        <OutboundLink to="https://phillymayorquiz.com/">
          Philadelphia
        </OutboundLink>
        . Could your city be next?{" "}
        <OutboundLink to="mailto:contact@sahanjournal.com">
          Drop us a line
        </OutboundLink>
        .
      </p>

      <Changelog />
    </div>
  );
};
