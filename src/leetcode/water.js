function maxArea(heights) {
    let start = 0;
    let end = heights.length - 1;
    let result = 0;

    while (start < end) {
        let currentMaxArea = calculateArea(heights, start, end);

        result = Math.max(result, currentMaxArea);

        if (heights[start] < heights[end]) {
            ++start;
        } else {
            --end;
        }
    }

    return result;
}

function calculateArea(heights, start, end) {
    return (end - start) * Math.min(heights[start], heights[end]);
}

module.exports.maxArea = maxArea;