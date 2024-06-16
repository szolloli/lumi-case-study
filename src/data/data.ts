// Common types definition for re-usability
type PaymentMethod = "card" | "paypal" | "bank-transfer";
type PaymentFinalization = "before" | "after"; // Client pays before or after the session
type SessionLocation = "online" | "in-person";

// Main entities
type Client = {
  id: string;
  name: string;
  discount: string;
  paymentMethodPreference: PaymentMethod;
  locationPreference: SessionLocation;
  generateInvoices: boolean;
};

type Product = {
  id: string;
  name: string;
  durationMinutes: number;
  price: string;
  paymentFinalization: PaymentFinalization;
};

type Session = {
  id: string;
  clientId: string;
  productId: string;
  name: string;
  date: Date;

  // Defaults from the Product
  durationMinutes: number;
  price: string;
  paymentFinalization: PaymentFinalization;

  // Defaults from the Client
  discount: string; // flat value in EUR
  paymentMethod: PaymentMethod;
  location: SessionLocation;
  generateInvoice: boolean;
};

const mockClients: Client[] = [
  {
    id: "client-1",
    name: "John Doe",
    discount: "10",
    paymentMethodPreference: "card" as const,
    locationPreference: "online" as const,
    generateInvoices: true,
  },
  {
    id: "client-2",
    name: "James Smith",
    discount: "20",
    paymentMethodPreference: "paypal" as const,
    locationPreference: "in-person" as const,
    generateInvoices: false,
  },
  {
    id: "client-3",
    name: "Jim Jones",
    discount: "15",
    paymentMethodPreference: "paypal" as const,
    locationPreference: "in-person" as const,
    generateInvoices: false,
  },
];

const mockProducts: Product[] = [
  {
    id: "product-1",
    name: "PTSD therapy",
    durationMinutes: 60,
    price: "25",
    paymentFinalization: "before" as const,
  },
  {
    id: "product-2",
    name: "AA Meeting",
    durationMinutes: 120,
    price: "40",
    paymentFinalization: "after" as const,
  },
  {
    id: "product-3",
    name: "Couple consultation",
    durationMinutes: 45,
    price: "20",
    paymentFinalization: "after" as const,
  },
];

