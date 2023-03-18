import { EthereumTransaction, EthereumLog } from "@subql/types-ethereum";
import { BigNumber } from "@ethersproject/bignumber";
import { Transfer } from "../types";

// Setup types from ABI
type TransferEventArgs = [string, string, BigNumber] & {
  from: string;
  to: string;
  value: BigNumber;
};

// Save all transfers
export async function handleTransfer(
  log: EthereumLog<TransferEventArgs>
): Promise<void> {
  const transfer = Transfer.create({
    id: log.transactionHash,
    from: log.args.from,
    to: log.args.to,
    value: log.args.value.toBigInt(),
  });

  await transfer.save();
}
