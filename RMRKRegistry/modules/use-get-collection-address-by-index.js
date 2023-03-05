/** WARNING! This file is auto-generated. Please do not edit! */
import { __rest } from "tslib";
import { useContractReads } from 'wagmi';
import { RMRKRegistry } from '../abi/RMRKRegistry';
const availableGetCollectionAddressByIndexNetworks = {
    'moonbase-alpha': '0x7a1785a89aEbdD16F23731D4613a5e746eB8e495',
    'zksync-testnet': '0xC60c3F9dC842dc413df360f42f95CC708e240616',
};
const createMapper = ({ chainId, contractAddress, }) => function mapGetCollectionAddressByIndexArgs({ _index }) {
    return {
        address: contractAddress,
        abi: RMRKRegistry,
        functionName: 'getCollectionAddressByIndex',
        chainId,
        args: [_index],
    };
};
export const useGetCollectionAddressByIndex = (args, _a) => {
    var { skip, chainId, network } = _a, rest = __rest(_a, ["skip", "chainId", "network"]);
    return useContractReads(Object.assign({ contracts: args.map(createMapper({
            chainId,
            contractAddress: availableGetCollectionAddressByIndexNetworks[network],
        })), enabled: !skip }, rest));
};
//# sourceMappingURL=use-get-collection-address-by-index.js.map