import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LeadType } from "@/types/types";
import { reorderStoreIndexes, findIntersections } from "@/utils/helpers";

type StoreActions = {
    addLead: (newLead: LeadType) => void;
    changeLead: (changedLead: LeadType) => void;
    deleteLead: (leadToDelete: LeadType) => void;
    initialFiltersSet: () => void;
    filterByName: (filterQuery: string) => void;
    filterByCompany: (filterQuery: string) => void;
    filterByPresence: (filterOption: "unfiltered" | "absent" | "present") => void;
};

type StoreState = {
    leads: LeadType[];
    crossfiltered: LeadType[];
    filteredByName: LeadType[];
    filteredByCompany: LeadType[];
    filteredByPresence: LeadType[];
};

type LeadStoreType = StoreState & StoreActions;

export const leadStore = create<LeadStoreType>()(
    persist(
        (set, get) => ({
            leads: [],
            crossfiltered: [],
            filteredByName: [],
            filteredByCompany: [],
            filteredByPresence: [],
            addLead: (newLead) => {
                const oldState = get().leads;
                const state = [...oldState, newLead];
                set({
                    leads: state,
                    crossfiltered: state,
                    filteredByCompany: state,
                    filteredByName: state,
                    filteredByPresence: state,
                });
            },
            changeLead: (changedLead) => {
                const state = get().leads;
                state.map((oldLead) => {
                    if (oldLead.id === changedLead.id) {
                        state[state.indexOf(oldLead)] = changedLead;
                    }
                });
                set({
                    leads: state,
                    crossfiltered: state,
                    filteredByCompany: state,
                    filteredByName: state,
                    filteredByPresence: state,
                });
            },
            deleteLead: (leadToDelete) => {
                const newState = get().leads.filter((lead) => lead.id !== leadToDelete.id);
                const state = reorderStoreIndexes(newState);
                set({
                    leads: state,
                    crossfiltered: state,
                    filteredByCompany: state,
                    filteredByName: state,
                    filteredByPresence: state,
                });
            },
            initialFiltersSet: () => {
                const state = get().leads;
                set({
                    crossfiltered: state,
                    filteredByCompany: state,
                    filteredByName: state,
                    filteredByPresence: state,
                });
            },
            filterByName: (filterQuery) => {
                if (filterQuery === "") set({ filteredByName: get().leads });
                let state = get().leads;
                state = state.filter((lead) => lead.billing.includes(filterQuery));
                set({ filteredByName: state });
                set({
                    crossfiltered: findIntersections(
                        get().filteredByCompany,
                        get().filteredByName,
                        get().filteredByPresence
                    ),
                });
            },
            filterByCompany: (filterQuery) => {
                if (filterQuery === "") set({ filteredByCompany: get().leads });
                let state = get().leads;
                state = state.filter((lead) => lead.company.includes(filterQuery));
                set({ filteredByCompany: state });
                set({
                    crossfiltered: findIntersections(
                        get().filteredByCompany,
                        get().filteredByName,
                        get().filteredByPresence
                    ),
                });
            },
            filterByPresence: (action) => {
                if (action === "unfiltered") set({ filteredByPresence: get().leads });
                if (action === "absent") {
                    const state = get().leads.filter((lead) => lead.presence === "false");
                    set({ filteredByPresence: state });
                }
                if (action === "present") {
                    const state = get().leads.filter((lead) => lead.presence === "true");
                    set({ filteredByPresence: state });
                }
                set({
                    crossfiltered: findIntersections(
                        get().filteredByCompany,
                        get().filteredByName,
                        get().filteredByPresence
                    ),
                });
            },
        }),
        { name: "leads", storage: createJSONStorage(() => localStorage) }
    )
);