const mockSessions: Session[] = [
  {
    id: "session-1",
    clientId: "client-1",
    productId: "product-1",
    name: "John's 3rd session",
    date: new Date("2020-01-01T12:00:00"),
    durationMinutes: 60,
    price: "10",
    paymentFinalization: "before" as const,
    discount: "10",
    paymentMethod: "card" as const,
    location: "online" as const,
    generateInvoice: true,
  },
  {
    id: "session-2",
    clientId: "client-2",
    productId: "product-2",
    name: "Joe's 1st session",
    date: new Date("2020-01-02T12:00:00"),
    durationMinutes: 120,
    price: "20",
    paymentFinalization: "after" as const,
    discount: "0",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-3",
    clientId: "client-1",
    productId: "product-2",
    name: "John's 4th session",
    date: new Date("2020-01-01T16:00:00"),
    durationMinutes: 45,
    price: "45",
    paymentFinalization: "after" as const,
    discount: "20",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-4",
    clientId: "client-2",
    productId: "product-1",
    name: "James's 2nd session",
    date: new Date("2020-01-02T13:00:00"),
    durationMinutes: 120,
    price: "20",
    paymentFinalization: "after" as const,
    discount: "10",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-5",
    clientId: "client-3",
    productId: "product-3",
    name: "Jim's 14th session",
    date: new Date("2020-01-02T18:00:00"),
    durationMinutes: 120,
    price: "30",
    paymentFinalization: "after" as const,
    discount: "20",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-6",
    clientId: "client-1",
    productId: "product-1",
    name: "John's 5th session",
    date: new Date("2020-01-03T09:00:00"),
    durationMinutes: 60,
    price: "10",
    paymentFinalization: "before" as const,
    discount: "10",
    paymentMethod: "card" as const,
    location: "online" as const,
    generateInvoice: true,
  },
  {
    id: "session-7",
    clientId: "client-2",
    productId: "product-2",
    name: "Joe's 2nd session",
    date: new Date("2020-01-03T10:00:00"),
    durationMinutes: 120,
    price: "20",
    paymentFinalization: "after" as const,
    discount: "0",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-8",
    clientId: "client-1",
    productId: "product-2",
    name: "John's 6th session",
    date: new Date("2020-01-03T11:00:00"),
    durationMinutes: 45,
    price: "45",
    paymentFinalization: "after" as const,
    discount: "20",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-9",
    clientId: "client-2",
    productId: "product-1",
    name: "James's 3rd session",
    date: new Date("2020-01-03T12:00:00"),
    durationMinutes: 120,
    price: "20",
    paymentFinalization: "after" as const,
    discount: "10",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-10",
    clientId: "client-3",
    productId: "product-3",
    name: "Jim's 15th session",
    date: new Date("2020-01-03T13:00:00"),
    durationMinutes: 120,
    price: "30",
    paymentFinalization: "after" as const,
    discount: "20",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-11",
    clientId: "client-1",
    productId: "product-1",
    name: "John's 7th session",
    date: new Date("2020-01-03T14:00:00"),
    durationMinutes: 60,
    price: "10",
    paymentFinalization: "before" as const,
    discount: "10",
    paymentMethod: "card" as const,
    location: "online" as const,
    generateInvoice: true,
  },
  {
    id: "session-12",
    clientId: "client-2",
    productId: "product-2",
    name: "Joe's 3rd session",
    date: new Date("2020-01-03T15:00:00"),
    durationMinutes: 120,
    price: "20",
    paymentFinalization: "after" as const,
    discount: "0",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-13",
    clientId: "client-1",
    productId: "product-2",
    name: "John's 8th session",
    date: new Date("2020-01-03T16:00:00"),
    durationMinutes: 45,
    price: "45",
    paymentFinalization: "after" as const,
    discount: "20",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-14",
    clientId: "client-2",
    productId: "product-1",
    name: "James's 4th session",
    date: new Date("2020-01-03T17:00:00"),
    durationMinutes: 60,
    price: "10",
    paymentFinalization: "before" as const,
    discount: "10",
    paymentMethod: "card" as const,
    location: "online" as const,
    generateInvoice: true,
  },
  {
    id: "session-15",
    clientId: "client-3",
    productId: "product-3",
    name: "Jim's 16th session",
    date: new Date("2020-01-03T18:00:00"),
    durationMinutes: 120,
    price: "30",
    paymentFinalization: "after" as const,
    discount: "20",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-16",
    clientId: "client-1",
    productId: "product-1",
    name: "John's 9th session",
    date: new Date("2020-01-03T19:00:00"),
    durationMinutes: 60,
    price: "10",
    paymentFinalization: "before" as const,
    discount: "10",
    paymentMethod: "card" as const,
    location: "online" as const,
    generateInvoice: true,
  },
  {
    id: "session-17",
    clientId: "client-2",
    productId: "product-2",
    name: "Joe's 4th session",
    date: new Date("2020-01-03T20:00:00"),
    durationMinutes: 120,
    price: "20",
    paymentFinalization: "after" as const,
    discount: "0",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
  {
    id: "session-18",
    clientId: "client-1",
    productId: "product-2",
    name: "John's 10th session",
    date: new Date("2020-01-03T21:00:00"),
    durationMinutes: 45,
    price: "45",
    paymentFinalization: "after" as const,
    discount: "20",
    paymentMethod: "paypal" as const,
    location: "in-person" as const,
    generateInvoice: false,
  },
];

export {
  mockClients,
  mockProducts,
  mockSessions,
  type Client,
  type Product,
  type Session,
  type PaymentFinalization,
};
