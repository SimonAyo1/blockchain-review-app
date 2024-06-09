import { Address } from "viem";
import { toast } from "react-toastify";

export interface SubmitReviewArgs {
  companyName: string;
  reviewText: string;
  date: string;
  userName: string;
  rating: number;
}

export interface UpVoteReviewArgs {
  companyName: string;
  reviewIndex: number;
}

export interface DownVoteReviewArgs {
  companyName: string;
  reviewIndex: number;
}

export interface GetAverageRatingArgs {
  companyName: string;
}

export interface GetCompanyReviewsArgs {
  companyName: string;
}

export const CONTRACT: Address = "0x8505cdEBD67B82dc5434AFCc580465120E899CF3";

export const onSuccess = (action: () => void, message: string) => {
  toast.success(message);
  action();
};
export const onError = (
  error: any,
  callback: () => void,
  isConnected: boolean
) => {
  callback();
  if (!isConnected) {
    toast.warning("Please connect your wallet first");
    return;
  }
  if (error?.message?.includes("Your balance is not enough!")) {
    toast.error("Your balance is not enough!");
    return;
  }
  if (error?.message?.includes("User denied transaction signature")) {
    toast.error("You denied the transaction");
    return;
  }
  if (error?.message?.includes("You have already up-voted this review")) {
    toast.error("Already up-voted this review");
    return;
  }  
  if (error?.message?.includes("You have already down-voted this review")) {
    toast.error("Already down-voted this review");
    return;
  }  
  if (error?.message?.includes("insufficient allowance")) {
    toast.error("Insufficient Allowance");
    return;
  }
  if (error?.message?.includes("insufficient funds")) {
    toast.error("You have insufficient funds");
    return;
  }
  if (error?.message?.includes("Missing or invalid parameters")) {
    toast.error("You have insufficient funds");
    return;
  }
  toast.error("Error, Transaction unsuccessful.");
  
};

