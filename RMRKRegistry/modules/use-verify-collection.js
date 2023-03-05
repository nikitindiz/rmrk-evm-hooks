/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useEffect, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKRegistry } from '../abi/RMRKRegistry';
const availableVerifyCollectionNetworks = {
    'moonbase-alpha': '0x7a1785a89aEbdD16F23731D4613a5e746eB8e495',
    'zksync-testnet': '0xC60c3F9dC842dc413df360f42f95CC708e240616',
};
export const useVerifyCollection = ({ _collection }, _a) => {
    var { chainId, network, signer } = _a, rest = __rest(_a, ["chainId", "network", "signer"]);
    const [receipt, setReceipt] = useState();
    const [waitError, setWaitError] = useState();
    const [isWaiting, setIsWaiting] = useState();
    const prepare = usePrepareContractWrite(Object.assign({ address: availableVerifyCollectionNetworks[network], chainId, abi: RMRKRegistry, functionName: 'verifyCollection', args: [_collection] }, rest));
    const writeHookReturn = useContractWrite(prepare.config);
    const onWrite = () => {
        const { write } = writeHookReturn;
        if (write) {
            write();
        }
    };
    const contract = getContract({
        address: availableVerifyCollectionNetworks[network],
        abi: RMRKRegistry,
        signerOrProvider: signer || undefined,
    });
    useEffect(() => {
        const { data } = writeHookReturn;
        if (data && !receipt) {
            setIsWaiting(true);
            data
                .wait()
                .then((receipt) => {
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
    };
};
//# sourceMappingURL=use-verify-collection.js.map