import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DatePicker from "./datePicker";
import Combobox from "./combobox";
import { Session, mockClients, mockProducts } from "../data/data";
import { Checkbox } from "./ui/checkbox";
import { useMemo, useState } from "react";
import { PlusCircle } from "lucide-react";
import Select from "./select";
import { formatEur } from "@/lib/utils";
import { useSessionStore } from "@/state/sessionStore";

const Times = Array(24)
  .fill(0)
  .map((_, i) =>
    ["00", "15", "30", "45"].map(
      (minutes) =>
        `${i.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        })}:${minutes}`,
    ),
  )
  .flat();

const Durations = Array(12)
  .fill(0)
  .map((_, i) => (i + 1) * 15 + " min")
  .flat();

function AddSession() {
  const [newSession, setNewSession] = useState<Session & { time: Date }>({});
  const [open, setOpen] = useState(false);
  const { addSession } = useSessionStore();

  const isButtonDisabled = useMemo(() => {
    return (
      !newSession.name ||
      !newSession.clientId ||
      !newSession.productId ||
      !newSession.date ||
      !newSession.time ||
      !newSession.price ||
      !newSession.discount ||
      !newSession.paymentMethod ||
      !newSession.paymentFinalization ||
      !newSession.location ||
      !newSession.durationMinutes
    );
  }, [newSession]);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (open) setNewSession({});
      }}
    >
      <DialogTrigger asChild>
        <Button variant="default">
          <PlusCircle size={20} className="mr-2" />
          Add session
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add session</DialogTitle>
          <DialogDescription>
            Fill in the details of your session. Click "Add session" when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newSession.name ?? "Session name"}
              onChange={(e) =>
                setNewSession({ ...newSession, name: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col flex-1 gap-1">
              <Label htmlFor="client" className="text-left">
                Client
              </Label>
              <Combobox
                options={mockClients}
                type="client"
                value={
                  mockClients.find(
                    (option) => option.id === newSession.clientId,
                  )?.name
                }
                onChange={(value) => {
                  const client = mockClients.find(
                    (option) => option.name === value,
                  );
                  // Preset default client values
                  setNewSession({
                    ...newSession,
                    // We are sure that the client exists because we are using
                    // the options prop to filter the list of options.
                    clientId: mockClients.find(
                      (option) => option.name === value,
                    )!.id,
                    discount: client!.discount,
                    generateInvoice: client!.generateInvoices,
                    location: client!.locationPreference,
                    paymentMethod: client!.paymentMethodPreference,
                  });
                }}
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <Label htmlFor="product" className="text-left">
                Product
              </Label>
              <Combobox
                options={mockProducts}
                type="product"
                value={
                  mockProducts.find(
                    (option) => option.id === newSession.productId,
                  )?.name
                }
                onChange={(value) => {
                  const product = mockProducts.find(
                    (option) => option.name === value,
                  );
                  // Preset default product values
                  setNewSession({
                    ...newSession,
                    // We are sure that the product exists because we are using
                    // the options prop to filter the list of options.
                    productId: mockProducts.find(
                      (option) => option.name === value,
                    )!.id,
                    durationMinutes: product!.durationMinutes,
                    price: product!.price,
                    paymentFinalization: product!.paymentFinalization,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 items-end">
            <div className="flex flex-1 flex-col gap-1">
              <Label htmlFor="date">Date</Label>
              <DatePicker
                date={newSession.date}
                onSelect={(date) => setNewSession({ ...newSession, date })}
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <Label htmlFor="time">Time</Label>
              <Select
                options={Times}
                type="time"
                value={newSession.time?.toLocaleTimeString("en-US", {
                  hourCycle: "h24",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                onChange={(value) => {
                  const time = new Date();
                  time.setHours(
                    parseInt(value.split(":")[0]),
                    parseInt(value.split(":")[1]),
                  );
                  setNewSession({ ...newSession, time });
                }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <Label htmlFor="duration">Duration</Label>
              <Select
                options={Durations}
                type="duration"
                value={newSession?.durationMinutes?.toString() + " min"}
                onChange={(value) =>
                  setNewSession({
                    ...newSession,
                    durationMinutes: parseInt(value),
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col flex-1 gap-1">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                value={formatEur(parseFloat(newSession.price ?? "0.00"))}
                onChange={(e) =>
                  setNewSession({ ...newSession, price: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <Label htmlFor="discount">Discount</Label>
              <Input
                id="discount"
                value={formatEur(parseFloat(newSession.discount ?? "0.00"))}
                onChange={(e) =>
                  setNewSession({ ...newSession, discount: e.target.value })
                }
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col flex-1 gap-1">
              <Label htmlFor="paymentFinalization">Payment</Label>
              <Combobox
                options={[{ name: "before" }, { name: "after" }]}
                type="payment finalization"
                value={newSession.paymentFinalization}
                onChange={(value) =>
                  setNewSession({
                    ...newSession,
                    paymentFinalization:
                      value as typeof newSession.paymentFinalization,
                  })
                }
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <Label htmlFor="paymentMethod">Payment method</Label>
              <Combobox
                options={[
                  { name: "card" },
                  { name: "paypal" },
                  { name: "bank transfer" },
                ]}
                value={newSession.paymentMethod}
                type="payment method"
                onChange={(value) =>
                  setNewSession({
                    ...newSession,
                    paymentMethod: value as typeof newSession.paymentMethod,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col flex-1 gap-1">
              <Label htmlFor="location">Location</Label>
              <Combobox
                options={[{ name: "online" }, { name: "in-person" }]}
                value={newSession.location}
                type="location"
                onChange={(value) =>
                  setNewSession({
                    ...newSession,
                    location: value as typeof newSession.location,
                  })
                }
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <Label htmlFor="generateInvoice" className="text-left">
                Generate invoice
              </Label>
              <Checkbox
                id="generateInvoice"
                checked={newSession.generateInvoice}
                onCheckedChange={(checked) =>
                  setNewSession({
                    ...newSession,
                    generateInvoice: checked.valueOf() as boolean,
                  })
                }
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={isButtonDisabled}
            type="submit"
            onClick={() => {
              setOpen(false);
              // Combine selected date and time into one date object
              const { date, time, ...rest } = newSession;
              date.setHours(time.getHours(), time.getMinutes());
              addSession({ ...rest, date });
            }}
          >
            Add session
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddSession;
