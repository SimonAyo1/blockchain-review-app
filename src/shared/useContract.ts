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

export const CONTRACT: Address = "0xb76a8740365fbf39af268e65a74ec602c6f3630e";

export const onSuccess = (action: () => void) => {
  toast.success("Submited review successfully");
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
  if (error?.stack?.includes("Your balance is not enough!")) {
    toast.error("Your balance is not enough!");
    return;
  }
  if (error?.stack?.includes("User denied transaction signature")) {
    toast.error("You denied the transaction");
    return;
  }
  if (error?.stack?.includes("insufficient allowance")) {
    toast.error("Insufficient Allowance");
    return;
  }
  if (error?.stack?.includes("insufficient funds")) {
    toast.error("You have insufficient funds");
    return;
  }
  if (error?.stack?.includes("Missing or invalid parameters")) {
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
        onSuccess(successCallback);
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
        onSuccess(successCallback);
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
        onSuccess(successCallback);
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
