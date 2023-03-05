/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useEffect, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
import { decodeWagmiReceiptLogs } from '@nikitindiz/abi-to-js';
const availableOnERC1155ReceivedNetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
export const useOnERC1155Received = (args, _a) => {
    var { chainId, network, signer } = _a, rest = __rest(_a, ["chainId", "network", "signer"]);
    const [receipt, setReceipt] = useState();
    const [waitError, setWaitError] = useState();
    const [isWaiting, setIsWaiting] = useState();
    const [decodedLogs, setDecodedLogs] = useState();
    const prepare = usePrepareContractWrite(Object.assign({ address: availableOnERC1155ReceivedNetworks[network], chainId, abi: RMRKMarketplace, functionName: 'onERC1155Received', args }, rest));
    const writeHookReturn = useContractWrite(prepare.config);
    const onWrite = () => {
        const { write } = writeHookReturn;
        if (write) {
            write();
        }
    };
    const contract = getContract({
        address: availableOnERC1155ReceivedNetworks[network],
        abi: RMRKMarketplace,
        signerOrProvider: signer || undefined,
    });
    useEffect(() => {
        const { data } = writeHookReturn;
        if (data && !receipt) {
            setIsWaiting(true);
            data
                .wait()
                .then((receipt) => {
                setDecodedLogs(decodeWagmiReceiptLogs(contract, receipt));
                setReceipt(receipt);
            })
                .catch(setWaitError)
                .finally(() => {
                setIsWaiting(false);
            });
        }
    }, [writeHookReturn.data, contract, receipt]);
    return {
        contract,
        prepare,
        write: Object.assign(Object.assign({}, writeHookReturn), { write: onWrite, isWaiting }),
        receipt,
        waitError,
        decodedLogs,
    };
};
//# sourceMappingURL=use-on-erc1155-received.js.map