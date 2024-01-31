import { useState } from "react";

import { SenderType } from "../types";

const MessageWrapper = ({
  type,
  content,
  citations,
}: {
  type: SenderType;
  content: string;
  citations?: string[];
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (type === SenderType.USER) {
    return (
      <div className="w-full flex justify-end mt-5">
        <div className="h-full rounded-lg p-2 w-full max-w-lg bg-blue-950">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col mt-5">
      <div className="rounded-lg p-2 w-full max-w-lg justify-self-end bg-[#3B3B3B]">
        {content}
        <div className="mt-5">
          <button
            onClick={toggleCollapse}
            className="bg-black text-white py-2 px-4 rounded-lg"
          >
            Show citation
          </button>
        </div>
      </div>
      <div className={`pl-4 pr-4 rounded-b-lg bg-[#3B3B3B] max-w-lg transition-all duration-500 ease-in-out ${isCollapsed ? 'max-h-0 opacity-0 overflow-hidden transform' : 'max-h-full opacity-100 transform'}`}>
        {citations && citations.length > 0
        ? citations.map((citation) => {
            const citationPage = citation.match(/(?<=\page:).*(?=\])/);
            return (
              <div className="h-full mt-4 box-border rounded-lg p-2 w-full italic max-w-lg justify-self-end">
                {`"${citation
                  .replace(/\([^()]*\)/g, "")
                  .replace(/\[.+?\]/, "")}" `}
                <a className="not-italic underline decoration-sky-500 text-cyan-400	">
                  Page {citationPage}
                </a>
              </div>
            );
          })
        : null}
      </div>
    </div>
  );
};

export default MessageWrapper;
