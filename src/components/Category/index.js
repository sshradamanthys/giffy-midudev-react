import React from "react";
import { Link } from "wouter";

import "./styles.css";

export default function Category({ name, options = [] }) {
  return (
    <section>
      <h3>{name}</h3>
      <ul>
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link to={`/search/${singleOption}`} className="link">
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
