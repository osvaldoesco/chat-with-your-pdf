import { useState } from "react";

import { SenderType } from "../types";
import { usePage } from "../contexts/PageContext";

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
  const { setCurrentPage } = usePage()

  const haveCitations = citations && citations.length > 0

  const getCitationPage = (citation: string) => citation.match(/(?<=\page:).*(?=\])/);

  const pages = citations?.map((citation: string) => getCitationPage(citation))

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
          {haveCitations &&
            <div className="flex flex-row w-full">
              <button
                onClick={toggleCollapse}
                className="bg-black text-white py-2 px-4 rounded-lg"
              >
                Show citation
              </button>
              <div className="ml-5 flex flex-wrap content-center gap-x-2">
                {pages?.map((page, key) => {
                  return(
                    <a
                      key={key}
                      className="cursor-pointer not-italic underline decoration-sky-500 text-cyan-400"
                      onClick={()=>setCurrentPage(Number(page) - 1)}
                    >
                      {`Page ${Number(page)}`}
                    </a>
                  )
                })}
              </div>
            </div>
          }
        </div>
      </div>
      <div className={`pl-4 pr-4 h-full rounded-b-lg bg-[#3B3B3B] max-w-lg transition-all duration-500 ease-in-out ${isCollapsed ? 'max-h-0 opacity-0 overflow-hidden transform' : 'max-h-full opacity-100 transform'}`}>
        {haveCitations &&
          citations.map((citation, key) => {
            const citationPage = getCitationPage(citation);
            return (
              <div key={key} className="mt-4 box-border rounded-lg p-2 w-full italic max-w-lg justify-self-end">
                {`"${citation
                  .replace(/\([^()]*\)/g, "")
                  .replace(/\[.+?\]/, "")}" `}
                <a
                  className="cursor-pointer not-italic underline decoration-sky-500 text-cyan-400"
                  onClick={()=>setCurrentPage(Number(citationPage) - 1)}
                >
                  Page {citationPage}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MessageWrapper;
