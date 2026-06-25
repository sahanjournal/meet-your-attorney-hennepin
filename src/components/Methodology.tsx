import React from "react";
import { OutboundLink } from "./Links";
import { Changelog } from "./Changelog";

export const Methodology = () => {
  return (
    <div className="copy">
      <p className="mt-3">
        Sahan Journal asked all five candidates running for the post to
        participate in Meet Your Hennepin County Attorney.
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
        Meet Your County Attorney does not collect any personal data from users.
        We do collect quiz responses anonymously to improve this resource and
        track aggregate results.
      </p>
      <p className="mt-3">
        We are pleased to make our code, which originally came from{" "}
        <OutboundLink to="https://www.thecity.nyc/">THE CITY</OutboundLink>,
        available on{" "}
        <OutboundLink to="https://github.com/sahanjournal/meet-your-attorney-hennepin">
          Github
        </OutboundLink>{" "}
        for use by other organizations. So far our project has been adapted for
        mayoral races in{" "}
        <OutboundLink to="https://projects.thecity.nyc/meet-your-mayor-2025-election-quiz-candidates/">
          New York
        </OutboundLink>
        ,{" "}
        <OutboundLink to="https://projects.laist.com/meet-your-mayor-2022-general/">
          Los Angeles
        </OutboundLink>
        ,{" "}
        <OutboundLink to="https://phillymayorquiz.com/">
          Philadelphia
        </OutboundLink>
        ,{" "}
        <OutboundLink to="https://projects.outliermedia.org/meet-your-mayor-detroit-2025-quiz/">
          Detroit
        </OutboundLink>{" "}
        and{" "}
        <OutboundLink to="https://projects.sahanjournal.com/meet-your-mayor-candidates-election-quiz/st-paul/">
          St. Paul
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
