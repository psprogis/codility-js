/*
 * complete the function computeParameterValue. The function must return an array of strings that
 * denotes the final parameter list values in the order their keys were first encountered.
 *
 * computeParameterValue has the following parameter(s):
 *   sources: a 2-dimensional array of key:value pairs, each row is one source's data,
 *     sources presented from lowest to highest preference.
 *
 * constraints
 *   1 <= n < 100
 *   1 <= p < 1000
 */

function computeParameterValue(sources) {
    const finalParameters = {};

    sources.flat().forEach(parameter => {
        let [key, value] = parameter.split(':');
        finalParameters[key] = value;
    })

    return Object.values(finalParameters);
}

module.exports.computeParameterValue = computeParameterValue;
