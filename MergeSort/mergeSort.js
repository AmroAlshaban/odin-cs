function mergeSortedLists(list1, list2) {
    let sortedList = [];
    let i = 0;
    let j = 0;

    let counter = 0;

    while (counter < list1.length + list2.length) {
        if (list1[i] < list2[j]) {
            sortedList.push(list1[i]);
            i += 1;
        } else {
            sortedList.push(list2[j]);
            j += 1;
        };

        if (i === list1.length) {
            sortedList.push(...list2.slice(j));
            break;
        } else if (j === list2.length) {
            sortedList.push(...list1.slice(i));
            break;
        };

        counter += 1;
    };

    return sortedList;
};


function mergeSort(list) {
    if (list.length === 0 || list.length === 1) {
        return list;
    };

    const listMid = Math.floor(list.length / 2);
    let leftList = list.slice(0, listMid);
    let rightList = list.slice(listMid);

    leftList = mergeSort(leftList);
    rightList = mergeSort(rightList);
    const sortedList = mergeSortedLists(leftList, rightList);

    return sortedList;
};
