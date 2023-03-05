/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useEffect, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKNestableMultiAssetFactory } from '../abi/RMRKNestableMultiAssetFactory';
const availableDeployRMRKCollectionNetworks = {
    'moonbase-alpha': '0x2E8CA7459deBd6499eeb8442122d28b95E23bfd2',
};
export const useDeployRMRKCollection = ({ name, symbol, collectionMetadata, tokenURI, data }, _a) => {
    var { chainId, network, signer } = _a, rest = __rest(_a, ["chainId", "network", "signer"]);
    const [receipt, setReceipt] = useState();
    const [waitError, setWaitError] = useState();
    const [isWaiting, setIsWaiting] = useState();
    const prepare = usePrepareContractWrite(Object.assign({ address: availableDeployRMRKCollectionNetworks[network], chainId, abi: RMRKNestableMultiAssetFactory, functionName: 'deployRMRKCollection', args: [name, symbol, collectionMetadata, tokenURI, data] }, rest));
    const writeHookReturn = useContractWrite(prepare.config);
    const onWrite = () => {
        const { write } = writeHookReturn;
        if (write) {
            write();
        }
    };
    const contract = getContract({
        address: availableDeployRMRKCollectionNetworks[network],
        abi: RMRKNestableMultiAssetFactory,
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
//# sourceMappingURL=use-deploy-rmrk-collection.js.map