function solution(spell, dic) {
    
    spell = spell.sort().join('')
    
    return dic.map((el) => el.split('').sort().join('')).find(a => a === spell) !== undefined ? 1 : 2  
    
}