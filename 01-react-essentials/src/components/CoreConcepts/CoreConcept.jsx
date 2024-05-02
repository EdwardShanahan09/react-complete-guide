import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "../CoreConcept/CoreConcept";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>

      <ul>
        {CORE_CONCEPTS.map((coreConcept, index) => (
          <CoreConcept key={index} {...coreConcept} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
