/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sArr=s.normalize().split('').sort().join('');
    const tArr=t.normalize().split('').sort().join('');
    if(sArr===tArr)
        return true;
    
    return false
};