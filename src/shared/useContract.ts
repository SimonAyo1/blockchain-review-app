import { Address } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { toast } from "react-toastify";
import ABI from "./utils/abi.json";

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

export const useSubmitReview = async (arg: SubmitReviewArgs) => {
  const { writeContractAsync } = useWriteContract();
  const { isConnected } = useAccount();

  return async (errorCallback: () => void, successCallback: () => void) => {
    writeContractAsync({
      address: CONTRACT,
      abi: ABI,
      functionName: "submitReview",
      args: [...Object.values(arg)],
    })
      .then((res) => {
        onSuccess(successCallback, "Submited review successfully");
        return res;
      })
      .catch((error) => {
        onError(error, errorCallback, isConnected);
        return error;
      });
  };
};

export const useUpVoteReview = () => {
  const { writeContractAsync } = useWriteContract();
  const { isConnected } = useAccount();

  return async (
    errorCallback: () => void,
    successCallback: () => void,
    arg: UpVoteReviewArgs
  ) => {
    writeContractAsync({
      address: CONTRACT,
      abi: ABI,
      functionName: "upVoteReview",
      args: [...Object.values(arg)],
    })
      .then(() => {
        onSuccess(successCallback, "Voted review successfully");
      })
      .catch((error) => {
        onError(error, errorCallback, isConnected);
      });
  };
};

export const useDownVoteReview = () => {
  const { writeContractAsync } = useWriteContract();
  const { isConnected } = useAccount();

  return async (
    errorCallback: () => void,
    successCallback: () => void,
    arg: DownVoteReviewArgs
  ) => {
    writeContractAsync({
      address: CONTRACT,
      abi: ABI,
      functionName: "downVoteReview",
      args: [...Object.values(arg)],
    })
      .then(() => {
        onSuccess(successCallback, "");
      })
      .catch((error) => {
        onError(error, errorCallback, isConnected);
      });
  };
};

export const useGetAverageRating = () => {
  return async (arg: GetAverageRatingArgs) => {
    try {
      const { data } = await useReadContract({
        address: CONTRACT,
        abi: ABI,
        functionName: "getAverageRating",
        args: [...Object.values(arg)],
      });
      return data;
    } catch (error) {
      toast.error("Error fetching average rating");
      throw error;
    }
  };
};

export const useGetCompanyReviews = (arg: GetCompanyReviewsArgs) => {
  () => {
    try {
      const { data } = useReadContract({
        address: CONTRACT,
        abi: ABI,
        functionName: "getCompanyReviews",
        args: [...Object.values(arg)],
      });
      return data;
    } catch (error) {
      toast.error("Error fetching company reviews");
      throw error;
    }
  };
};
