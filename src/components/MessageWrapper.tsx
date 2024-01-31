import { SenderType } from "../types";

const MessageWrapper = ({type, content}: {type: SenderType, content: string}) => {
  if (type === SenderType.USER) {
    return(
      <div className="w-full flex justify-end mt-5">
        <div className="h-full rounded-lg p-2 w-full max-w-lg bg-[#aeaeae]">{content}</div>
      </div>
    )
  }

  return (
    <div className="w-full flex mt-5">
      <div className="h-full rounded-lg p-2 w-full max-w-lg justify-self-end bg-[#3B3B3B]">{content}</div>
    </div>
  )
}

export default MessageWrapper;