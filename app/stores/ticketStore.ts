// src/stores/ticketStore.ts
import { create } from 'zustand';
import { Line, TicketType } from '../../data/lib/fares';

interface JourneySegment {
  line: Line;
  from: string;
  to: string;
  sjt: number | string;
  svc: number | string;
}

interface GeneratedTicketData {
  id: string;
  ticketType: TicketType;
  departureStationName: string;
  departureStationLine: Line;
  arrivalStationName: string;
  arrivalStationLine: Line;
  journeySegments: JourneySegment[];
  fare: number;
  generatedAt: string;
}

// Define the state structure for the store
interface TicketState {
  activeTickets: GeneratedTicketData[];
  addTicket: (ticket: GeneratedTicketData) => void;
}

// Create the store
export const useTicketStore = create<TicketState>((set) => ({
  // Initial state: an empty array of tickets
  activeTickets: [],

  // Action to add a new ticket
  addTicket: (ticket) => set((state) => ({
    activeTickets: [...state.activeTickets, ticket]
  })),
}));

export type { GeneratedTicketData };

