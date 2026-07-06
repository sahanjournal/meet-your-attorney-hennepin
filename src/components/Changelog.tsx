import React from "react";

/**
 * An array of objects, which include a date in the format like "May 21, 2025",
 * and an array of React fragments that describe changes to the quiz.
 *
 * NOTE: Please use the <OutboundLink> component for hyperlinks.
 */
const CHANGELOG_ENTRIES: { date: string; changes: React.ReactNode[] }[] = [
  {
    date: "July 6, 2026",
    changes: [<>Anders Folk's answer to question #9 has been corrected.</>],
  },
];

export const Changelog = () => {
  if (CHANGELOG_ENTRIES.length > 0)
    return (
      <>
        <p className="mt-3 has-text-weight-semibold">Updates</p>
        <div className="my-3">
          {CHANGELOG_ENTRIES.map((entry, i) => (
            <div key={i}>
              {entry.date}
              <ul className="mt-1">
                {entry.changes.map((change, i) => (
                  <li className="label is-flex my-0" key={i}>
                    <div className="mr-2">●</div>{" "}
                    <span className="copy has-text-left ml-0 mb-1">
                      {change}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    );
  else return <></>;
};
