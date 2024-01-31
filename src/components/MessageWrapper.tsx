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
      <div className="h-full rounded-lg p-2 w-full max-w-lg justify-self-end bg-[#3B3B3B]">
        {content}
      </div>
      {citations && citations.length > 0
        ? citations.map((citation) => {
            const citationPage = citation.match(/(?<=\page:).*(?=\])/);
            return (
              <div className="h-full mt-4 box-border rounded-lg p-2 w-full italic max-w-lg justify-self-end bg-[#3B3B3B]">
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
  );
};

export default MessageWrapper;
