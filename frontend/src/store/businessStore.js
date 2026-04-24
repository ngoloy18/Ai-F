import { create } from 'zustand';

export const useBusinessStore = create((set) => ({
  currentIdea: null,
  businessPlan: null,
  marketResearch: null,
  financialData: null,
  loading: false,
  error: null,

  setIdea: (idea) => set({ currentIdea: idea }),
  setBusinessPlan: (plan) => set({ businessPlan: plan }),
  setMarketResearch: (research) => set({ marketResearch: research }),
  setFinancialData: (data) => set({ financialData: data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  reset: () => set({
    currentIdea: null,
    businessPlan: null,
    marketResearch: null,
    financialData: null,
    loading: false,
    error: null,
  }),
}));
