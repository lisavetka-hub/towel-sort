module.exports = function towelSort(matrix) {
    return (matrix || []).reduce(
        (accum, currentElement, idx) =>
            (accum = [
                ...accum,
                ...(idx % 2 ? currentElement.reverse() : currentElement)
            ]),
        []
    );
};
