/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapCanTokenBeEquippedWithAssetIntoSlotArgs({ parent, tokenId, assetId, slotId, }) {
    return {
        address: contractAddress,
        abi: RMRKEquippableImpl,
        functionName: 'canTokenBeEquippedWithAssetIntoSlot',
        chainId,
        args: [parent, tokenId, assetId, slotId],
    };
};
export const useCanTokenBeEquippedWithAssetIntoSlot = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-can-token-be-equipped-with-asset-into-slot.js.map