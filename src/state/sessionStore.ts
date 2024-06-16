import { Session, mockSessions } from "@/data/data";
import { create } from "zustand";

type SessionState = {
  sessions: Session[];
  addSession: (session: Session) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  sessions: mockSessions,
  addSession: (session: Session) =>
    set((state) => ({
      sessions: [...state.sessions, session],
    })),
}));
