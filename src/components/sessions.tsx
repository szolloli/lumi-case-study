import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { mockClients, mockProducts } from "../data/data";
import { UserCircle, Video } from "lucide-react";
import { formatEur } from "@/lib/utils";
import { useSessionStore } from "@/state/sessionStore";

function Sessions() {
  const { sessions } = useSessionStore();

  return (
    <div className="flex flex-col w-full border-2 rounded-lg">
      <div className="flex flex-row justify-between w-full pl-4 pr-8 font-bold my-4">
        {/* Name */}
        <div className="flex flex-1 flex-col items-start">Name</div>
        {/* Client */}
        <div className="flex flex-1 flex-col items-start">Client</div>
        {/* Date */}
        <div className="flex flex-1 flex-col items-start">Date</div>
        {/* Time */}
        <div className="flex flex-1 flex-col items-start">Time</div>
        {/* Duration */}
        <div className="flex flex-1 flex-col items-start">Duration</div>
      </div>
      <div className="h-1 bg-secondary"></div>
      <Accordion
        type="single"
        className="w-full overflow-scroll max-h-[70vh]"
        collapsible
      >
        {sessions
          .sort((sessionA, sessionB) =>
            sessionA.date < sessionB.date ? -1 : 1,
          )
          .map((session) => (
            <AccordionItem key={session.id} value={session.id}>
              <AccordionTrigger className="hover:no-underline data-[state=open]:bg-secondary px-4 text-left">
                {/* Name */}
                <div className="flex flex-1 flex-col items-start">
                  <p>{session.name}</p>
                  <p className="text-sm  text-gray-400">
                    {mockProducts.find((p) => p.id === session.productId)?.name}
                  </p>
                </div>
                {/* Client */}
                <div className="flex flex-1 flex-row gap-2 items-center justify-start text-gray-600 text-sm">
                  <UserCircle size={36} />
                  {mockClients.find((c) => c.id === session.clientId)?.name}
                </div>
                {/* Date */}
                <div className="flex flex-1 flex-row gap-2 text-gray-600 text-sm">
                  {session.date.toLocaleDateString("en-GB", {
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                {/* Time */}
                <div className="flex flex-1 flex-row justify-between w-24 text-gray-600 text-sm">
                  <div>{session.date.toLocaleTimeString()}</div>
                </div>
                {/* Duration */}
                <div className="flex flex-1 flex-row justify-between w-24 text-gray-600 text-sm">
                  <div>{session.durationMinutes} min</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col pl-4 pr-8 gap-4">
                <div className="flex w-full h-[1px] bg-muted mb-2"></div>
                <div className="flex flex-row">
                  <div className="flex flex-1 flex-col justify-between w-24 text-gray-600 text-sm items-start">
                    <div className="font-bold">Location</div>
                    <div className="flex flex-row gap-1 items-center">
                      {session.location === "online" && (
                        <a
                          target="blank"
                          // TODO: eReplace with the actual link to the meeting
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          className="text-primary"
                        >
                          <Video size={24} />
                        </a>
                      )}
                      {session.location}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between w-24 text-gray-600 text-sm items-start">
                    <div className="font-bold">Payment method</div>
                    <div>{session.paymentMethod}</div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between w-24 text-gray-600 text-sm items-start">
                    <div className="font-bold">Payment finalization</div>
                    <div>{session.paymentFinalization}</div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between w-24 text-gray-600 text-sm items-start">
                    <div className="font-bold">Price</div>
                    <div className="flex flex-row gap-2">
                      {parseFloat(session.discount) != 0 ? (
                        <>
                          {formatEur(
                            parseFloat(session.price) -
                              parseFloat(session.discount),
                          )}
                          <div className="line-through text-gray-400">
                            {formatEur(parseFloat(session.price))}
                          </div>
                        </>
                      ) : (
                        formatEur(parseFloat(session.price))
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between w-24 text-gray-600 text-sm items-start">
                    <div className="font-bold">Generate invoice</div>
                    <div>{session.generateInvoice.toLocaleString()}</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
}

export default Sessions;
