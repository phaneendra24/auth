import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  id: string;
};

type Action = {
  updateid: (firstName: State["id"]) => void;
};

const useData: any = persist(
  (set: any) => ({
    id: "",
    updateid: (id: any) => set(() => ({ id: id })),
  }),
  {
    name: "id", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
  }
);
export const useStore = create<State & Action>(useData);
