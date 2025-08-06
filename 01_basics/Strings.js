const name= "Maau"
const numb= 23
//String Interpolation
console.log(`Kuchi gote ${name} au ta babaday achi ${numb} january re`)

const Motu= new String("Bilei Suna KuchaPuna ") //Object
console.log(Motu)
console.log([Motu[0],Motu.__proto__,Motu.length,Motu.toLowerCase(),Motu.charAt('2'),Motu.indexOf('K'),Motu.substring(11,16),Motu.slice(-11,12),Motu.trim(),Motu.replace('Kucha','Pucha'),Motu.includes('Dhalla'),Motu.split(' ',' ')]) 
//In substring the last number character is not includer it's last_digit--
//When use use index of but you do not have the character it returns -1
//In slice why can not i give -value,+value sometimes when start>end you get negative when we put -3, 12-3 is 18 and 18,12 will not work due to start>end and -ve means ulta
