import { leadStore } from "@/store/store";
import { LeadType } from "@/types/types";

export function getStoreIndex() {
    const length = leadStore.getState().leads.length;
    return length + 1;
}

export function reorderStoreIndexes(storeArray: LeadType[]) {
    const sorted = [];
    for (let i = 0; i < storeArray.length; i++) {
        sorted.push({
            id: i + 1,
            billing: storeArray[i].billing,
            company: storeArray[i].company,
            group: storeArray[i].group,
            presence: storeArray[i].presence,
        });
    }
    return sorted;
}

export function findIntersections(
    firstArr: LeadType[],
    secondArr: LeadType[],
    thirdArr: LeadType[]
) {
    const intersectedBetweenTwoArrs: LeadType[] = [];
    firstArr.map((firstItem) => {
        secondArr.map((secondItem) => {
            if (JSON.stringify(firstItem) === JSON.stringify(secondItem))
                intersectedBetweenTwoArrs.push(firstItem);
        });
    });
    const finallyIntersected: LeadType[] = [];
    intersectedBetweenTwoArrs.map((item) => {
        thirdArr.map((thirdItem) => {
            if (JSON.stringify(item) === JSON.stringify(thirdItem)) finallyIntersected.push(item);
        });
    });
    return finallyIntersected;
}
