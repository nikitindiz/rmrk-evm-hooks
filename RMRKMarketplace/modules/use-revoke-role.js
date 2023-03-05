/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useEffect, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';
import { RMRKMarketplace } from '../abi/RMRKMarketplace';
const availableRevokeRoleNetworks = {
    'moonbase-alpha': '0x3A854CFc9B912B0219146C4B829cD8Ce43695743',
};
export const useRevokeRole = ({ role, account }, _a) => {
    var { chainId, network, signer } = _a, rest = __rest(_a, ["chainId", "network", "signer"]);
    const [receipt, setReceipt] = useState();
    const [waitError, setWaitError] = useState();
    const [isWaiting, setIsWaiting] = useState();
    const prepare = usePrepareContractWrite(Object.assign({ address: availableRevokeRoleNetworks[network], chainId, abi: RMRKMarketplace, functionName: 'revokeRole', args: [role, account] }, rest));
    const writeHookReturn = useContractWrite(prepare.config);
    const onWrite = () => {
        const { write } = writeHookReturn;
        if (write) {
            write();
        }
    };
    const contract = getContract({
        address: availableRevokeRoleNetworks[network],
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
//# sourceMappingURL=use-revoke-role.js.map