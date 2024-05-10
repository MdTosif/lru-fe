import { create } from "zustand";

const useToastStore = create<{
  toastMsgs: string[];
  setToastMsg: (msg: string) => void;
  unsetToastMsg: (msg: string) => void;
}>((set, get) => ({
  toastMsgs: [],
  setToastMsg: (msg: string) => {
    const data = get();
    if (data.toastMsgs.includes(msg)) return;
    data.toastMsgs.push(msg);
    set({ toastMsgs: data.toastMsgs });
    
  },
  unsetToastMsg: (msg: string) => {
    const data = get();
    data.toastMsgs = data.toastMsgs.filter((e) => e != msg);
    set({ toastMsgs: data.toastMsgs });
  },
}));

export default useToastStore;
