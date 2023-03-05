/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKEquippableImpl } from '../abi/RMRKEquippableImpl';
const createMapper = ({ chainId, contractAddress, }) => function mapGetEquipmentArgs({ tokenId, targetCatalogAddress, slotPartId, }) {
    return {
        address: contractAddress,
        abi: RMRKEquippableImpl,
        functionName: 'getEquipment',
        chainId,
        args: [tokenId, targetCatalogAddress, slotPartId],
    };
};
export const useGetEquipment = (args, _a) => {
    var { skip, chainId, contractAddress } = _a, rest = __rest(_a, ["skip", "chainId", "contractAddress"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({ chainId, contractAddress })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-equipment.js.map