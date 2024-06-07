import React, { useState } from "react";
import Section from "../Section/Section";
import TabButton from "../TabButton";
import { EXAMPLES } from "../../data.js";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("components");

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  const tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  const selectTabContent = <p>Please select a topic!</p>;
  return (
    <Section title="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {!selectedTopic ? selectTabContent : tabContent}
    </Section>
  );
};

export default Examples;