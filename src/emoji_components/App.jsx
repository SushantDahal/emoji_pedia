import React from "react";
import Entry from "./Entry";
import emoji from "../emojiPedia";

function createEntry(EntryTerm) {
  return (
    <>
      <Entry
        key={EntryTerm.id}
        name={EntryTerm.name}
        emoji={EntryTerm.emoji}
        description={EntryTerm.meaning}
      />
    </>
  );
}

function App() {
  return (
    <>
      <h1 className="heading">
        <span>Emoji Pedia</span>
      </h1>
      <dl className="dictionery">
        {emoji.map(createEntry)}
        {/* <Entry
          name="Tense Bicep"
          emoji="💪"
          description="You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        <Entry
          name=" Grinning Face"
          emoji="😀"
          description="It is often used to simply say hello, to express joy or excitement about something, or to break up a short text. Happiness and good mood are other associations associated with this emoji."
        />
        <Entry
          name="Nerd Face"
          emoji="🤓"
          description="Nerd emoji 🤓 is a face with big glasses, an awkward smile and buck teeth. It's often used in a humorous or ironic way to describe nerds or to express how smart you are. "
        /> */}
      </dl>
    </>
  );
}
export default App;
